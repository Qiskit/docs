# This code is a Qiskit project.
#
# (C) Copyright IBM 2023.
#
# This code is licensed under the Apache License, Version 2.0. You may obtain a
# copy of this license in the LICENSE file in the root directory of this source
# tree or at http://www.apache.org/licenses/LICENSE-2.0.
#
# Any modifications or derivative works of this code must retain this copyright
# notice, and modified files need to carry a notice indicating that they have
# been altered from the originals.

from __future__ import annotations


import argparse
import asyncio
import sys
import textwrap
from contextlib import contextmanager
from dataclasses import dataclass
from datetime import datetime
from pathlib import Path
from typing import Iterator

import nbclient
import nbconvert
import nbformat
import tomli
from qiskit_ibm_runtime import QiskitRuntimeService
from squeaky import clean_notebook

# If not submitting jobs, we mock the real backend by prepending this to each notebook
MOCKING_CODE = """\
from qiskit_ibm_runtime import QiskitRuntimeService
from qiskit_ibm_runtime.fake_provider import FakeKyoto

def patched_least_busy(self, *args, **kwarg):
  return FakeKyoto()

QiskitRuntimeService.least_busy = patched_least_busy
"""

@dataclass
class Config:
    all_notebooks: str
    notebooks_exclude: list[str]
    notebooks_that_submit_jobs: list[str]
    notebooks_no_mock: list[str]

    @classmethod
    def read(cls, path: str) -> Config:
        """
        Load the globs from the TOML file
        """
        try:
            return cls(**tomli.loads(Path(path).read_text()))
        except TypeError as err:
            raise ValueError(
                f"Couldn't read config from {path}; check it exists and the"
                " entries are correct."
            ) from err

def matches(path: Path, glob_list: list[str]) -> bool:
    return any(path.match(glob) for glob in glob_list)

def filter_paths(paths: list[Path], args: argparse.Namespace, config: Config) -> Iterator[Path]:
    """
    Filter out any paths we don't want to run, printing messages.
    """
    for path in paths:
        if path.suffix != ".ipynb":
            print(f"ℹ️ Skipping {path}; file is not `.ipynb` format.")
            continue

        if matches(path, config.notebooks_exclude):
            print(
                f"ℹ️ Skipping {path}; to run it, edit `notebooks-exclude` in {args.config_path}."
            )
            continue

        if not args.submit_jobs and matches(path, config.notebooks_no_mock):
            print(
                f"ℹ️ Skipping {path} as it doesn't work with mock hardware; use the --submit-jobs flag to run it."
            )
            continue

        only_job_submitting_notebooks = config.notebooks_that_submit_jobs+config.notebooks_no_mock
        if args.only_submit_jobs and not matches(path, only_job_submitting_notebooks):
            print(
                f"ℹ️ Skipping {path} as it doesn't submit jobs and the --only-submit-jobs flag is set."
            )
            continue

        yield path


@dataclass(frozen=True)
class NotebookWarning:
    cell_index: int
    msg: str

    def format(self) -> str:
        """
        Format warning to pretty string
        """
        message = f"Cell {self.cell_index}:\n"
        for line in self.msg.splitlines():
            message += (
                textwrap.fill(
                    line, width=77, initial_indent=" │ ", subsequent_indent=" │ "
                )
                + "\n"
            )
        return message


def extract_warnings(notebook: nbformat.NotebookNode) -> list[NotebookWarning]:
    """
    Detect warning messages in cell outputs
    """
    notebook_warnings = []
    for cell_index, cell in enumerate(notebook.cells):
        if not hasattr(cell, "outputs"):
            continue
        if "ignore-warnings" in cell.metadata.get("tags", []):
            continue
        for output in cell.outputs:
            if hasattr(output, "name") and output.name == "stderr":
                notebook_warnings.append(
                    NotebookWarning(cell_index=cell_index, msg=output.text)
                )
    return notebook_warnings

@contextmanager
def patch_runtime(nb: nbformat.NotebookNode, *, should_patch: bool):
    if should_patch:
        nb.cells.insert(0, nbformat.v4.new_code_cell(source=MOCKING_CODE))
    yield
    if not should_patch:
         return
    nb.cells.pop(0)
    # Reset execution counts (offset by the MOCKING_CODE cell)
    for cell in nb.cells:
        if hasattr(cell, "execution_count"):
            cell.execution_count -= 1
        if not hasattr(cell, "outputs"):
            continue
        for output in cell.outputs:
            if hasattr(output, "execution_count"):
                output.execution_count -= 1

async def execute_notebook(path: Path, args: argparse.Namespace, config: Config) -> bool:
    """
    Wrapper function for `_execute_notebook` to print status and write result
    """
    is_patched = not args.submit_jobs and matches(path, config.notebooks_that_submit_jobs)
    if is_patched:
        print(f"▶️ Executing {path} (with least_busy patched to return FakeKyoto)")
    else:
        print(f"▶️ Executing {path}")
    possible_exceptions = (
        nbconvert.preprocessors.CellExecutionError,
        nbclient.exceptions.CellTimeoutError,
    )
    try:
        nb = await _execute_notebook(path, args)
    except possible_exceptions as err:
        print(f"❌ Problem in {path}:\n{err}")
        return False

    notebook_warnings = extract_warnings(nb)
    if notebook_warnings:
        print(
            f"⚠️ Warnings in {path}:\n"
            + "\n".join((w.format() for w in notebook_warnings))
        )
        return False

    if not args.write:
        print(f"✅ No problems in {path}")
        return True

    if is_patched:
        print(f"✅ No problems in {path} (not written as tested with mock backend)")
        return True

    nbformat.write(nb, path)
    print(f"✅ No problems in {path} (written)")
    return True

async def _execute_notebook(filepath: Path, args: argparse.Namespace) -> nbformat.NotebookNode:
    """
    Use nbconvert to execute notebook.
    """
    nb = nbformat.read(filepath, as_version=4)

    processor = nbconvert.preprocessors.ExecutePreprocessor(
        # If submitting jobs, we want to wait forever (-1 means no timeout)
        timeout=-1 if args.submit_jobs else 300,
        kernel_name="python3",
        extra_arguments=["--InlineBackend.figure_format='svg'"]
    )

    # This runs the notebook, including possibly submitting jobs. We run it in a
    # new thread to avoid blocking other notebooks from submitting jobs.
    with patch_runtime(nb, should_patch=not args.submit_jobs):
        await asyncio.to_thread(processor.preprocess, nb)

    if not args.write:
        return nb

    for cell in nb.cells:
        # Remove execution metadata to avoid noisy diffs.
        cell.metadata.pop("execution", None)
    nb, _ = clean_notebook(nb)
    return nb


def find_notebooks(config: Config) -> list[Path]:
    """
    Get paths to notebooks in glob `all-notebooks` that are not excluded by
    glob `notebooks-exclude`.
    """
    all_notebooks = Path(".").glob(config.all_notebooks)
    return [
        path
        for path in all_notebooks
        if not matches(path, config.notebooks_exclude)
    ]


def cancel_trailing_jobs(start_time: datetime, config_path: str) -> bool:
    """
    Cancel any runtime jobs created after `start_time`.

    Return True if none exist, False otherwise.

    Notebooks should not submit jobs during a normal test run. If they do, the
    cell will time out and this function will cancel the job to avoid wasting
    device time.

    If a notebook submits a job but does not wait for the result, this check
    will also catch it and cancel the job.
    """
    jobs = [
        job
        for job in QiskitRuntimeService().jobs(created_after=start_time)
        if not job.in_final_state()
    ]
    if not jobs:
        return True

    print(
        f"⚠️ Cancelling {len(jobs)} job(s) created after {start_time}.\n"
        "Add any notebooks that submit jobs to `notebooks-that-submit-jobs` in "
        f"`{config_path}`."
    )
    for job in jobs:
        job.cancel()
    return False


def get_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        prog="Notebook executor",
        description="For testing notebooks and updating their outputs",
    )
    parser.add_argument(
        "filenames",
        help=(
            "Paths to notebooks. If not provided, the script will search for "
            "notebooks in `docs/`. To exclude a notebook from this process, add it "
            "to `notebooks-exclude` in the config file."
        ),
        nargs="*",
    )
    parser.add_argument(
        "-w",
        "--write",
        action="store_true",
        help="Overwrite notebooks with the results of this script's execution.",
    )
    parser.add_argument(
        "--submit-jobs",
        action="store_true",
        help=(
            "Run notebooks that submit jobs to IBM Quantum and wait indefinitely "
            "for jobs to complete. Warning: this has a real cost because it uses "
            "quantum resources! Only use this argument occasionally and intentionally." 
        ),
    )
    parser.add_argument(
        "--only-submit-jobs",
        action="store_true",
        help=(
            "Same as --submit-jobs, but only runs notebooks that submit jobs. "
            "Setting this option implicitly sets --submit-jobs."
        )
    )
    parser.add_argument(
        "--config-path",
        help="Path to a TOML file containing the globs for detecting and sorting notebooks",
    )
    args = parser.parse_args()
    if args.only_submit_jobs:
        args.submit_jobs = True
    return args


async def _main() -> None:
    args = get_args()
    config = Config.read(args.config_path)
    paths = map(Path, args.filenames or find_notebooks(config))
    filtered_paths = filter_paths(paths, args, config)

    # Execute notebooks
    start_time = datetime.now()
    print("Executing notebooks:")
    results = await asyncio.gather(*(execute_notebook(path, args, config) for path in filtered_paths))
    print("Checking for trailing jobs...")
    results.append(cancel_trailing_jobs(start_time, args.config_path))
    if not all(results):
        sys.exit(1)
    sys.exit(0)

def main():
    asyncio.run(_main())
