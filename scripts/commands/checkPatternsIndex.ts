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

import { readFile } from "fs/promises";
import { pathExists } from "../lib/fs";

const IGNORE_URL = ["/guides/qiskit-serverless"];

const INDEX_PAGES = [
  "docs/guides/map-problem-to-circuits.mdx",
  "docs/guides/optimize-for-hardware.mdx",
  "docs/guides/execute-on-hardware.mdx",
  "docs/guides/postprocess-results.mdx",
];

const TOC_PATH = `docs/guides/_toc.json`;

async function getIndexEntries(indexPage: string): Promise<string[]> {
  const rawIndex = await readFile(indexPage, "utf-8");
  const result: string[] = [];
  for (const line of rawIndex.split("\n")) {
    // The index represents an unordered list of entries starting with `*`.
    if (!line.trimStart().startsWith("* ")) {
      continue;
    }

    const slug = extractPageSlug(line);
    if (slug) {
      result.push(slug);
    }
  }

  return result;
}

function extractPageSlug(text: string): string | undefined {
  const re = /\((.*)\)/gm;
  // Ex: '* [Circuit library](./circuit-library)'.
  const match = re.exec(text);
  if (!match) {
    // Nested sections don't have any link
    return undefined;
  }
  const pageSlug = match[1];
  if (pageSlug.startsWith("http") || pageSlug.startsWith("/")) {
    return pageSlug;
  }
  return `/guides/${pageSlug.split("/").pop()}`;
}

function getTocSectionPageNames(sectionNode: any): string[] {
  let results = [];
  if (sectionNode.url) {
    results.push(sectionNode.url);
  }

  if (sectionNode.children) {
    for (const child of sectionNode.children) {
      results = [...results, ...getTocSectionPageNames(child)];
    }
  }

  return results;
}

async function getToolsTocEntriesToCheck(): Promise<string[]> {
  const toc = JSON.parse(await readFile(TOC_PATH, "utf-8"));
  const toolsNode = toc.children.find((child: any) => child.title == "Tools");
  const toolsPages = getTocSectionPageNames(toolsNode);
  return toolsPages.filter((page) => !IGNORE_URL.includes(page));
}

async function getDeduplicateEntriesAndAddErrors(
  src: string,
  errors: string[],
): Promise<string[]> {
  const entries =
    src == TOC_PATH
      ? await getToolsTocEntriesToCheck()
      : await getIndexEntries(src);
  const deduplicatedPages: string[] = [];

  for (const entry of entries) {
    if (deduplicatedPages.includes(entry)) {
      errors.push(`❌ ${src}: The entry ${entry} is duplicated`);
    } else {
      deduplicatedPages.push(entry);
    }
  }

  return deduplicatedPages;
}

function addExtraIndexPagesErrors(
  indexPage: string,
  indexEntries: string[],
  toolsEntries: string[],
  errors: string[],
): void {
  const ExtraIndexPages = indexEntries.filter(
    (page) => !toolsEntries.includes(page),
  );
  if (ExtraIndexPages.length > 0) {
    ExtraIndexPages.forEach((page) =>
      errors.push(
        `❌ ${indexPage}: The entry ${page} doesn't appear in the \`Tools\` menu.`,
      ),
    );
  }
}

function addExtraToolsEntriesErrors(
  toolsEntries: string[],
  errors: string[],
): void {
  if (toolsEntries.length > 0) {
    toolsEntries.forEach((page) =>
      errors.push(`❌ The entry ${page} is not present on any index page`),
    );
  }
}

function maybePrintErrorsAndFail(
  duplicatesErrors: string[],
  extraIndexEntriesErrors: string[],
  extraToolsEntriesErrors: string[],
): void {
  let allGood = true;

  if (duplicatesErrors.length > 0) {
    duplicatesErrors.forEach((error) => console.error(error));
    console.error(`\nRemove all duplicated entries on the indices.`);
    console.error("--------\n");
    allGood = false;
  }

  if (extraIndexEntriesErrors.length > 0) {
    extraIndexEntriesErrors.forEach((error) => console.error(error));
    console.error(`\nMake sure all pages have an entry in the Tools menu.`);
    console.error("--------\n");
    allGood = false;
  }

  if (extraToolsEntriesErrors.length > 0) {
    extraToolsEntriesErrors.forEach((error) => console.error(error));
    console.error(
      "\nAdd the entries in one of the following index pages, or add the URL to the `IGNORE_URL` list at the beginning of `/scripts/commands/checkPatternsIndex.tsx` if it's not used in Workflow:",
    );
    INDEX_PAGES.forEach((index) => console.error(`\t➡️  ${index}`));
    allGood = false;
  }

  if (!allGood) {
    process.exit(1);
  }
}

async function main() {
  // Todo: Remove this conditional once the migration is done. This is used only to avoid
  // the script crashing if the file's structure doesn't exist.
  if (!(await pathExists(TOC_PATH))) {
    console.log(
      `🚧 Check skipped because the migration hasn't been completed.\n`,
    );
    process.exit(0);
  }

  const duplicatesErrors: string[] = [];
  const extraIndexEntriesErrors: string[] = [];
  const extraToolsEntriesErrors: string[] = [];

  let toolsEntries = await getDeduplicateEntriesAndAddErrors(
    TOC_PATH,
    duplicatesErrors,
  );

  for (const indexPage of INDEX_PAGES) {
    const indexEntries = await getDeduplicateEntriesAndAddErrors(
      indexPage,
      duplicatesErrors,
    );
    addExtraIndexPagesErrors(
      indexPage,
      indexEntries,
      toolsEntries,
      extraIndexEntriesErrors,
    );

    // Remove index entries from the tools entries list
    toolsEntries = toolsEntries.filter((page) => !indexEntries.includes(page));
  }

  addExtraToolsEntriesErrors(toolsEntries, extraToolsEntriesErrors);

  maybePrintErrorsAndFail(
    duplicatesErrors,
    extraIndexEntriesErrors,
    extraToolsEntriesErrors,
  );
  console.log("\n✅ No missing or duplicated pages were found\n");
}

main().then(() => process.exit());

// TODO: Allow that the guides/ folder don't exist
