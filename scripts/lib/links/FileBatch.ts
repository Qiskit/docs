// This code is a Qiskit project.
//
// (C) Copyright IBM 2023.
//
// This code is licensed under the Apache License, Version 2.0. You may
// obtain a copy of this license in the LICENSE file in the root directory
// of this source tree or at http://www.apache.org/licenses/LICENSE-2.0.
//
// Any modifications or derivative works of this code must retain this
// copyright notice, and modified files need to carry a notice indicating
// that they have been altered from the originals.

import { globby } from "globby";

import { Link, File } from "./LinkChecker";
import FILES_TO_IGNORES from "./ignores";
import { getMarkdownAndAnchors, addLinksToMap } from "./markdown";

export class FileBatch {
  readonly toCheck: string[];
  readonly toLoad: string[];

  constructor(toCheck: string[], toLoad: string[]) {
    this.toCheck = toCheck;
    this.toLoad = toLoad;
  }

  static async fromGlobs(
    toCheckGlobs: string[],
    toLoadGlobs: string[],
  ): Promise<FileBatch> {
    const [toCheck, toLoad] = await Promise.all([
      globby(toCheckGlobs),
      globby(toLoadGlobs),
    ]);
    return new FileBatch(toCheck, toLoad);
  }

  /**
   * Load and process the file batch.
   *
   * Returns a triplet:
   *   1. A list of `File` objects with their anchors. These represent
   *      the universe of valid internal links for this batch, other
   *      than any additional we may add at check-time, e.g. images.
   *   2. A list of Link objects with internal links we will validate.
   *   3. A list of Link objects with external links we will validate.
   */
  async load(): Promise<[File[], Link[], Link[]]> {
    const files: File[] = [];
    for (let filePath of this.toLoad) {
      const [_, anchors] = await getMarkdownAndAnchors(filePath);
      files.push(new File(filePath, anchors));
    }

    const linksToOriginFiles = new Map<string, string[]>();
    for (const filePath of this.toCheck) {
      const [markdown, anchors] = await getMarkdownAndAnchors(filePath);
      files.push(new File(filePath, anchors));
      await addLinksToMap(filePath, markdown, linksToOriginFiles);
    }

    const internalLinks: Link[] = [];
    const externalLinks: Link[] = [];
    for (let [linkPath, originFiles] of linksToOriginFiles) {
      originFiles = originFiles.filter(
        (originFile) =>
          FILES_TO_IGNORES[originFile] == null ||
          !FILES_TO_IGNORES[originFile].includes(linkPath),
      );

      if (originFiles.length > 0) {
        const link = new Link(linkPath, originFiles);
        link.isExternal ? externalLinks.push(link) : internalLinks.push(link);
      }
    }

    return [files, internalLinks, externalLinks];
  }

  /**
   * Check that all links in this file batch are valid.
   *
   * Logs the results to the console and returns `true` if there were no issues.
   */
  async check(externalLinks: boolean, otherFiles: File[]): Promise<boolean> {
    const [docsFiles, internalLinkList, externalLinkList] = await this.load();
    const existingFiles = docsFiles.concat(otherFiles);

    const results = await Promise.all(
      internalLinkList.map((link) => link.checkLink(existingFiles)),
    );

    if (externalLinks) {
      // For loop reduces the risk of rate-limiting.
      for (let link of externalLinkList) {
        results.push(await link.checkLink(existingFiles));
      }
    }

    let allGood = true;
    results.forEach((linkErrors) => {
      linkErrors.forEach((errorMessage) => {
        console.error(errorMessage);
        allGood = false;
      });
    });
    return allGood;
  }
}
