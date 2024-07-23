// This code is a Qiskit project.
//
// (C) Copyright IBM 2024.
//
// This code is licensed under the Apache License, Version 2.0. You may
// obtain a copy of this license in the LICENSE file in the root directory
// of this source tree or at http://www.apache.org/licenses/LICENSE-2.0.
//
// Any modifications or derivative works of this code must retain this
// copyright notice, and modified files need to carry a notice indicating
// that they have been altered from the originals.

import { $ } from "zx";
import yargs from "yargs/yargs";
import { hideBin } from "yargs/helpers";
import { spellCheckDocument } from "cspell-lib";
import { globby } from "globby";
import pMap from "p-map";

import { zxMain } from "../lib/zx.js";
import { Pkg } from "../lib/api/Pkg.js";
import { readMarkdown } from "../lib/markdownReader.js";

interface Arguments {
  [x: string]: unknown;
  apis: boolean;
  config: string;
}

function readArgs(): Arguments {
  return yargs(hideBin(process.argv))
    .version(false)
    .option("apis", {
      type: "boolean",
      default: false,
      description: "Check the API docs (currently failing)",
    })
    .option("config", {
      type: "string",
      default: "scripts/config/cspell/cSpell.json",
      description: "Path to cSpell.json",
    })
    .parseSync();
}

zxMain(async () => {
  const args = readArgs();
  const cspellCmd = ["npx", "cspell", "--no-progress", "--config", args.config];

  await $`${cspellCmd} docs/**/*.mdx !docs/api/**/*.mdx docs/api/migration-guides/*.mdx`;

  if (args.apis) {
    const apiFolders = Pkg.VALID_NAMES.map((api) => `docs/api/${api}/**/*.mdx`);
    await $`${cspellCmd} ${apiFolders}`;
  }

  await checkAllNotebooks(args.config);
});

async function checkAllNotebooks(configPath: string): Promise<void> {
  const paths = await globby("docs/**/*.ipynb");
  let allGood = true;
  await pMap(paths, async (path) => {
    const errors = await checkForNotebookMistakes(path, configPath);
    if (errors.length) {
      allGood = false;
      const deduplicated = new Set(errors);
      deduplicated.forEach((mistake) =>
        console.error(`Spelling mistake in ${path}: ${mistake}`),
      );
    }
  });

  if (!allGood) {
    process.exit(1);
  }
}

/**
 * Returns any spelling mistakes in the notebook's markdown blocks, if any.
 */
async function checkForNotebookMistakes(
  fp: string,
  configPath: string,
): Promise<string[]> {
  // We should only check the markdown blocks, not code blocks.
  const text = await readMarkdown(fp);

  const checkOptions = {
    configFile: configPath,
  };
  const doc = {
    uri: fp,
    text,
  };
  const result = await spellCheckDocument(doc, checkOptions, {});

  // The line numbers get mangled by `readMarkdown()` and they do not correspond to the original notebook file.
  // So, we only return the spelling mistake without its context.
  return result.issues.map((issue) => issue.text);
}
