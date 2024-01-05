---
title: IQPE
description: API reference for qiskit.aqua.algorithms.IQPE
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.algorithms.IQPE
---

# qiskit.aqua.algorithms.IQPE

<span id="qiskit.aqua.algorithms.IQPE" />

`IQPE(operator=None, state_in=None, num_time_slices=1, num_iterations=1, expansion_mode='suzuki', expansion_order=2, shallow_circuit_concat=False, quantum_instance=None)`

The Iterative Quantum Phase Estimation algorithm.

IQPE, as its name suggests, iteratively computes the phase so as to require fewer qubits. It has the same set of parameters as [`QPE`](qiskit.aqua.algorithms.QPE "qiskit.aqua.algorithms.QPE"), except for the number of ancillary qubits *num\_ancillae*, being replaced by *num\_iterations* and that an Inverse Quantum Fourier Transform (IQFT) is not used for IQPE.

**Reference:**

**\[1]: Dobsicek et al. (2006), Arbitrary accuracy iterative phase estimation algorithm as a two**

qubit benchmark, [arxiv/quant-ph/0610214](https://arxiv.org/abs/quant-ph/0610214)

**Parameters**

*   **operator** (`Union`\[`OperatorBase`, `LegacyBaseOperator`, `None`]) – The hamiltonian Operator
*   **state\_in** (`Union`\[`QuantumCircuit`, `InitialState`, `None`]) – An InitialState component representing an initial quantum state.
*   **num\_time\_slices** (`int`) – The number of time slices, has a minimum value of 1.
*   **num\_iterations** (`int`) – The number of iterations, has a minimum value of 1.
*   **expansion\_mode** (`str`) – The expansion mode (‘trotter’|’suzuki’)
*   **expansion\_order** (`int`) – The suzuki expansion order, has a min. value of 1.
*   **shallow\_circuit\_concat** (`bool`) – Set True to use shallow (cheap) mode for circuit concatenation of evolution slices. By default this is False.
*   **quantum\_instance** (`Union`\[`QuantumInstance`, `Backend`, `BaseBackend`, `None`]) – Quantum Instance or Backend

### \_\_init\_\_

<span id="qiskit.aqua.algorithms.IQPE.__init__" />

`__init__(operator=None, state_in=None, num_time_slices=1, num_iterations=1, expansion_mode='suzuki', expansion_order=2, shallow_circuit_concat=False, quantum_instance=None)`

**Parameters**

*   **operator** (`Union`\[`OperatorBase`, `LegacyBaseOperator`, `None`]) – The hamiltonian Operator
*   **state\_in** (`Union`\[`QuantumCircuit`, `InitialState`, `None`]) – An InitialState component representing an initial quantum state.
*   **num\_time\_slices** (`int`) – The number of time slices, has a minimum value of 1.
*   **num\_iterations** (`int`) – The number of iterations, has a minimum value of 1.
*   **expansion\_mode** (`str`) – The expansion mode (‘trotter’|’suzuki’)
*   **expansion\_order** (`int`) – The suzuki expansion order, has a min. value of 1.
*   **shallow\_circuit\_concat** (`bool`) – Set True to use shallow (cheap) mode for circuit concatenation of evolution slices. By default this is False.
*   **quantum\_instance** (`Union`\[`QuantumInstance`, `Backend`, `BaseBackend`, `None`]) – Quantum Instance or Backend

## Methods

## Attributes

### aux\_operators

<span id="qiskit.aqua.algorithms.IQPE.aux_operators" />

`property aux_operators`

Returns aux operators

**Return type**

`Optional`\[`List`\[`Union`\[`OperatorBase`, `LegacyBaseOperator`]]]

### backend

<span id="qiskit.aqua.algorithms.IQPE.backend" />

`property backend`

Returns backend.

**Return type**

`Union`\[`Backend`, `BaseBackend`]

### compute\_minimum\_eigenvalue

<span id="qiskit.aqua.algorithms.IQPE.compute_minimum_eigenvalue" />

`compute_minimum_eigenvalue(operator=None, aux_operators=None)`

Computes minimum eigenvalue. Operator and aux\_operators can be supplied here and if not None will override any already set into algorithm so it can be reused with different operators. While an operator is required by algorithms, aux\_operators are optional. To ‘remove’ a previous aux\_operators array use an empty list here.

**Parameters**

*   **operator** (`Union`\[`OperatorBase`, `LegacyBaseOperator`, `None`]) – If not None replaces operator in algorithm
*   **aux\_operators** (`Optional`\[`List`\[`Union`\[`OperatorBase`, `LegacyBaseOperator`]]]) – If not None replaces aux\_operators in algorithm

**Return type**

`MinimumEigensolverResult`

**Returns**

MinimumEigensolverResult

### construct\_circuit

<span id="qiskit.aqua.algorithms.IQPE.construct_circuit" />

`construct_circuit(k=None, omega=0, measurement=False)`

Construct the kth iteration Quantum Phase Estimation circuit.

For details of parameters, please see Fig. 2 in [https://arxiv.org/pdf/quant-ph/0610214.pdf](https://arxiv.org/pdf/quant-ph/0610214.pdf).

**Parameters**

*   **k** (`Optional`\[`int`]) – the iteration idx.
*   **omega** (`float`) – the feedback angle.
*   **measurement** (`bool`) – Boolean flag to indicate if measurement should be included in the circuit.

**Returns**

the quantum circuit per iteration

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

### operator

<span id="qiskit.aqua.algorithms.IQPE.operator" />

`property operator`

Returns operator

**Return type**

`Union`\[`OperatorBase`, `LegacyBaseOperator`, `None`]

### quantum\_instance

<span id="qiskit.aqua.algorithms.IQPE.quantum_instance" />

`property quantum_instance`

Returns quantum instance.

**Return type**

`Optional`\[`QuantumInstance`]

### random

<span id="qiskit.aqua.algorithms.IQPE.random" />

`property random`

Return a numpy random.

### run

<span id="qiskit.aqua.algorithms.IQPE.run" />

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

### set\_backend

<span id="qiskit.aqua.algorithms.IQPE.set_backend" />

`set_backend(backend, **kwargs)`

Sets backend with configuration.

**Return type**

`None`

### supports\_aux\_operators

<span id="qiskit.aqua.algorithms.IQPE.supports_aux_operators" />

`classmethod supports_aux_operators()`

Whether computing the expectation value of auxiliary operators is supported.

If the minimum eigensolver computes an eigenstate of the main operator then it can compute the expectation value of the aux\_operators for that state. Otherwise they will be ignored.

**Return type**

`bool`

**Returns**

True if aux\_operator expectations can be evaluated, False otherwise

