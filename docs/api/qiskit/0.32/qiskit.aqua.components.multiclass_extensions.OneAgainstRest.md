---
title: OneAgainstRest
description: API reference for qiskit.aqua.components.multiclass_extensions.OneAgainstRest
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.components.multiclass_extensions.OneAgainstRest
---

# OneAgainstRest

<span id="qiskit.aqua.components.multiclass_extensions.OneAgainstRest" />

`OneAgainstRest`[GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.9/qiskit/aqua/components/multiclass_extensions/one_against_rest.py "view source code")

Bases: `qiskit.aqua.components.multiclass_extensions.multiclass_extension.MulticlassExtension`

The One Against Rest multiclass extension.

For an $n$-class problem, the **one-against-rest** method constructs $n$ SVM classifiers, with the $i$-th classifier separating class $i$ from all the remaining classes, $\forall i \in \{1, 2, \ldots, n\}$. When the $n$ classifiers are combined to make the final decision, the classifier that generates the highest value from its decision function is selected as the winner and the corresponding class label is returned.

## Methods

### predict

<span id="qiskit.aqua.components.multiclass_extensions.OneAgainstRest.predict" />

`OneAgainstRest.predict(x)`[GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.9/qiskit/aqua/components/multiclass_extensions/one_against_rest.py "view source code")

Applying multiple estimators for prediction.

**Parameters**

**x** (*numpy.ndarray*) – NxD array

**Returns**

predicted labels, Nx1 array

**Return type**

numpy.ndarray

### set\_estimator

<span id="qiskit.aqua.components.multiclass_extensions.OneAgainstRest.set_estimator" />

`OneAgainstRest.set_estimator(estimator_cls, params=None)`

Called internally to set `Estimator` and parameters :type estimator\_cls: `Callable`\[\[`List`], `Estimator`] :param estimator\_cls: An `Estimator` class :type params: `Optional`\[`List`] :param params: Parameters for the estimator

**Return type**

`None`

### test

<span id="qiskit.aqua.components.multiclass_extensions.OneAgainstRest.test" />

`OneAgainstRest.test(x, y)`[GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.9/qiskit/aqua/components/multiclass_extensions/one_against_rest.py "view source code")

Testing multiple estimators each for distinguishing a pair of classes.

**Parameters**

*   **x** (*numpy.ndarray*) – input points
*   **y** (*numpy.ndarray*) – input labels

**Returns**

accuracy

**Return type**

float

### train

<span id="qiskit.aqua.components.multiclass_extensions.OneAgainstRest.train" />

`OneAgainstRest.train(x, y)`[GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.9/qiskit/aqua/components/multiclass_extensions/one_against_rest.py "view source code")

Training multiple estimators each for distinguishing a pair of classes.

**Parameters**

*   **x** (*numpy.ndarray*) – input points
*   **y** (*numpy.ndarray*) – input labels

**Raises**

**Exception** – given all data points are assigned to the same class, the prediction would be boring

