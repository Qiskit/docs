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

import { readFile, writeFile } from "fs/promises";
import { unzipSync, deflateSync } from "zlib";
import { removeSuffix } from "../stringUtils";
import { renameUrl } from "./renameUrls";

export type ObjectsInvEntry = {
  name: string;
  domainAndRole: string;
  priority: string;
  uri: string;
  dispname: string;
};

/**
 * Class to hold and operate on data from Sphinx's objects.inv file.
 * For information on the syntax, see:
 *   https://sphobjinv.readthedocs.io/en/stable/syntax.html
 */
export class ObjectsInv {
  preamble: string;
  entries: ObjectsInvEntry[];
  constructor(preamble: string, entries: ObjectsInvEntry[]) {
    this.preamble = preamble;
    this.entries = entries;
  }

  /**
   * Decompress Sphinx's objects.inv.
   * This function follows the process from:
   *   https://github.com/bskinn/sphobjinv/blob/stable/src/sphobjinv/zlib.py
   */
  static async fromFile(path: string): Promise<ObjectsInv> {
    let buffer = await readFile(path);
    // Extract preamble (first 4 lines of file)
    let preamble = "";
    for (let line = 0; line < 4; line++) {
      let nextNewline = buffer.indexOf(10) + 1;
      preamble += buffer.toString("utf8", 0, nextNewline);
      buffer = buffer.subarray(nextNewline);
    }

    // Decompress the rest
    const lines = unzipSync(buffer).toString("utf8").trim().split("\n");

    // Sort the strings into their parts
    const entries: ObjectsInvEntry[] = [];
    for (const line of lines) {
      // Regex from sphinx source
      // https://github.com/sphinx-doc/sphinx/blob/2f60b44999d7e610d932529784f082fc1c6af989/sphinx/util/inventory.py#L115-L116
      const parts = line.match(/(.+?)\s+(\S+)\s+(-?\d+)\s+?(\S*)\s+(.*)/);
      if (parts == null || parts.length < 5) {
        console.warn(`Error parsing line of objects.inv: ${line}`);
        continue;
      }
      const entry = {
        name: parts[1],
        domainAndRole: parts[2],
        priority: parts[3],
        uri: parts[4],
        dispname: parts[5],
      };
      entry.uri = ObjectsInv._expandUri(entry.uri, entry.name);
      if (["genindex", "py-modindex", "search"].includes(entry.uri)) {
        // We don't have this page in the ibm docs
        continue;
      }
      entries.push(entry);
    }

    return new ObjectsInv(preamble, entries);
  }

  static _expandUri(uri: string, name: string): string {
    if (uri.includes("#") && uri.endsWith("$")) {
      // #$ is a shorthand for "anchor==name"; see "For illustration" in
      // https://sphobjinv.readthedocs.io/en/stable/syntax.html
      uri = removeSuffix(uri, "$") + name;
    }
    return uri;
  }

  static _compressUri(uri: string, name: string): string {
    if (uri.includes("#") && uri.endsWith(name)) {
      uri = removeSuffix(uri, name) + "$";
    }
    return uri;
  }

  updateUris(transformLink: Function) {
    for (const entry of this.entries) {
      entry.uri = entry.uri.replace(/\.html(?=[^A-z]|$)/, "");
      if (entry.uri.includes("#")) {
        // TODO: clean this up
        entry.uri =
          renameUrl(entry.uri.split("#")[0]) + "#" + entry.uri.split("#")[1];
      } else {
        entry.uri = renameUrl(entry.uri);
      }
      entry.uri = transformLink(entry.uri);
    }
  }

  /**
   * Return all entries joined together as a single string
   * to be compressed before writing
   */
  entriesString() {
    const lines: string[] = [];
    for (const e of this.entries) {
      lines.push(
        [
          e.name,
          e.domainAndRole,
          e.priority,
          ObjectsInv._compressUri(e.uri, e.name),
          e.dispname,
        ].join(" "),
      );
    }
    return lines.join("\n");
  }

  /**
   * Compress and write to file
   */
  async write(path: string) {
    const preamble = Buffer.from(this.preamble);
    const compressed = deflateSync(Buffer.from(this.entriesString(), "utf8"), {
      level: 9,
    });
    await writeFile(path, Buffer.concat([preamble, compressed]));
  }
}
