---
title: BaseEstimatorV2
description: API reference for qiskit.primitives.BaseEstimatorV2
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.primitives.BaseEstimatorV2
---

# BaseEstimatorV2

<span id="qiskit.primitives.BaseEstimatorV2" />

`qiskit.primitives.BaseEstimatorV2` [GitHub](https://github.com/qiskit/qiskit/tree/main/qiskit/primitives/base/base_estimator.py "view source code")

Bases: [`ABC`](https://docs.python.org/3/library/abc.html#abc.ABC "(in Python v3.12)")

Estimator base class version 2.

An estimator estimates expectation values for provided quantum circuit and observable combinations.

An Estimator implementation must treat the [`run()`](#qiskit.primitives.BaseEstimatorV2.run "qiskit.primitives.BaseEstimatorV2.run") method `precision=None` kwarg as using a default `precision` value. The default value and methods to set it can be determined by the Estimator implementor.

## Methods

### run

<span id="qiskit.primitives.BaseEstimatorV2.run" />

`abstract run(pubs, *, precision=None)`

Estimate expectation values for each provided pub (Primitive Unified Bloc).

**Parameters**

*   **pubs** (*Iterable\[EstimatorPubLike]*) – An iterable of pub-like objects, such as tuples `(circuit, observables)` or `(circuit, observables, parameter_values)`.
*   **precision** ([*float*](https://docs.python.org/3/library/functions.html#float "(in Python v3.12)") *| None*) – The target precision for expectation value estimates of each run Estimator Pub that does not specify its own precision. If None the estimator’s default precision value will be used.

**Returns**

A job object that contains results.

**Return type**

BasePrimitiveJob\[[PrimitiveResult](qiskit.primitives.PrimitiveResult "qiskit.primitives.PrimitiveResult")\[[PubResult](qiskit.primitives.PubResult "qiskit.primitives.PubResult")]]

