---
title: QGAN
description: API reference for qiskit.aqua.algorithms.QGAN
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.algorithms.QGAN
---

# qiskit.aqua.algorithms.QGAN

<span id="qiskit.aqua.algorithms.QGAN" />

`QGAN(data, bounds=None, num_qubits=None, batch_size=500, num_epochs=3000, seed=7, discriminator=None, generator=None, tol_rel_ent=None, snapshot_dir=None, quantum_instance=None)`

The Quantum Generative Adversarial Network algorithm.

The qGAN \[1] is a hybrid quantum-classical algorithm used for generative modeling tasks.

This adaptive algorithm uses the interplay of a generative [`GenerativeNetwork`](qiskit.aqua.components.neural_networks.GenerativeNetwork "qiskit.aqua.components.neural_networks.GenerativeNetwork") and a discriminative [`DiscriminativeNetwork`](qiskit.aqua.components.neural_networks.DiscriminativeNetwork "qiskit.aqua.components.neural_networks.DiscriminativeNetwork") network to learn the probability distribution underlying given training data.

These networks are trained in alternating optimization steps, where the discriminator tries to differentiate between training data samples and data samples from the generator and the generator aims at generating samples which the discriminator classifies as training data samples. Eventually, the quantum generator learns the training data’s underlying probability distribution. The trained quantum generator loads a quantum state which is a model of the target distribution.

**References:**

**\[1] Zoufal et al.,**

[Quantum Generative Adversarial Networks for learning and loading random distributions](https://www.nature.com/articles/s41534-019-0223-2)

**Parameters**

*   **data** (`Union`\[`ndarray`, `List`]) – Training data of dimension k
*   **bounds** (`Union`\[`ndarray`, `List`, `None`]) – k min/max data values \[\[min\_0,max\_0],…,\[min\_k-1,max\_k-1]] if univariate data: \[min\_0,max\_0]
*   **num\_qubits** (`Union`\[`ndarray`, `List`, `None`]) – k numbers of qubits to determine representation resolution, i.e. n qubits enable the representation of 2\*\*n values \[num\_qubits\_0,…, num\_qubits\_k-1]
*   **batch\_size** (`int`) – Batch size, has a min. value of 1.
*   **num\_epochs** (`int`) – Number of training epochs
*   **seed** (`int`) – Random number seed
*   **discriminator** (`Optional`\[`DiscriminativeNetwork`]) – Discriminates between real and fake data samples
*   **generator** (`Optional`\[`GenerativeNetwork`]) – Generates ‘fake’ data samples
*   **tol\_rel\_ent** (`Optional`\[`float`]) – Set tolerance level for relative entropy. If the training achieves relative entropy equal or lower than tolerance it finishes.
*   **snapshot\_dir** (`Optional`\[`str`]) – Directory in to which to store cvs file with parameters, if None (default) then no cvs file is created.
*   **quantum\_instance** (`Union`\[`QuantumInstance`, `Backend`, `BaseBackend`, `None`]) – Quantum Instance or Backend

**Raises**

[**AquaError**](qiskit.aqua.AquaError "qiskit.aqua.AquaError") – invalid input

### \_\_init\_\_

<span id="qiskit.aqua.algorithms.QGAN.__init__" />

`__init__(data, bounds=None, num_qubits=None, batch_size=500, num_epochs=3000, seed=7, discriminator=None, generator=None, tol_rel_ent=None, snapshot_dir=None, quantum_instance=None)`

**Parameters**

*   **data** (`Union`\[`ndarray`, `List`]) – Training data of dimension k
*   **bounds** (`Union`\[`ndarray`, `List`, `None`]) – k min/max data values \[\[min\_0,max\_0],…,\[min\_k-1,max\_k-1]] if univariate data: \[min\_0,max\_0]
*   **num\_qubits** (`Union`\[`ndarray`, `List`, `None`]) – k numbers of qubits to determine representation resolution, i.e. n qubits enable the representation of 2\*\*n values \[num\_qubits\_0,…, num\_qubits\_k-1]
*   **batch\_size** (`int`) – Batch size, has a min. value of 1.
*   **num\_epochs** (`int`) – Number of training epochs
*   **seed** (`int`) – Random number seed
*   **discriminator** (`Optional`\[`DiscriminativeNetwork`]) – Discriminates between real and fake data samples
*   **generator** (`Optional`\[`GenerativeNetwork`]) – Generates ‘fake’ data samples
*   **tol\_rel\_ent** (`Optional`\[`float`]) – Set tolerance level for relative entropy. If the training achieves relative entropy equal or lower than tolerance it finishes.
*   **snapshot\_dir** (`Optional`\[`str`]) – Directory in to which to store cvs file with parameters, if None (default) then no cvs file is created.
*   **quantum\_instance** (`Union`\[`QuantumInstance`, `Backend`, `BaseBackend`, `None`]) – Quantum Instance or Backend

**Raises**

[**AquaError**](qiskit.aqua.AquaError "qiskit.aqua.AquaError") – invalid input

## Methods

## Attributes

### backend

<span id="qiskit.aqua.algorithms.QGAN.backend" />

`property backend`

Returns backend.

**Return type**

`Union`\[`Backend`, `BaseBackend`]

### d\_loss

<span id="qiskit.aqua.algorithms.QGAN.d_loss" />

`property d_loss`

Returns discriminator loss

**Return type**

`List`\[`float`]

### discriminator

<span id="qiskit.aqua.algorithms.QGAN.discriminator" />

`property discriminator`

Returns discriminator

### g\_loss

<span id="qiskit.aqua.algorithms.QGAN.g_loss" />

`property g_loss`

Returns generator loss

**Return type**

`List`\[`float`]

### generator

<span id="qiskit.aqua.algorithms.QGAN.generator" />

`property generator`

Returns generator

### get\_rel\_entr

<span id="qiskit.aqua.algorithms.QGAN.get_rel_entr" />

`get_rel_entr()`

Get relative entropy between target and trained distribution

**Return type**

`float`

### quantum\_instance

<span id="qiskit.aqua.algorithms.QGAN.quantum_instance" />

`property quantum_instance`

Returns quantum instance.

**Return type**

`Optional`\[`QuantumInstance`]

### random

<span id="qiskit.aqua.algorithms.QGAN.random" />

`property random`

Return a numpy random.

### rel\_entr

<span id="qiskit.aqua.algorithms.QGAN.rel_entr" />

`property rel_entr`

Returns relative entropy between target and trained distribution

**Return type**

`List`\[`float`]

### run

<span id="qiskit.aqua.algorithms.QGAN.run" />

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

### seed

<span id="qiskit.aqua.algorithms.QGAN.seed" />

`property seed`

Returns random seed

### set\_backend

<span id="qiskit.aqua.algorithms.QGAN.set_backend" />

`set_backend(backend, **kwargs)`

Sets backend with configuration.

**Return type**

`None`

### set\_discriminator

<span id="qiskit.aqua.algorithms.QGAN.set_discriminator" />

`set_discriminator(discriminator=None)`

Initialize discriminator.

**Parameters**

**discriminator** (*Discriminator*) – discriminator

### set\_generator

<span id="qiskit.aqua.algorithms.QGAN.set_generator" />

`set_generator(generator_circuit=None, generator_init_params=None, generator_optimizer=None, generator_gradient=None)`

Initialize generator.

**Parameters**

*   **generator\_circuit** (`Union`\[`UnivariateVariationalDistribution`, `MultivariateVariationalDistribution`, `QuantumCircuit`, `None`]) – parameterized quantum circuit which sets the structure of the quantum generator
*   **generator\_init\_params** (`Optional`\[`ndarray`]) – initial parameters for the generator circuit
*   **generator\_optimizer** (`Optional`\[`Optimizer`]) – optimizer to be used for the training of the generator
*   **generator\_gradient** (`Union`\[`Callable`, `Gradient`, `None`]) – A Gradient object, or a function returning partial derivatives of the loss function w\.r.t. the generator variational params.

**Raises**

[**AquaError**](qiskit.aqua.AquaError "qiskit.aqua.AquaError") – invalid input

### tol\_rel\_ent

<span id="qiskit.aqua.algorithms.QGAN.tol_rel_ent" />

`property tol_rel_ent`

Returns tolerance for relative entropy

### train

<span id="qiskit.aqua.algorithms.QGAN.train" />

`train()`

Train the qGAN

**Raises**

[**AquaError**](qiskit.aqua.AquaError "qiskit.aqua.AquaError") – Batch size bigger than the number of items in the truncated data set

