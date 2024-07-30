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

import { readdir, writeFile } from "fs/promises";
import { basename, join } from "path";

import { Pkg } from "../../lib/api/Pkg.js";
import { zxMain } from "../../lib/zx.js";
import { removeSuffix } from "../../lib/stringUtils.js";

const OUTPUT_FILE = "_historical-pages-to-latest.json";

zxMain(async () => {
  await generateHistoricalRedirects();
});

export async function generateHistoricalRedirects(): Promise<void> {
  console.log(`Generating ${OUTPUT_FILE}`);
  const apiDocsPath = "./docs/api";
  const redirectData: HistoricalRedirectData = {};
  for (const packageName of Pkg.VALID_NAMES) {
    redirectData[packageName] = await getRedirectsForPackage(
      join(apiDocsPath, packageName),
    );
  }
  await writeFile(join(apiDocsPath, OUTPUT_FILE), JSON.stringify(redirectData));
}
/**
 * E.g.
 * {
 *   "qiskit": {
 *     "0.44": {
 *       "qiskit.opflow.evolutions.TrotterizationBase": "/",
 *       ...
 *       }
 *     ...
 *    }
 * }
 */
type HistoricalRedirectData = {
  [packageName: string]: {
    [version: string]: Redirects;
  };
};

type Redirects = {
  // Key ("from") is page relative to old version (e.g. qiskit.opflow.evolutions.TrotterizationBase).
  // Value is new page relative to latest version (e.g. "/")
  // If redirect does not exist, we assume "to" and "from" are the same
  [from: string]: string;
};

async function getRedirectsForPackage(
  packagePath: string,
): Promise<{ [version: string]: Redirects }> {
  const latestPages: string[] = [];
  const versionPaths: string[] = [];
  for (const entry of await readdir(packagePath, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      if (entry.name.endsWith("release-notes")) continue;
      versionPaths.push(entry.name);
    } else {
      latestPages.push(entry.name);
    }
  }
  const redirectsByVersion: { [api: string]: Redirects } = {};
  for (const path of versionPaths) {
    const version = basename(path);
    redirectsByVersion[version] = await getRedirectsForVersion(
      join(packagePath, path),
      latestPages,
    );
  }
  return redirectsByVersion;
}

async function getRedirectsForVersion(
  versionPath: string,
  latestPages: string[],
): Promise<Redirects> {
  const mdPaths = await readdir(versionPath);
  const redirects: { [from: string]: string } = {};
  for (const path of mdPaths) {
    if (latestPages.includes(basename(path))) {
      continue;
    }
    // For now, we always redirect to the top level. Future improvements could
    // try to identify the module name and redirect there if it exists.
    const pageName = removeSuffix(basename(path), ".mdx");
    redirects[pageName] = "/";
  }
  return redirects;
}
