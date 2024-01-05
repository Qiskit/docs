---
title: AmplitudeEstimationResult
description: API reference for qiskit.algorithms.AmplitudeEstimationResult
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.algorithms.AmplitudeEstimationResult
---

# qiskit.algorithms.AmplitudeEstimationResult

<span id="qiskit.algorithms.AmplitudeEstimationResult" />

`AmplitudeEstimationResult`

The `AmplitudeEstimation` result object.

### \_\_init\_\_

<span id="qiskit.algorithms.AmplitudeEstimationResult.__init__" />

`__init__()`

Initialize self. See help(type(self)) for accurate signature.

## Methods

## Attributes

### circuit\_results

<span id="qiskit.algorithms.AmplitudeEstimationResult.circuit_results" />

`property circuit_results`

Return the circuit results. Can be a statevector or counts dictionary.

**Return type**

`Union`\[`ndarray`, `Dict`\[`str`, `int`], `None`]

### combine

<span id="qiskit.algorithms.AmplitudeEstimationResult.combine" />

`combine(result)`

Any property from the argument that exists in the receiver is updated. :type result: `AlgorithmResult` :param result: Argument result with properties to be set.

**Raises**

**TypeError** – Argument is None

**Return type**

`None`

### confidence\_interval

<span id="qiskit.algorithms.AmplitudeEstimationResult.confidence_interval" />

`property confidence_interval`

Return the confidence interval for the amplitude (95% interval by default).

**Return type**

`Tuple`\[`float`, `float`]

### confidence\_interval\_processed

<span id="qiskit.algorithms.AmplitudeEstimationResult.confidence_interval_processed" />

`property confidence_interval_processed`

Return the post-processed confidence interval (95% interval by default).

**Return type**

`Tuple`\[`float`, `float`]

### estimation

<span id="qiskit.algorithms.AmplitudeEstimationResult.estimation" />

`property estimation`

Return the estimation for the amplitude in $[0, 1]$.

**Return type**

`float`

### estimation\_processed

<span id="qiskit.algorithms.AmplitudeEstimationResult.estimation_processed" />

`property estimation_processed`

Return the estimation for the amplitude after the post-processing has been applied.

**Return type**

`float`

### max\_probability

<span id="qiskit.algorithms.AmplitudeEstimationResult.max_probability" />

`property max_probability`

Return the maximum sampling probability.

**Return type**

`float`

### measurements

<span id="qiskit.algorithms.AmplitudeEstimationResult.measurements" />

`property measurements`

Return the measurements as integers with their measurement probability.

**Return type**

`Dict`\[`int`, `float`]

### mle

<span id="qiskit.algorithms.AmplitudeEstimationResult.mle" />

`property mle`

Return the MLE for the amplitude, in $\[0, 1]\$.

**Return type**

`float`

### mle\_processed

<span id="qiskit.algorithms.AmplitudeEstimationResult.mle_processed" />

`property mle_processed`

Return the post-processed MLE for the amplitude.

**Return type**

`float`

### num\_evaluation\_qubits

<span id="qiskit.algorithms.AmplitudeEstimationResult.num_evaluation_qubits" />

`property num_evaluation_qubits`

Returns the number of evaluation qubits.

**Return type**

`int`

### num\_oracle\_queries

<span id="qiskit.algorithms.AmplitudeEstimationResult.num_oracle_queries" />

`property num_oracle_queries`

Return the number of Grover oracle queries.

**Return type**

`int`

### post\_processing

<span id="qiskit.algorithms.AmplitudeEstimationResult.post_processing" />

`property post_processing`

Return a handle to the post processing function.

**Return type**

`Callable`\[\[`float`], `float`]

### samples

<span id="qiskit.algorithms.AmplitudeEstimationResult.samples" />

`property samples`

Return the measurement samples with their measurement probability.

**Return type**

`Dict`\[`float`, `float`]

### samples\_processed

<span id="qiskit.algorithms.AmplitudeEstimationResult.samples_processed" />

`property samples_processed`

Return the post-processed measurement samples with their measurement probability.

**Return type**

`Dict`\[`float`, `float`]

### shots

<span id="qiskit.algorithms.AmplitudeEstimationResult.shots" />

`property shots`

Return the number of shots used. Is 1 for statevector-based simulations.

**Return type**

`int`

