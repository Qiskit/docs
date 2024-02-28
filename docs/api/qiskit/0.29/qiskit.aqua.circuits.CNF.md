---
title: CNF
description: API reference for qiskit.aqua.circuits.CNF
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.circuits.CNF
---

# CNF

<span id="qiskit.aqua.circuits.CNF" />

`CNF(ast, num_vars=None)` [GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.9/qiskit/aqua/circuits/boolean_logical_circuits.py "view source code")

Bases: `qiskit.aqua.circuits.boolean_logical_circuits.BooleanLogicNormalForm`

Class for constructing circuits for Conjunctive Normal Forms

Constructor.

**Parameters**

*   **ast** (*tuple*) – The logic expression as an Abstract Syntax Tree (AST) tuple
*   **num\_vars** (*int*) – Number of boolean variables

**Raises**

[**AquaError**](qiskit.aqua.AquaError "qiskit.aqua.AquaError") – invalid input

## Methods

### compute\_num\_ancillae

<span id="qiskit.aqua.circuits.CNF.compute_num_ancillae" />

`CNF.compute_num_ancillae(mct_mode='basic')`

returns the number of ancillary qubits needed

### construct\_circuit

<span id="qiskit.aqua.circuits.CNF.construct_circuit" />

`CNF.construct_circuit(circuit=None, variable_register=None, clause_register=None, output_register=None, ancillary_register=None, mct_mode='basic')` [GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.9/qiskit/aqua/circuits/boolean_logical_circuits.py "view source code")

Construct circuit.

**Parameters**

*   **circuit** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")) – The optional circuit to extend from
*   **variable\_register** ([*QuantumRegister*](qiskit.circuit.QuantumRegister "qiskit.circuit.QuantumRegister")) – The optional quantum register to use for problem variables
*   **clause\_register** ([*QuantumRegister*](qiskit.circuit.QuantumRegister "qiskit.circuit.QuantumRegister")) – The optional quantum register to use for problem clauses
*   **output\_register** ([*QuantumRegister*](qiskit.circuit.QuantumRegister "qiskit.circuit.QuantumRegister")) – The optional quantum register to use for holding the output
*   **ancillary\_register** ([*QuantumRegister*](qiskit.circuit.QuantumRegister "qiskit.circuit.QuantumRegister")) – The optional quantum register to use as ancilla
*   **mct\_mode** (*str*) – The mode to use for building Multiple-Control Toffoli

**Returns**

quantum circuit.

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

**Raises**

[**AquaError**](qiskit.aqua.AquaError "qiskit.aqua.AquaError") – invalid input

## Attributes

<span id="qiskit.aqua.circuits.CNF.ancillary_register" />

### ancillary\_register

returns ancillary register

<span id="qiskit.aqua.circuits.CNF.clause_register" />

### clause\_register

returns clause register

<span id="qiskit.aqua.circuits.CNF.num_clauses" />

### num\_clauses

returns num clauses

<span id="qiskit.aqua.circuits.CNF.num_variables" />

### num\_variables

return num variables

<span id="qiskit.aqua.circuits.CNF.output_register" />

### output\_register

returns output register

<span id="qiskit.aqua.circuits.CNF.variable_register" />

### variable\_register

returns variable register

