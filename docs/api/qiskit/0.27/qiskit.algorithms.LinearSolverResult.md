---
title: LinearSolverResult
description: API reference for qiskit.algorithms.LinearSolverResult
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.algorithms.LinearSolverResult
---

# qiskit.algorithms.LinearSolverResult

<span id="qiskit.algorithms.LinearSolverResult" />

`LinearSolverResult`

A base class for linear systems results.

The linear systems algorithms return an object of the type `LinearSystemsResult` with the information about the solution obtained.

### \_\_init\_\_

<span id="qiskit.algorithms.LinearSolverResult.__init__" />

`__init__()`

Initialize self. See help(type(self)) for accurate signature.

## Methods

## Attributes

### circuit\_results

<span id="qiskit.algorithms.LinearSolverResult.circuit_results" />

`property circuit_results`

return the results from the circuits

**Return type**

`Union`\[`List`\[`float`], `List`\[`Result`]]

### combine

<span id="qiskit.algorithms.LinearSolverResult.combine" />

`combine(result)`

Any property from the argument that exists in the receiver is updated. :type result: `AlgorithmResult` :param result: Argument result with properties to be set.

**Raises**

**TypeError** – Argument is None

**Return type**

`None`

### euclidean\_norm

<span id="qiskit.algorithms.LinearSolverResult.euclidean_norm" />

`property euclidean_norm`

return the euclidean norm if the algorithm knows how to calculate it

**Return type**

`float`

### observable

<span id="qiskit.algorithms.LinearSolverResult.observable" />

`property observable`

return the (list of) calculated observable(s)

**Return type**

`Union`\[`float`, `List`\[`float`]]

### state

<span id="qiskit.algorithms.LinearSolverResult.state" />

`property state`

return either the circuit that prepares the solution or the solution as a vector

**Return type**

`Union`\[`QuantumCircuit`, `ndarray`]

