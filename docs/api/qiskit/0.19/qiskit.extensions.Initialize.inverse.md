---
title: inverse
description: API reference for qiskit.extensions.Initialize.inverse
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.extensions.Initialize.inverse
---

# inverse

<span id="qiskit.extensions.Initialize.inverse" />

`Initialize.inverse()`

Invert this instruction.

If the instruction is composite (i.e. has a definition), then its definition will be recursively inverted.

Special instructions inheriting from Instruction can implement their own inverse (e.g. T and Tdg, Barrier, etc.)

**Returns**

a fresh instruction for the inverse

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

**Raises**

**CircuitError** – if the instruction is not composite and an inverse has not been implemented for it.

