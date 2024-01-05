---
title: TwoQubitReduction
description: API reference for qiskit.opflow.converters.TwoQubitReduction
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.opflow.converters.TwoQubitReduction
---

# qiskit.opflow\.converters.TwoQubitReduction

<span id="qiskit.opflow.converters.TwoQubitReduction" />

`TwoQubitReduction(num_particles)`

Two qubit reduction converter which eliminates the central and last qubit in a list of Pauli that has diagonal operators (Z,I) at those positions.

Chemistry specific method: It can be used to taper two qubits in parity and binary-tree mapped fermionic Hamiltonians when the spin orbitals are ordered in two spin sectors, (block spin order) according to the number of particles in the system.

**Parameters**

**num\_particles** (`Union`\[`int`, `List`\[`int`], `Tuple`\[`int`, `int`]]) – number of particles, if it is a list, the first number is alpha and the second number if beta.

### \_\_init\_\_

<span id="qiskit.opflow.converters.TwoQubitReduction.__init__" />

`__init__(num_particles)`

**Parameters**

**num\_particles** (`Union`\[`int`, `List`\[`int`], `Tuple`\[`int`, `int`]]) – number of particles, if it is a list, the first number is alpha and the second number if beta.

## Methods

### convert

<span id="qiskit.opflow.converters.TwoQubitReduction.convert" />

`convert(operator)`

Converts the Operator to tapered one by Z2 symmetries.

**Parameters**

**operator** (`OperatorBase`) – the operator

**Return type**

`OperatorBase`

**Returns**

A new operator whose qubit number is reduced by 2.

