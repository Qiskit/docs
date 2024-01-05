---
title: SnapshotProbabilities
description: API reference for qiskit.providers.aer.extensions.SnapshotProbabilities
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.providers.aer.extensions.SnapshotProbabilities
---

<span id="qiskit-providers-aer-extensions-snapshotprobabilities" />

# qiskit.providers.aer.extensions.SnapshotProbabilities

<span id="qiskit.providers.aer.extensions.SnapshotProbabilities" />

`SnapshotProbabilities(label, num_qubits, variance=False)`

Snapshot instruction for all methods of Qasm simulator.

Create a probability snapshot instruction.

**Parameters**

*   **label** (*str*) – the snapshot label.
*   **num\_qubits** (*int*) – the number of qubits to snapshot.
*   **variance** (*bool*) – compute variance of probabilities \[Default: False]

**Raises**

**ExtensionError** – if snapshot is invalid.

### \_\_init\_\_

<span id="qiskit.providers.aer.extensions.SnapshotProbabilities.__init__" />

`__init__(label, num_qubits, variance=False)`

Create a probability snapshot instruction.

**Parameters**

*   **label** (*str*) – the snapshot label.
*   **num\_qubits** (*int*) – the number of qubits to snapshot.
*   **variance** (*bool*) – compute variance of probabilities \[Default: False]

**Raises**

**ExtensionError** – if snapshot is invalid.

## Methods

## Attributes

### add\_decomposition

<span id="qiskit.providers.aer.extensions.SnapshotProbabilities.add_decomposition" />

`add_decomposition(decomposition)`

Add a decomposition of the instruction to the SessionEquivalenceLibrary.

### assemble

<span id="qiskit.providers.aer.extensions.SnapshotProbabilities.assemble" />

`assemble()`

Assemble a QasmQobjInstruction

### broadcast\_arguments

<span id="qiskit.providers.aer.extensions.SnapshotProbabilities.broadcast_arguments" />

`broadcast_arguments(qargs, cargs)`

Validation of the arguments.

**Parameters**

*   **qargs** (*List*) – List of quantum bit arguments.
*   **cargs** (*List*) – List of classical bit arguments.

**Yields**

*Tuple(List, List)* – A tuple with single arguments.

**Raises**

**CircuitError** – If the input is not valid. For example, the number of arguments does not match the gate expectation.

### c\_if

<span id="qiskit.providers.aer.extensions.SnapshotProbabilities.c_if" />

`c_if(classical, val)`

Add classical condition on register classical and value val.

### copy

<span id="qiskit.providers.aer.extensions.SnapshotProbabilities.copy" />

`copy(name=None)`

Copy of the instruction.

**Parameters**

**name** (*str*) – name to be given to the copied circuit, if None then the name stays the same.

**Returns**

**a copy of the current instruction, with the name**

updated if it was provided

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

### decompositions

<span id="qiskit.providers.aer.extensions.SnapshotProbabilities.decompositions" />

`property decompositions`

Get the decompositions of the instruction from the SessionEquivalenceLibrary.

### define\_snapshot\_register

<span id="qiskit.providers.aer.extensions.SnapshotProbabilities.define_snapshot_register" />

`static define_snapshot_register(circuit, label=None, qubits=None)`

Defines qubits to snapshot for all snapshot methods

### definition

<span id="qiskit.providers.aer.extensions.SnapshotProbabilities.definition" />

`property definition`

Return definition in terms of other basic gates.

### duration

<span id="qiskit.providers.aer.extensions.SnapshotProbabilities.duration" />

`property duration`

Get the duration.

### inverse

<span id="qiskit.providers.aer.extensions.SnapshotProbabilities.inverse" />

`inverse()`

Special case. Return self.

### is\_parameterized

<span id="qiskit.providers.aer.extensions.SnapshotProbabilities.is_parameterized" />

`is_parameterized()`

Return True .IFF. instruction is parameterized else False

### label

<span id="qiskit.providers.aer.extensions.SnapshotProbabilities.label" />

`property label`

Return snapshot label

### mirror

<span id="qiskit.providers.aer.extensions.SnapshotProbabilities.mirror" />

`mirror()`

DEPRECATED: use instruction.reverse\_ops().

**Returns**

**a new instruction with sub-instructions**

reversed.

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

### params

<span id="qiskit.providers.aer.extensions.SnapshotProbabilities.params" />

`property params`

return instruction params.

### qasm

<span id="qiskit.providers.aer.extensions.SnapshotProbabilities.qasm" />

`qasm()`

Return a default OpenQASM string for the instruction.

Derived instructions may override this to print in a different format (e.g. measure q\[0] -> c\[0];).

### repeat

<span id="qiskit.providers.aer.extensions.SnapshotProbabilities.repeat" />

`repeat(n)`

Creates an instruction with gate repeated n amount of times.

**Parameters**

**n** (*int*) – Number of times to repeat the instruction

**Returns**

Containing the definition.

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

**Raises**

**CircuitError** – If n \< 1.

### reverse\_ops

<span id="qiskit.providers.aer.extensions.SnapshotProbabilities.reverse_ops" />

`reverse_ops()`

For a composite instruction, reverse the order of sub-instructions.

This is done by recursively reversing all sub-instructions. It does not invert any gate.

**Returns**

**a new instruction with**

sub-instructions reversed.

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

### snapshot\_type

<span id="qiskit.providers.aer.extensions.SnapshotProbabilities.snapshot_type" />

`property snapshot_type`

Return snapshot type

### unit

<span id="qiskit.providers.aer.extensions.SnapshotProbabilities.unit" />

`property unit`

Get the time unit of duration.

### validate\_parameter

<span id="qiskit.providers.aer.extensions.SnapshotProbabilities.validate_parameter" />

`validate_parameter(parameter)`

Instruction parameters has no validation or normalization.

