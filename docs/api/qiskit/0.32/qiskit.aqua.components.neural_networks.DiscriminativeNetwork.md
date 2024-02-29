---
title: DiscriminativeNetwork
description: API reference for qiskit.aqua.components.neural_networks.DiscriminativeNetwork
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.components.neural_networks.DiscriminativeNetwork
---

# DiscriminativeNetwork

<span id="qiskit.aqua.components.neural_networks.DiscriminativeNetwork" />

`DiscriminativeNetwork` [GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.9/qiskit/aqua/components/neural_networks/discriminative_network.py "view source code")

Bases: `abc.ABC`

Base class for discriminative Quantum or Classical Neural Networks.

This method should initialize the module but raise an exception if a required component of the module is not available.

## Methods

### get\_label

<span id="qiskit.aqua.components.neural_networks.DiscriminativeNetwork.get_label" />

`abstract DiscriminativeNetwork.get_label(x)` [GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.9/qiskit/aqua/components/neural_networks/discriminative_network.py "view source code")

Apply quantum/classical neural network to the given input sample and compute the respective data label

**Parameters**

**x** (*Discriminator*) – input, i.e. data sample.

**Raises**

**NotImplementedError** – not implemented

### loss

<span id="qiskit.aqua.components.neural_networks.DiscriminativeNetwork.loss" />

`abstract DiscriminativeNetwork.loss(x, y, weights=None)` [GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.9/qiskit/aqua/components/neural_networks/discriminative_network.py "view source code")

Loss function used for optimization

**Parameters**

*   **x** (`Iterable`) – output.
*   **y** (`Iterable`) – the data point
*   **weights** (`Optional`\[`ndarray`]) – Data weights.

**Returns**

Loss w\.r.t to the generated data points.

**Raises**

**NotImplementedError** – not implemented

### save\_model

<span id="qiskit.aqua.components.neural_networks.DiscriminativeNetwork.save_model" />

`abstract DiscriminativeNetwork.save_model(snapshot_dir)` [GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.9/qiskit/aqua/components/neural_networks/discriminative_network.py "view source code")

Save discriminator model

**Parameters**

**snapshot\_dir** (`str`) – Directory to save the model

**Raises**

**NotImplementedError** – not implemented

### set\_seed

<span id="qiskit.aqua.components.neural_networks.DiscriminativeNetwork.set_seed" />

`abstract DiscriminativeNetwork.set_seed(seed)` [GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.9/qiskit/aqua/components/neural_networks/discriminative_network.py "view source code")

Set seed.

**Parameters**

**seed** (*int*) – seed

**Raises**

**NotImplementedError** – not implemented

### train

<span id="qiskit.aqua.components.neural_networks.DiscriminativeNetwork.train" />

`abstract DiscriminativeNetwork.train(data, weights, penalty=False, quantum_instance=None, shots=None)` [GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.9/qiskit/aqua/components/neural_networks/discriminative_network.py "view source code")

Perform one training step w\.r.t to the discriminator’s parameters

**Parameters**

*   **data** (`Iterable`) – Data batch.
*   **weights** (`Iterable`) – Data sample weights.
*   **penalty** (`bool`) – Indicate whether or not penalty function is applied to the loss function. Ignored if no penalty function defined.
*   **quantum\_instance** ([*QuantumInstance*](qiskit.aqua.QuantumInstance "qiskit.aqua.QuantumInstance")) – used to run Quantum network. Ignored for a classical network.
*   **shots** (`Optional`\[`int`]) – Number of shots for hardware or qasm execution. Ignored for classical network

**Returns**

with discriminator loss and updated parameters.

**Return type**

dict

**Raises**

**NotImplementedError** – not implemented

