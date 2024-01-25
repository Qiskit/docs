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

import { CheerioAPI, Cheerio, load as cheerioLoad } from "cheerio";
import { describe, expect, test } from "@jest/globals";

import {
  addLanguageClassToCodeBlocks,
  loadImages,
  handleSphinxDesignCards,
  maybeSetModuleMetadata,
  renameAllH1s,
  removeHtmlExtensionsInRelativeLinks,
  removeDownloadSourceCode,
  removePermalinks,
  removeColonSpans,
  replaceViewcodeLinksWithGitHub,
  convertRubricsToHeaders,
  prepareGitHubLink,
  processMembersAndSetMeta,
} from "./processHtml";
import { Metadata } from "./Metadata";

class Doc {
  readonly $: CheerioAPI;
  readonly $main: Cheerio<any>;

  constructor($: CheerioAPI, $main: Cheerio<any>) {
    this.$ = $;
    this.$main = $main;
  }

  static load(html: string): Doc {
    const $ = cheerioLoad(`<div role="main">${html}</div>`);
    return new Doc($, $("[role='main']"));
  }

  html(): string {
    return this.$main.html()!.trim();
  }

  expectHtml(expected: string): void {
    expect(this.html()).toEqual(expected.trim());
  }
}

describe("loadImages()", () => {
  test("normal file", () => {
    const doc = Doc.load(
      `<img src="../_static/logo.png" alt="Logo"><img src="../_static/images/view-page-source-icon.svg">`,
    );
    const images = loadImages(doc.$, doc.$main, "/my-images", false);
    expect(images).toEqual([
      {
        fileName: "logo.png",
        dest: "/my-images/logo.png",
      },
      {
        fileName: "view-page-source-icon.svg",
        dest: "/my-images/view-page-source-icon.svg",
      },
    ]);
    doc.expectHtml(
      `<img src="/my-images/logo.png" alt="Logo"><img src="/my-images/view-page-source-icon.svg">`,
    );
  });

  test("release note", () => {
    const doc = Doc.load(
      `<img src="../_static/images/view-page-source-icon.svg">`,
    );
    const images = loadImages(doc.$, doc.$main, "/my-images/0.45", true);
    expect(images).toEqual([
      {
        fileName: "view-page-source-icon.svg",
        dest: "/my-images/view-page-source-icon.svg",
      },
    ]);
    doc.expectHtml(`<img src="/my-images/view-page-source-icon.svg">`);
  });
});

test("handleSphinxDesignCards()", () => {
  const doc = Doc.load(`
    <details class="sd-sphinx-override sd-dropdown sd-card sd-mb-3 sd-fade-in-slide-down">
    <summary class="sd-summary-title sd-card-header">
        Account initialization
        <div class="sd-summary-down docutils">
            <svg version="1.1" width="1.5em" height="1.5em" class="sd-octicon sd-octicon-chevron-down" viewBox="0 0 24 24" aria-hidden="true">
                <path fill-rule="evenodd" d="M5.22 8.72a.75.75 0 000 1.06l6.25 6.25a.75.75 0 001.06 0l6.25-6.25a.75.75 0 00-1.06-1.06L12 14.44 6.28 8.72a.75.75 0 00-1.06 0z"></path>
            </svg>
        </div>
        <div class="sd-summary-up docutils">
            <svg version="1.1" width="1.5em" height="1.5em" class="sd-octicon sd-octicon-chevron-up" viewBox="0 0 24 24" aria-hidden="true">
                <path fill-rule="evenodd" d="M18.78 15.28a.75.75 0 000-1.06l-6.25-6.25a.75.75 0 00-1.06 0l-6.25 6.25a.75.75 0 101.06 1.06L12 9.56l5.72 5.72a.75.75 0 001.06 0z"></path>
            </svg>
        </div>
    </summary>
    <div class="sd-summary-content sd-card-body docutils">
        <blockquote>
            <div>
                <p class="sd-card-text">You need to initialize your account before you can start using the Qiskit Runtime service...</p>
                <p class="sd-card-text">Qiskit Runtime is available...</p>
            </div>
        </blockquote>
    </div>
    </details>
  `);
  handleSphinxDesignCards(doc.$, doc.$main);
  doc.expectHtml(`
    <details class="sd-sphinx-override sd-dropdown sd-card sd-mb-3 sd-fade-in-slide-down">
    <h3>
        Account initialization
        <div class="sd-summary-down docutils">
            <svg version="1.1" width="1.5em" height="1.5em" class="sd-octicon sd-octicon-chevron-down" viewBox="0 0 24 24" aria-hidden="true">
                <path fill-rule="evenodd" d="M5.22 8.72a.75.75 0 000 1.06l6.25 6.25a.75.75 0 001.06 0l6.25-6.25a.75.75 0 00-1.06-1.06L12 14.44 6.28 8.72a.75.75 0 00-1.06 0z"></path>
            </svg>
        </div>
        <div class="sd-summary-up docutils">
            <svg version="1.1" width="1.5em" height="1.5em" class="sd-octicon sd-octicon-chevron-up" viewBox="0 0 24 24" aria-hidden="true">
                <path fill-rule="evenodd" d="M18.78 15.28a.75.75 0 000-1.06l-6.25-6.25a.75.75 0 00-1.06 0l-6.25 6.25a.75.75 0 101.06 1.06L12 9.56l5.72 5.72a.75.75 0 001.06 0z"></path>
            </svg>
        </div>
    </h3>
    <div class="sd-summary-content sd-card-body docutils">
        <div>
                <p class="sd-card-text">You need to initialize your account before you can start using the Qiskit Runtime service...</p>
                <p class="sd-card-text">Qiskit Runtime is available...</p>
            </div>
    </div>
    </details>
  `);
});

test("renameAllH1s()", () => {
  const doc = Doc.load(`<h1>Release Notes!!!</h1><h2>0.45.0</h2>`);
  renameAllH1s(doc.$, "New Title");
  doc.expectHtml(`<h1>New Title</h1><h2>0.45.0</h2>`);
});

test("removeHtmlExtensionsInRelativeLinks()", () => {
  const doc = Doc.load(
    `<a href="https://ibm.com"></a><a href="../foo.html"></a><a href="../img.svg"></a>`,
  );
  removeHtmlExtensionsInRelativeLinks(doc.$, doc.$main);
  doc.expectHtml(
    `<a href="https://ibm.com"></a><a href="../foo"></a><a href="../img.svg"></a>`,
  );
});

test("removeDownloadSourceCode()", () => {
  const doc = Doc.load(
    `<p>(<a class="reference download internal" download="" href="../_downloads/878087bb6064f5d5f4c00d6f8a12319d/converters-1.py"><code class="xref download docutils literal notranslate"><span class="pre">Source</span> <span class="pre">code</span></code></a>)</p>
      <figure class="align-default">
      <img alt="../_images/converters-1.png" class="plot-directive" src="../_images/converters-1.png" />
      </figure>`,
  );
  removeDownloadSourceCode(doc.$main);
  doc.expectHtml(
    `<figure class="align-default">
      <img alt="../_images/converters-1.png" class="plot-directive" src="../_images/converters-1.png">
      </figure>`,
  );
});

test("removePermalinks()", () => {
  const doc = Doc.load(`<a title="okay">Link</a>
    <a title="Permalink to this headline">Link</a>
    <a title="Permalink to this heading">Link</a>
    <a title="Permalink to this definition">Link</a>
    <a title="Link to this heading">Link</a>
    <a title="Link to this definition">Link</a>`);
  removePermalinks(doc.$main);
  doc.expectHtml(`<a title="okay">Link</a>`);
});

test("removeColonSpans()", () => {
  const doc = Doc.load(
    `<dt class="field-odd">Parameters<span class="colon">:</span></dt>`,
  );
  removeColonSpans(doc.$main);
  doc.expectHtml(`<dt class="field-odd">Parameters</dt>`);
});

test("addLanguageClassToCodeBlocks()", () => {
  const doc1 = Doc.load(`<p><strong>Circuit symbol:</strong></p>
    <div class="highlight-default notranslate"><div class="highlight"><pre><span></span>     ┌──────────┐
    q_0: ┤ U(ϴ,φ,λ) ├
        └──────────┘
    </pre></div>
    </div>`);
  // TODO(EA): This behavior is bad. We shouldn't be setting the language as Python because it's not always correct, such
  // as with this example. Also this name is misleading. Really what we are doing here is dealing with RST's `.. parsed-literal ::`
  // (https://docutils.sourceforge.io/docs/ref/rst/directives.html#parsed-literal-block), which we tend to use to put code literals
  // along with gate text representations like the above.
  addLanguageClassToCodeBlocks(doc1.$, doc1.$main);
  doc1.expectHtml(`<p><strong>Circuit symbol:</strong></p>
    <div class="highlight-default notranslate"><div class="highlight"><pre><code class="language-python"><span></span>     ┌──────────┐
    q_0: ┤ U(ϴ,φ,λ) ├
        └──────────┘
    </code></pre></div>
    </div>`);

  const doc2 = Doc.load(`<div class="highlight-default notranslate">
      <div class="highlight">
      <pre><span></span><span class="kn">from</span> <span class="nn">qiskit_ibm_runtime.options</span> <span class="kn">import</span> <span class="n">Options</span>

      <span class="n">options</span> <span class="o">=</span> <span class="n">Options</span><span class="p">()</span>
      <span class="n">options</span><span class="o">.</span><span class="n">transpilation</span><span class="o">.</span><span class="n">initial_layout</span> <span class="o">=</span> <span class="p">[</span><span class="mi">0</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="mi">2</span><span class="p">,</span> <span class="mi">3</span><span class="p">]</span>  <span class="c1"># This an be done using auto-complete</span>
      </pre>
      </div>
    </div>`);
  addLanguageClassToCodeBlocks(doc2.$, doc2.$main);
  doc2.expectHtml(`<div class="highlight-default notranslate">
      <div class="highlight">
      <pre><code class="language-python"><span></span><span class="kn">from</span> <span class="nn">qiskit_ibm_runtime.options</span> <span class="kn">import</span> <span class="n">Options</span>

      <span class="n">options</span> <span class="o">=</span> <span class="n">Options</span><span class="p">()</span>
      <span class="n">options</span><span class="o">.</span><span class="n">transpilation</span><span class="o">.</span><span class="n">initial_layout</span> <span class="o">=</span> <span class="p">[</span><span class="mi">0</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="mi">2</span><span class="p">,</span> <span class="mi">3</span><span class="p">]</span>  <span class="c1"># This an be done using auto-complete</span>
      </code></pre>
      </div>
    </div>`);
});

test("replaceSourceLinksWithGitHub()", () => {
  // Assumes that removeHtmlExtensionsInRelativeLinks() has already removed .html from the URL.
  const doc = Doc.load(
    `<a href="../_modules/my_quantum_project/my_file#IBMBackend"></a>
    <a href="#my_quantum_project.IBMBackend"></a>`,
  );
  replaceViewcodeLinksWithGitHub(
    doc.$,
    doc.$main,
    (fileName) =>
      `https://github.com/Qiskit/my-project/tree/stable/0.9/${fileName}.py`,
  );
  doc.expectHtml(
    `<a href="https://github.com/Qiskit/my-project/tree/stable/0.9/my_quantum_project/my_file.py"></a>
    <a href="#my_quantum_project.IBMBackend"></a>`,
  );
});

test("convertRubricsToHeaders()", () => {
  const doc = Doc.load(`<p class="rubric">Example</p>
    <p class="rubric">Examples</p>
    <p class="rubric">References</p>
    <p class="rubric">Reference</p>
    <p class="rubric">Simple examples</p>
    <p class="rubric">Example code</p>
    <p class="rubric">Attributes</p>
    <p class="rubric">Methods</p>`);
  convertRubricsToHeaders(doc.$, doc.$main);
  doc.expectHtml(`<strong>Example</strong>
    <strong>Examples</strong>
    <strong>References</strong>
    <strong>Reference</strong>
    <strong>Simple examples</strong>
    <strong>Example code</strong>
    <h2>Attributes</h2>
    <h2>Methods</h2>`);
});

describe("maybeSetModuleMetadata()", () => {
  test("not a module", () => {
    const html = `<h1>Hello</h1>`;
    const meta: Metadata = {};
    const doc = Doc.load(html);
    maybeSetModuleMetadata(doc.$, doc.$main, meta);
    doc.expectHtml(html);
    expect(meta).toEqual({});
  });

  const checkModuleFound = (html: string, name: string): void => {
    const meta: Metadata = {};
    const doc = Doc.load(html);
    maybeSetModuleMetadata(doc.$, doc.$main, meta);
    doc.expectHtml(html);
    expect(meta).toEqual({
      apiType: "module",
      apiName: name,
    });
  };

  test("module - Sphinx <= 7.1 style", () => {
    checkModuleFound(
      `<span id="foo"></span><span class="target" id="module-qiskit_ibm_runtime.options"></span>`,
      "qiskit_ibm_runtime.options",
    );
  });

  test("module - Sphinx 7.2+ style", () => {
    const html = `<span id="foo"></span>
      <span id="module-qiskit_ibm_runtime.options">
        <span id="qiskit-circuit"></span>
      </span>`;
    checkModuleFound(html, "qiskit_ibm_runtime.options");
  });

  test("section", () => {
    checkModuleFound(
      `<section id="module-qiskit_ibm_provider.transpiler.passes.basis"><h1>Hello</h1></section>`,
      "qiskit_ibm_provider.transpiler.passes.basis",
    );
  });
});

describe("prepareGitHubLink()", () => {
  test("no link", () => {
    const html = `<span class="pre">None</span><span class="sig-paren">)</span><a class="headerlink" href="#qiskit_ibm_runtime.IBMBackend" title="Link to this definition">#</a>`;
    const doc = Doc.load(html);
    const result = prepareGitHubLink(doc.$, doc.$main);
    expect(result).toEqual("");
    doc.expectHtml(html);
  });

  test("link", () => {
    const doc = Doc.load(
      `<span class="pre">None</span><span class="sig-paren">)</span><a class="reference internal" href="https://ibm.com/my_link"><span class="viewcode-link"><span class="pre">[source]</span></span></a><a class="headerlink" href="#qiskit_ibm_runtime.IBMBackend" title="Link to this definition">#</a>`,
    );
    const result = prepareGitHubLink(doc.$, doc.$main);
    expect(result).toEqual(
      `<a href="https://ibm.com/my_link" title="view source code">GitHub</a>`,
    );
    doc.expectHtml(
      `<span class="pre">None</span><span class="sig-paren">)</span><a class="headerlink" href="#qiskit_ibm_runtime.IBMBackend" title="Link to this definition">#</a>`,
    );
  });
});

describe("processMembersAndSetMeta()", () => {
  test("function with added heading", () => {
    const html = `<h1>Circuit Converters</h1>
<dl class="py function">
<dt class="sig sig-object py" id="qiskit.converters.circuit_to_dag">
<span class="sig-prename descclassname"><span class="pre">qiskit.converters.</span></span><span class="sig-name descname"><span class="pre">circuit_to_dag</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="n"><span class="pre">circuit</span></span></em>, <em class="sig-param"><span class="n"><span class="pre">copy_operations</span></span><span class="o"><span class="pre">=</span></span><span class="default_value"><span class="pre">True</span></span></em>, <em class="sig-param"><span class="o"><span class="pre">*</span></span></em>, <em class="sig-param"><span class="n"><span class="pre">qubit_order</span></span><span class="o"><span class="pre">=</span></span><span class="default_value"><span class="pre">None</span></span></em>, <em class="sig-param"><span class="n"><span class="pre">clbit_order</span></span><span class="o"><span class="pre">=</span></span><span class="default_value"><span class="pre">None</span></span></em><span class="sig-paren">)</span><a class="reference internal" href="../_modules/qiskit/converters/circuit_to_dag.html#circuit_to_dag"><span class="viewcode-link"><span class="pre">[source]</span></span></a><a class="headerlink" href="#qiskit.converters.circuit_to_dag" title="Permalink to this definition">¶</a></dt>
<dd><p>Build a <a class="reference internal" href="../stubs/qiskit.dagcircuit.DAGCircuit.html#qiskit.dagcircuit.DAGCircuit" title="qiskit.dagcircuit.DAGCircuit"><code class="xref py py-class docutils literal notranslate"><span class="pre">DAGCircuit</span></code></a> object from a <a class="reference internal" href="../stubs/qiskit.circuit.QuantumCircuit.html#qiskit.circuit.QuantumCircuit" title="qiskit.circuit.QuantumCircuit"><code class="xref py py-class docutils literal notranslate"><span class="pre">QuantumCircuit</span></code></a>.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters<span class="colon">:</span></dt>
<dd class="field-odd"><ul class="simple">
<li><p><strong>circuit</strong> – the input circuit.</p></li>
<li><p><strong>copy_operations</strong> – Deep copy the operation objects in the QuantumCircuit for the output DAGCircuit.</p></li>
</ul>
</dd>`;
    const doc = Doc.load(html);
    processMembersAndSetMeta(doc.$, doc.$main, {});
    doc.expectHtml(`      <h1>Circuit Converters</h1>
<div><h3>circuit_to_dag</h3><span class="target" id="qiskit.converters.circuit_to_dag"><p><code>
<span class="sig-prename descclassname"><span class="pre">qiskit.converters.</span></span><span class="sig-name descname"><span class="pre">circuit_to_dag</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="n"><span class="pre">circuit</span></span></em>, <em class="sig-param"><span class="n"><span class="pre">copy_operations</span></span><span class="o"><span class="pre">=</span></span><span class="default_value"><span class="pre">True</span></span></em>, <em class="sig-param"><span class="o"><span class="pre">*</span></span></em>, <em class="sig-param"><span class="n"><span class="pre">qubit_order</span></span><span class="o"><span class="pre">=</span></span><span class="default_value"><span class="pre">None</span></span></em>, <em class="sig-param"><span class="n"><span class="pre">clbit_order</span></span><span class="o"><span class="pre">=</span></span><span class="default_value"><span class="pre">None</span></span></em><span class="sig-paren">)</span><a class="headerlink" href="#qiskit.converters.circuit_to_dag" title="Permalink to this definition">¶</a></code><a href="../_modules/qiskit/converters/circuit_to_dag.html#circuit_to_dag" title="view source code">GitHub</a></p>
<div><p>Build a <a class="reference internal" href="../stubs/qiskit.dagcircuit.DAGCircuit.html#qiskit.dagcircuit.DAGCircuit" title="qiskit.dagcircuit.DAGCircuit"><code class="xref py py-class docutils literal notranslate"><span class="pre">DAGCircuit</span></code></a> object from a <a class="reference internal" href="../stubs/qiskit.circuit.QuantumCircuit.html#qiskit.circuit.QuantumCircuit" title="qiskit.circuit.QuantumCircuit"><code class="xref py py-class docutils literal notranslate"><span class="pre">QuantumCircuit</span></code></a>.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters<span class="colon">:</span></dt>
<dd class="field-odd"><ul class="simple">
<li><p><strong>circuit</strong> – the input circuit.</p></li>
<li><p><strong>copy_operations</strong> – Deep copy the operation objects in the QuantumCircuit for the output DAGCircuit.</p></li>
</ul>
</dd></dl></div></span></div>`);
  });

  test("function without added heading", () => {
    const html = `<h1>least_busy</h1>
<dl class="py function">
<dt class="sig sig-object py" id="qiskit_ibm_provider.least_busy">
<span class="sig-name descname"><span class="pre">least_busy</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="n"><span class="pre">backends</span></span></em><span class="sig-paren">)</span><a class="reference internal" href="../_modules/qiskit_ibm_provider.html#least_busy"><span class="viewcode-link"><span class="pre">[source]</span></span></a><a class="headerlink" href="#qiskit_ibm_provider.least_busy" title="Link to this definition">¶</a></dt>
<dd><p>Return the least busy backend from a list.</p>
<p>Return the least busy available backend for those that
have a <code class="docutils literal notranslate"><span class="pre">pending_jobs</span></code> in their <code class="docutils literal notranslate"><span class="pre">status</span></code>. Note that local
backends may not have this attribute.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters<span class="colon">:</span></dt>
<dd class="field-odd"><p><strong>backends</strong> (<code class="xref py py-class docutils literal notranslate"><span class="pre">List</span></code>[<a class="reference external" href="https://qiskit.org/documentation/stubs/qiskit.providers.Backend.html#qiskit.providers.Backend" title="(in Qiskit v0.45)"><code class="xref py py-class docutils literal notranslate"><span class="pre">Backend</span></code></a>]) – The backends to choose from.</p>
</dd>
<dt class="field-even">Return type<span class="colon">:</span></dt>
<dd class="field-even"><p><a class="reference external" href="https://qiskit.org/documentation/stubs/qiskit.providers.Backend.html#qiskit.providers.Backend" title="(in Qiskit v0.45)"><code class="xref py py-class docutils literal notranslate"><span class="pre">Backend</span></code></a></p>
</dd>
<dt class="field-odd">Returns<span class="colon">:</span></dt>
<dd class="field-odd"><p>The backend with the fewest number of pending jobs.</p>
</dd>
<dt class="field-even">Raises<span class="colon">:</span></dt>
<dd class="field-even"><p><a class="reference internal" href="qiskit_ibm_provider.IBMError.html#qiskit_ibm_provider.IBMError" title="qiskit_ibm_provider.IBMError"><strong>IBMError</strong></a> – If the backends list is empty, or if none of the backends
    is available, or if a backend in the list
    does not have the <code class="docutils literal notranslate"><span class="pre">pending_jobs</span></code> attribute in its status.</p>
</dd>
</dl>
</dd></dl>
`;
    const doc = Doc.load(html);
    processMembersAndSetMeta(doc.$, doc.$main, {});
    doc.expectHtml(`<h1>least_busy</h1>
<div><span class=\"target\" id=\"qiskit_ibm_provider.least_busy\"><p><code>
<span class=\"sig-name descname\"><span class=\"pre\">least_busy</span></span><span class=\"sig-paren\">(</span><em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">backends</span></span></em><span class=\"sig-paren\">)</span><a class=\"headerlink\" href=\"#qiskit_ibm_provider.least_busy\" title=\"Link to this definition\">¶</a></code><a href=\"../_modules/qiskit_ibm_provider.html#least_busy\" title=\"view source code\">GitHub</a></p>
<div><p>Return the least busy backend from a list.</p>
<p>Return the least busy available backend for those that
have a <code class=\"docutils literal notranslate\"><span class=\"pre\">pending_jobs</span></code> in their <code class=\"docutils literal notranslate\"><span class=\"pre\">status</span></code>. Note that local
backends may not have this attribute.</p>
<dl class=\"field-list simple\">
<dt class=\"field-odd\">Parameters<span class=\"colon\">:</span></dt>
<dd class=\"field-odd\"><p><strong>backends</strong> (<code class=\"xref py py-class docutils literal notranslate\"><span class=\"pre\">List</span></code>[<a class=\"reference external\" href=\"https://qiskit.org/documentation/stubs/qiskit.providers.Backend.html#qiskit.providers.Backend\" title=\"(in Qiskit v0.45)\"><code class=\"xref py py-class docutils literal notranslate\"><span class=\"pre\">Backend</span></code></a>]) – The backends to choose from.</p>
</dd>
<dt class=\"field-even\">Return type<span class=\"colon\">:</span></dt>
<dd class=\"field-even\"><p><a class=\"reference external\" href=\"https://qiskit.org/documentation/stubs/qiskit.providers.Backend.html#qiskit.providers.Backend\" title=\"(in Qiskit v0.45)\"><code class=\"xref py py-class docutils literal notranslate\"><span class=\"pre\">Backend</span></code></a></p>
</dd>
<dt class=\"field-odd\">Returns<span class=\"colon\">:</span></dt>
<dd class=\"field-odd\"><p>The backend with the fewest number of pending jobs.</p>
</dd>
<dt class=\"field-even\">Raises<span class=\"colon\">:</span></dt>
<dd class=\"field-even\"><p><a class=\"reference internal\" href=\"qiskit_ibm_provider.IBMError.html#qiskit_ibm_provider.IBMError\" title=\"qiskit_ibm_provider.IBMError\"><strong>IBMError</strong></a> – If the backends list is empty, or if none of the backends
    is available, or if a backend in the list
    does not have the <code class=\"docutils literal notranslate\"><span class=\"pre\">pending_jobs</span></code> attribute in its status.</p>
</dd>
</dl>
</div></span></div>`);
  });
});
