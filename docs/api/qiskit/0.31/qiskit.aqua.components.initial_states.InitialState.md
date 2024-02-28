---
title: InitialState
description: API reference for qiskit.aqua.components.initial_states.InitialState
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.components.initial_states.InitialState
---

# InitialState

<span id="qiskit.aqua.components.initial_states.InitialState" />

`InitialState` [GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.9/qiskit/aqua/components/initial_states/initial_state.py "view source code")

Bases: `abc.ABC`

Base class for InitialState.

This method should initialize the module and use an exception if a component of the module is not available.

## Methods

### construct\_circuit

<span id="qiskit.aqua.components.initial_states.InitialState.construct_circuit" />

`abstract InitialState.construct_circuit(mode='circuit', register=None)` [GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.9/qiskit/aqua/components/initial_states/initial_state.py "view source code")

Construct the statevector of desired initial state.

**Parameters**

*   **mode** (`str`) – vector or circuit. The vector mode produces the vector. While the circuit constructs the quantum circuit corresponding that vector.
*   **register** (`Optional`\[`QuantumRegister`]) – qubits for circuit construction.

**Returns**

statevector.

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit") or numpy.ndarray

**Raises**

[**AquaError**](qiskit.aqua.AquaError "qiskit.aqua.AquaError") – when mode is not ‘vector’ or ‘circuit’.

## Attributes

<span id="qiskit.aqua.components.initial_states.InitialState.bitstr" />

### bitstr

