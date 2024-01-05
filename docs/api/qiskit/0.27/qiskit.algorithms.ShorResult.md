---
title: ShorResult
description: API reference for qiskit.algorithms.ShorResult
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.algorithms.ShorResult
---

# qiskit.algorithms.ShorResult

<span id="qiskit.algorithms.ShorResult" />

`ShorResult`

Shor Result.

### \_\_init\_\_

<span id="qiskit.algorithms.ShorResult.__init__" />

`__init__()`

Initialize self. See help(type(self)) for accurate signature.

## Methods

## Attributes

### combine

<span id="qiskit.algorithms.ShorResult.combine" />

`combine(result)`

Any property from the argument that exists in the receiver is updated. :type result: `AlgorithmResult` :param result: Argument result with properties to be set.

**Raises**

**TypeError** – Argument is None

**Return type**

`None`

### factors

<span id="qiskit.algorithms.ShorResult.factors" />

`property factors`

returns factors

**Return type**

`List`\[`List`\[`int`]]

### successful\_counts

<span id="qiskit.algorithms.ShorResult.successful_counts" />

`property successful_counts`

returns successful counts

**Return type**

`int`

### total\_counts

<span id="qiskit.algorithms.ShorResult.total_counts" />

`property total_counts`

returns total counts

**Return type**

`int`

