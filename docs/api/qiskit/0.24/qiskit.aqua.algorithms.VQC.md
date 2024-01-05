---
title: VQC
description: API reference for qiskit.aqua.algorithms.VQC
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.algorithms.VQC
---

<span id="qiskit-aqua-algorithms-vqc" />

# qiskit.aqua.algorithms.VQC

<span id="qiskit.aqua.algorithms.VQC" />

`VQC(optimizer, feature_map, var_form, training_dataset, test_dataset=None, datapoints=None, max_evals_grouped=1, minibatch_size=- 1, callback=None, quantum_instance=None)`

The Variational Quantum Classifier algorithm.

Similar to [`QSVM`](qiskit.aqua.algorithms.QSVM "qiskit.aqua.algorithms.QSVM"), the VQC algorithm also applies to classification problems. VQC uses the variational method to solve such problems in a quantum processor. Specifically, it optimizes a parameterized quantum circuit to provide a solution that cleanly separates the data.

<Admonition title="Note" type="note">
  The VQC stores the parameters of var\_form and feature\_map sorted by name to map the values provided by the optimizer to the circuit. This is done to ensure reproducible results, for example such that running the optimization twice with same random seeds yields the same result.
</Admonition>

**Parameters**

*   **optimizer** (`Optimizer`) – The classical optimizer to use.
*   **feature\_map** (`Union`\[`QuantumCircuit`, `FeatureMap`]) – The FeatureMap instance to use.
*   **var\_form** (`Union`\[`QuantumCircuit`, `VariationalForm`]) – The variational form instance.
*   **training\_dataset** (`Dict`\[`str`, `ndarray`]) – The training dataset, in the format \{‘A’: np.ndarray, ‘B’: np.ndarray, …}.
*   **test\_dataset** (`Optional`\[`Dict`\[`str`, `ndarray`]]) – The test dataset, in same format as training\_dataset.
*   **datapoints** (`Optional`\[`ndarray`]) – NxD array, N is the number of data and D is data dimension.
*   **max\_evals\_grouped** (`int`) – The maximum number of evaluations to perform simultaneously.
*   **minibatch\_size** (`int`) – The size of a mini-batch.
*   **callback** (`Optional`\[`Callable`\[\[`int`, `ndarray`, `float`, `int`], `None`]]) – a callback that can access the intermediate data during the optimization. Four parameter values are passed to the callback as follows during each evaluation. These are: the evaluation count, parameters of the variational form, the evaluated value, the index of data batch.
*   **quantum\_instance** (`Union`\[`QuantumInstance`, `Backend`, `BaseBackend`, `None`]) – Quantum Instance or Backend

<Admonition title="Note" type="note">
  We use label to denotes numeric results and class the class names (str).
</Admonition>

**Raises**

[**AquaError**](qiskit.aqua.AquaError "qiskit.aqua.AquaError") – Missing feature map or missing training dataset.

### \_\_init\_\_

<span id="qiskit.aqua.algorithms.VQC.__init__" />

`__init__(optimizer, feature_map, var_form, training_dataset, test_dataset=None, datapoints=None, max_evals_grouped=1, minibatch_size=- 1, callback=None, quantum_instance=None)`

**Parameters**

*   **optimizer** (`Optimizer`) – The classical optimizer to use.
*   **feature\_map** (`Union`\[`QuantumCircuit`, `FeatureMap`]) – The FeatureMap instance to use.
*   **var\_form** (`Union`\[`QuantumCircuit`, `VariationalForm`]) – The variational form instance.
*   **training\_dataset** (`Dict`\[`str`, `ndarray`]) – The training dataset, in the format \{‘A’: np.ndarray, ‘B’: np.ndarray, …}.
*   **test\_dataset** (`Optional`\[`Dict`\[`str`, `ndarray`]]) – The test dataset, in same format as training\_dataset.
*   **datapoints** (`Optional`\[`ndarray`]) – NxD array, N is the number of data and D is data dimension.
*   **max\_evals\_grouped** (`int`) – The maximum number of evaluations to perform simultaneously.
*   **minibatch\_size** (`int`) – The size of a mini-batch.
*   **callback** (`Optional`\[`Callable`\[\[`int`, `ndarray`, `float`, `int`], `None`]]) – a callback that can access the intermediate data during the optimization. Four parameter values are passed to the callback as follows during each evaluation. These are: the evaluation count, parameters of the variational form, the evaluated value, the index of data batch.
*   **quantum\_instance** (`Union`\[`QuantumInstance`, `Backend`, `BaseBackend`, `None`]) – Quantum Instance or Backend

<Admonition title="Note" type="note">
  We use label to denotes numeric results and class the class names (str).
</Admonition>

**Raises**

[**AquaError**](qiskit.aqua.AquaError "qiskit.aqua.AquaError") – Missing feature map or missing training dataset.

## Methods

## Attributes

### backend

<span id="qiskit.aqua.algorithms.VQC.backend" />

`property backend`

Returns backend.

**Return type**

`Union`\[`Backend`, `BaseBackend`]

### batch\_data

<span id="qiskit.aqua.algorithms.VQC.batch_data" />

`batch_data(data, labels=None, minibatch_size=- 1)`

batch data

### class\_to\_label

<span id="qiskit.aqua.algorithms.VQC.class_to_label" />

`property class_to_label`

returns class to label

### cleanup\_parameterized\_circuits

<span id="qiskit.aqua.algorithms.VQC.cleanup_parameterized_circuits" />

`cleanup_parameterized_circuits()`

set parameterized circuits to None

### construct\_circuit

<span id="qiskit.aqua.algorithms.VQC.construct_circuit" />

`construct_circuit(x, theta, measurement=False)`

Construct circuit based on data and parameters in variational form.

**Parameters**

*   **x** (*numpy.ndarray*) – 1-D array with D dimension
*   **theta** (*list\[numpy.ndarray]*) – list of 1-D array, parameters sets for variational form
*   **measurement** (*bool*) – flag to add measurement

**Returns**

the circuit

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

**Raises**

[**AquaError**](qiskit.aqua.AquaError "qiskit.aqua.AquaError") – If `x` and `theta` share parameters with the same name.

### datapoints

<span id="qiskit.aqua.algorithms.VQC.datapoints" />

`property datapoints`

return data points

### feature\_map

<span id="qiskit.aqua.algorithms.VQC.feature_map" />

`property feature_map`

Return the feature map.

**Return type**

`Union`\[`FeatureMap`, `QuantumCircuit`, `None`]

### find\_minimum

<span id="qiskit.aqua.algorithms.VQC.find_minimum" />

`find_minimum(initial_point=None, var_form=None, cost_fn=None, optimizer=None, gradient_fn=None)`

Optimize to find the minimum cost value.

**Parameters**

*   **initial\_point** (`Optional`\[`ndarray`]) – If not None will be used instead of any initial point supplied via constructor. If None and None was supplied to constructor then a random point will be used if the optimizer requires an initial point.
*   **var\_form** (`Union`\[`QuantumCircuit`, `VariationalForm`, `None`]) – If not None will be used instead of any variational form supplied via constructor.
*   **cost\_fn** (`Optional`\[`Callable`]) – If not None will be used instead of any cost\_fn supplied via constructor.
*   **optimizer** (`Optional`\[`Optimizer`]) – If not None will be used instead of any optimizer supplied via constructor.
*   **gradient\_fn** (`Optional`\[`Callable`]) – Optional gradient function for optimizer

**Returns**

Optimized variational parameters, and corresponding minimum cost value.

**Return type**

dict

**Raises**

**ValueError** – invalid input

### get\_optimal\_circuit

<span id="qiskit.aqua.algorithms.VQC.get_optimal_circuit" />

`get_optimal_circuit()`

get optimal circuit

### get\_optimal\_cost

<span id="qiskit.aqua.algorithms.VQC.get_optimal_cost" />

`get_optimal_cost()`

get optimal cost

### get\_optimal\_vector

<span id="qiskit.aqua.algorithms.VQC.get_optimal_vector" />

`get_optimal_vector()`

get optimal vector

### get\_prob\_vector\_for\_params

<span id="qiskit.aqua.algorithms.VQC.get_prob_vector_for_params" />

`get_prob_vector_for_params(construct_circuit_fn, params_s, quantum_instance, construct_circuit_args=None)`

Helper function to get probability vectors for a set of params

### get\_probabilities\_for\_counts

<span id="qiskit.aqua.algorithms.VQC.get_probabilities_for_counts" />

`get_probabilities_for_counts(counts)`

get probabilities for counts

### initial\_point

<span id="qiskit.aqua.algorithms.VQC.initial_point" />

`property initial_point`

Returns initial point

**Return type**

`Optional`\[`ndarray`]

### is\_gradient\_really\_supported

<span id="qiskit.aqua.algorithms.VQC.is_gradient_really_supported" />

`is_gradient_really_supported()`

returns is gradient really supported

### label\_to\_class

<span id="qiskit.aqua.algorithms.VQC.label_to_class" />

`property label_to_class`

returns label to class

### load\_model

<span id="qiskit.aqua.algorithms.VQC.load_model" />

`load_model(file_path)`

load model

### optimal\_params

<span id="qiskit.aqua.algorithms.VQC.optimal_params" />

`property optimal_params`

returns optimal parameters

### optimizer

<span id="qiskit.aqua.algorithms.VQC.optimizer" />

`property optimizer`

Returns optimizer

**Return type**

`Optional`\[`Optimizer`]

### predict

<span id="qiskit.aqua.algorithms.VQC.predict" />

`predict(data, quantum_instance=None, minibatch_size=- 1, params=None)`

Predict the labels for the data.

**Parameters**

*   **data** (*numpy.ndarray*) – NxD array, N is number of data, D is data dimension
*   **quantum\_instance** ([*QuantumInstance*](qiskit.aqua.QuantumInstance "qiskit.aqua.QuantumInstance")) – quantum backend with all setting
*   **minibatch\_size** (*int*) – the size of each minibatched accuracy evaluation
*   **params** (*list*) – list of parameters to populate in the variational form

**Returns**

for each data point, generates the predicted probability for each class list: for each data point, generates the predicted label (that with the highest prob)

**Return type**

list

### quantum\_instance

<span id="qiskit.aqua.algorithms.VQC.quantum_instance" />

`property quantum_instance`

Returns quantum instance.

**Return type**

`Optional`\[`QuantumInstance`]

### random

<span id="qiskit.aqua.algorithms.VQC.random" />

`property random`

Return a numpy random.

### ret

<span id="qiskit.aqua.algorithms.VQC.ret" />

`property ret`

returns result

### run

<span id="qiskit.aqua.algorithms.VQC.run" />

`run(quantum_instance=None, **kwargs)`

Execute the algorithm with selected backend.

**Parameters**

*   **quantum\_instance** (`Union`\[`QuantumInstance`, `Backend`, `BaseBackend`, `None`]) – the experimental setting.
*   **kwargs** (*dict*) – kwargs

**Returns**

results of an algorithm.

**Return type**

dict

**Raises**

[**AquaError**](qiskit.aqua.AquaError "qiskit.aqua.AquaError") – If a quantum instance or backend has not been provided

### save\_model

<span id="qiskit.aqua.algorithms.VQC.save_model" />

`save_model(file_path)`

save model

### set\_backend

<span id="qiskit.aqua.algorithms.VQC.set_backend" />

`set_backend(backend, **kwargs)`

Sets backend with configuration.

**Return type**

`None`

### test

<span id="qiskit.aqua.algorithms.VQC.test" />

`test(data, labels, quantum_instance=None, minibatch_size=- 1, params=None)`

Predict the labels for the data, and test against with ground truth labels.

**Parameters**

*   **data** (*numpy.ndarray*) – NxD array, N is number of data and D is data dimension
*   **labels** (*numpy.ndarray*) – Nx1 array, N is number of data
*   **quantum\_instance** ([*QuantumInstance*](qiskit.aqua.QuantumInstance "qiskit.aqua.QuantumInstance")) – quantum backend with all setting
*   **minibatch\_size** (*int*) – the size of each minibatched accuracy evaluation
*   **params** (*list*) – list of parameters to populate in the variational form

**Returns**

classification accuracy

**Return type**

float

### test\_dataset

<span id="qiskit.aqua.algorithms.VQC.test_dataset" />

`property test_dataset`

returns test dataset

### train

<span id="qiskit.aqua.algorithms.VQC.train" />

`train(data, labels, quantum_instance=None, minibatch_size=- 1)`

Train the models, and save results.

**Parameters**

*   **data** (*numpy.ndarray*) – NxD array, N is number of data and D is dimension
*   **labels** (*numpy.ndarray*) – Nx1 array, N is number of data
*   **quantum\_instance** ([*QuantumInstance*](qiskit.aqua.QuantumInstance "qiskit.aqua.QuantumInstance")) – quantum backend with all setting
*   **minibatch\_size** (*int*) – the size of each minibatched accuracy evaluation

### training\_dataset

<span id="qiskit.aqua.algorithms.VQC.training_dataset" />

`property training_dataset`

returns training dataset

### var\_form

<span id="qiskit.aqua.algorithms.VQC.var_form" />

`property var_form`

Returns variational form

**Return type**

`Union`\[`QuantumCircuit`, `VariationalForm`, `None`]

