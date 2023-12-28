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

import { expect, test } from "@jest/globals";
import { markdownFromNotebook, parseAnchors, addLinksToMap } from "./markdown";

test("markdownFromNotebook()", () => {
  const result = markdownFromNotebook(`
    {
        "cells": [
            {
                "attachments": {},
                "cell_type": "markdown",
                "metadata": {},
                "source": [
                    "Line 1.\\n",
                    "Line 2."
                ]
            },
            {
                "cell_type": "code",
                "execution_count": 1,
                "metadata": {},
                "outputs": [],
                "source": []
            },
            {
                "attachments": {},
                "cell_type": "markdown",
                "metadata": {},
                "source": [
                    "Line 3."
                ]
            }
        ],
        "metadata": {}
    }
  `);
  expect(result).toBe("Line 1.\nLine 2.\nLine 3.");
});

test("parseAnchors()", () => {
  const result = parseAnchors(`
  # My top-level heading

  Some text that should be ignored.

  <span id="this-is-a-hardcoded-anchor" />
  <span id="another_span" >Some text</span>

  More text and [a link](https://docs.quantum.ibm.com)!

  ##### Header 2

  ## \`code-header\`
  `);
  expect(result).toEqual([
    "#my-top-level-heading",
    "#header-2",
    "#code-header",
    "#this-is-a-hardcoded-anchor",
    "#another_span",
  ]);
});

test("addLinksToMap()", async () => {
  const linksToMap = new Map();
  const markdown = `
    # A header
    Our [first link!](https://ibm.com) and, look, [another](./relative)!

    ![](/images/my_image.png)

    <a href="./explicit-anchor">Explicit anchor</a>
    `;
  await addLinksToMap("file1.md", markdown, linksToMap);
  expect(linksToMap).toEqual(
    new Map([
      ["https://ibm.com", ["file1.md"]],
      ["./explicit-anchor", ["file1.md"]],
      ["./relative", ["file1.md"]],
      ["/images/my_image.png", ["file1.md"]],
    ]),
  );

  await addLinksToMap("file2.md", markdown, linksToMap);
  expect(linksToMap).toEqual(
    new Map([
      ["https://ibm.com", ["file1.md", "file2.md"]],
      ["./explicit-anchor", ["file1.md", "file2.md"]],
      ["./relative", ["file1.md", "file2.md"]],
      ["/images/my_image.png", ["file1.md", "file2.md"]],
    ]),
  );
});
