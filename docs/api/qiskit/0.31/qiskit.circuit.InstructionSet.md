---
title: InstructionSet
description: API reference for qiskit.circuit.InstructionSet
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.InstructionSet
---

# InstructionSet

<span id="qiskit.circuit.InstructionSet" />

`InstructionSet`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.18/qiskit/circuit/instructionset.py "view source code")

Bases: `object`

Instruction collection, and their contexts.

New collection of instructions.

The context (qargs and cargs that each instruction is attached to) is also stored separately for each instruction.

## Methods

### add

<span id="qiskit.circuit.InstructionSet.add" />

`InstructionSet.add(gate, qargs, cargs)`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.18/qiskit/circuit/instructionset.py "view source code")

Add an instruction and its context (where it is attached).

### c\_if

<span id="qiskit.circuit.InstructionSet.c_if" />

`InstructionSet.c_if(classical, val)`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.18/qiskit/circuit/instructionset.py "view source code")

Add condition on classical register to all instructions.

### inverse

<span id="qiskit.circuit.InstructionSet.inverse" />

`InstructionSet.inverse()`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.18/qiskit/circuit/instructionset.py "view source code")

Invert all instructions.

