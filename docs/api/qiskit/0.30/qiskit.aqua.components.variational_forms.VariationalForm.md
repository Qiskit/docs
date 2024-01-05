---
title: VariationalForm
description: API reference for qiskit.aqua.components.variational_forms.VariationalForm
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.components.variational_forms.VariationalForm
---

# VariationalForm

<span id="qiskit.aqua.components.variational_forms.VariationalForm" />

`VariationalForm`

Bases: `abc.ABC`

Base class for VariationalForms.

This method should initialize the module and use an exception if a component of the module is not available.

## Methods

### construct\_circuit

<span id="qiskit.aqua.components.variational_forms.VariationalForm.construct_circuit" />

`abstract VariationalForm.construct_circuit(parameters, q=None)`

Construct the variational form, given its parameters.

**Parameters**

*   **parameters** (`Union`\[`List`\[`float`], `ndarray`]) – circuit parameters.
*   **q** (`Optional`\[`QuantumRegister`]) – Quantum Register for the circuit.

**Returns**

A quantum circuit.

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

### get\_entangler\_map

<span id="qiskit.aqua.components.variational_forms.VariationalForm.get_entangler_map" />

`static VariationalForm.get_entangler_map(map_type, num_qubits, offset=0)`

returns entangler map

### validate\_entangler\_map

<span id="qiskit.aqua.components.variational_forms.VariationalForm.validate_entangler_map" />

`static VariationalForm.validate_entangler_map(entangler_map, num_qubits)`

validate entangler map

## Attributes

<span id="qiskit.aqua.components.variational_forms.VariationalForm.num_parameters" />

### num\_parameters

Number of parameters of the variational form.

**Returns**

An integer indicating the number of parameters.

**Return type**

int

<span id="qiskit.aqua.components.variational_forms.VariationalForm.num_qubits" />

### num\_qubits

Number of qubits of the variational form.

**Returns**

An integer indicating the number of qubits.

**Return type**

int

<span id="qiskit.aqua.components.variational_forms.VariationalForm.parameter_bounds" />

### parameter\_bounds

Parameter bounds.

**Returns**

A list of pairs indicating the bounds, as (lower, upper). None indicates an unbounded parameter in the corresponding direction. If None is returned, problem is fully unbounded.

**Return type**

list

<span id="qiskit.aqua.components.variational_forms.VariationalForm.preferred_init_points" />

### preferred\_init\_points

Return preferred init points.

If an initial state is provided then the variational form may provide back this set of parameters which when used on the variational form should result in the overall state being that defined by the initial state

<span id="qiskit.aqua.components.variational_forms.VariationalForm.setting" />

### setting

<span id="qiskit.aqua.components.variational_forms.VariationalForm.support_parameterized_circuit" />

### support\_parameterized\_circuit

Whether or not the sub-class support parameterized circuit.

**Returns**

indicate the sub-class support parameterized circuit

**Return type**

boolean

