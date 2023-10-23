---
title: SwitchCaseOp
description: API reference for qiskit.circuit.SwitchCaseOp
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.SwitchCaseOp
---

# SwitchCaseOp

<span id="qiskit.circuit.SwitchCaseOp" />

`qiskit.circuit.SwitchCaseOp(target, cases, *, label=None)`

Bases: [`ControlFlowOp`](qiskit.circuit.ControlFlowOp "qiskit.circuit.controlflow.control_flow.ControlFlowOp")

A circuit operation that executes one particular circuit block based on matching a given `target` against an ordered list of `values`. The special value [`CASE_DEFAULT`](circuit#qiskit.circuit.CASE_DEFAULT "qiskit.circuit.CASE_DEFAULT") can be used to represent a default condition.

This is the low-level interface for creating a switch-case statement; in general, the circuit method [`QuantumCircuit.switch()`](qiskit.circuit.QuantumCircuit#switch "qiskit.circuit.QuantumCircuit.switch") should be used as a context manager to access the builder interface. At the low level, you must ensure that all the circuit blocks contain equal numbers of qubits and clbits, and that the order the virtual bits of the containing circuit should be bound is the same for all blocks. This will likely mean that each circuit block is wider than its natural width, as each block must span the union of all the spaces covered by *any* of the blocks.

**Parameters**

*   **target** ([*Clbit*](qiskit.circuit.Clbit "qiskit.circuit.Clbit")  *|*[*ClassicalRegister*](qiskit.circuit.ClassicalRegister "qiskit.circuit.ClassicalRegister")  *|*[*expr.Expr*](circuit_classical#qiskit.circuit.classical.expr.Expr "qiskit.circuit.classical.expr.Expr")) – the runtime value to switch on.
*   **cases** (*Iterable\[Tuple\[Any,* [*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")*]]*) – an ordered iterable of the corresponding value of the `target` and the circuit block that should be executed if this is matched. There is no fall-through between blocks, and the order matters.

Create a new instruction.

**Parameters**

*   **name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.12)")) – instruction name
*   **num\_qubits** ([*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")) – instruction’s qubit width
*   **num\_clbits** ([*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")) – instruction’s clbit width
*   **params** ([*list*](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.12)")*\[*[*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")*|*[*float*](https://docs.python.org/3/library/functions.html#float "(in Python v3.12)")*|*[*complex*](https://docs.python.org/3/library/functions.html#complex "(in Python v3.12)")*|*[*str*](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.12)")*|ndarray|*[*list*](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.12)")*|*[*ParameterExpression*](qiskit.circuit.ParameterExpression "qiskit.circuit.ParameterExpression")*]*) – list of parameters
*   **duration** ([*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")  *or*[*float*](https://docs.python.org/3/library/functions.html#float "(in Python v3.12)")) – instruction’s duration. it must be integer if `unit` is ‘dt’
*   **unit** ([*str*](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.12)")) – time unit of duration
*   **label** ([*str*](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.12)") *or None*) – An optional label for identifying the instruction.

**Raises**

*   [**CircuitError**](circuit#qiskit.circuit.CircuitError "qiskit.circuit.CircuitError") – when the register is not in the correct format.
*   [**TypeError**](https://docs.python.org/3/library/exceptions.html#TypeError "(in Python v3.12)") – when the optional label is provided, but it is not a string.

## Attributes

<span id="qiskit.circuit.SwitchCaseOp.blocks" />

### blocks

<span id="qiskit.circuit.SwitchCaseOp.condition_bits" />

### condition\_bits

Get Clbits in condition.

<span id="qiskit.circuit.SwitchCaseOp.decompositions" />

### decompositions

Get the decompositions of the instruction from the SessionEquivalenceLibrary.

<span id="qiskit.circuit.SwitchCaseOp.definition" />

### definition

Return definition in terms of other basic gates.

<span id="qiskit.circuit.SwitchCaseOp.duration" />

### duration

Get the duration.

<span id="qiskit.circuit.SwitchCaseOp.label" />

### label

Return instruction label

<span id="qiskit.circuit.SwitchCaseOp.name" />

### name

Return the name.

<span id="qiskit.circuit.SwitchCaseOp.num_clbits" />

### num\_clbits

Return the number of clbits.

<span id="qiskit.circuit.SwitchCaseOp.num_qubits" />

### num\_qubits

Return the number of qubits.

<span id="qiskit.circuit.SwitchCaseOp.params" />

### params

return instruction params.

<span id="qiskit.circuit.SwitchCaseOp.unit" />

### unit

Get the time unit of duration.

## Methods

### add\_decomposition

<span id="qiskit.circuit.SwitchCaseOp.add_decomposition" />

`add_decomposition(decomposition)`

Add a decomposition of the instruction to the SessionEquivalenceLibrary.

### assemble

<span id="qiskit.circuit.SwitchCaseOp.assemble" />

`assemble()`

Assemble a QasmQobjInstruction

### broadcast\_arguments

<span id="qiskit.circuit.SwitchCaseOp.broadcast_arguments" />

`broadcast_arguments(qargs, cargs)`

Validation of the arguments.

**Parameters**

*   **qargs** (*List*) – List of quantum bit arguments.
*   **cargs** (*List*) – List of classical bit arguments.

**Yields**

*Tuple(List, List)* – A tuple with single arguments.

**Raises**

[**CircuitError**](circuit#qiskit.circuit.CircuitError "qiskit.circuit.CircuitError") – If the input is not valid. For example, the number of arguments does not match the gate expectation.

### c\_if

<span id="qiskit.circuit.SwitchCaseOp.c_if" />

`c_if(classical, val)`

Set a classical equality condition on this instruction between the register or cbit `classical` and value `val`.

<Admonition title="Note" type="note">
  This is a setter method, not an additive one. Calling this multiple times will silently override any previously set condition; it does not stack.
</Admonition>

### cases

<span id="qiskit.circuit.SwitchCaseOp.cases" />

`cases()`

Return a lookup table from case labels to the circuit that would be executed in that case. This object is not generally suitable for creating a new [`SwitchCaseOp`](#qiskit.circuit.SwitchCaseOp "qiskit.circuit.SwitchCaseOp") because any keys that point to the same object will not be grouped.

<Admonition title="See also" type="note">
  **[`SwitchCaseOp.cases_specifier()`](#qiskit.circuit.SwitchCaseOp.cases_specifier "qiskit.circuit.SwitchCaseOp.cases_specifier")**

  An alternate method that produces its output in a suitable format for creating new [`SwitchCaseOp`](#qiskit.circuit.SwitchCaseOp "qiskit.circuit.SwitchCaseOp") instances.
</Admonition>

### cases\_specifier

<span id="qiskit.circuit.SwitchCaseOp.cases_specifier" />

`cases_specifier()`

Return an iterable where each element is a 2-tuple whose first element is a tuple of jump values, and whose second is the single circuit block that is associated with those values.

This is an abstract specification of the jump table suitable for creating new [`SwitchCaseOp`](#qiskit.circuit.SwitchCaseOp "qiskit.circuit.SwitchCaseOp") instances.

<Admonition title="See also" type="note">
  **[`SwitchCaseOp.cases()`](#qiskit.circuit.SwitchCaseOp.cases "qiskit.circuit.SwitchCaseOp.cases")**

  Create a lookup table that you can use for your own purposes to jump from values to the circuit that would be executed.
</Admonition>

**Return type**

[*Iterable*](https://docs.python.org/3/library/typing.html#typing.Iterable "(in Python v3.12)")\[[*Tuple*](https://docs.python.org/3/library/typing.html#typing.Tuple "(in Python v3.12)")\[[*Tuple*](https://docs.python.org/3/library/typing.html#typing.Tuple "(in Python v3.12)"), [*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.quantumcircuit.QuantumCircuit")]]

### copy

<span id="qiskit.circuit.SwitchCaseOp.copy" />

`copy(name=None)`

Copy of the instruction.

**Parameters**

**name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.12)")) – name to be given to the copied circuit, if `None` then the name stays the same.

**Returns**

a copy of the current instruction, with the name updated if it was provided

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

### inverse

<span id="qiskit.circuit.SwitchCaseOp.inverse" />

`inverse()`

Invert this instruction.

If the instruction is composite (i.e. has a definition), then its definition will be recursively inverted.

Special instructions inheriting from Instruction can implement their own inverse (e.g. T and Tdg, Barrier, etc.)

**Returns**

a fresh instruction for the inverse

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

**Raises**

[**CircuitError**](circuit#qiskit.circuit.CircuitError "qiskit.circuit.CircuitError") – if the instruction is not composite and an inverse has not been implemented for it.

### is\_parameterized

<span id="qiskit.circuit.SwitchCaseOp.is_parameterized" />

`is_parameterized()`

Return True .IFF. instruction is parameterized else False

### qasm

<span id="qiskit.circuit.SwitchCaseOp.qasm" />

`qasm()`

Return a default OpenQASM string for the instruction.

Derived instructions may override this to print in a different format (e.g. `measure q[0] -> c[0];`).

<Admonition title="Deprecated since version 0.25.0" type="danger">
  The method `qiskit.circuit.instruction.Instruction.qasm()` is deprecated as of qiskit-terra 0.25.0. It will be removed no earlier than 3 months after the release date. Correct exporting to OpenQASM 2 is the responsibility of a larger exporter; it cannot safely be done on an object-by-object basis without context. No replacement will be provided, because the premise is wrong.
</Admonition>

### repeat

<span id="qiskit.circuit.SwitchCaseOp.repeat" />

`repeat(n)`

Creates an instruction with gate repeated n amount of times.

**Parameters**

**n** ([*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")) – Number of times to repeat the instruction

**Returns**

Containing the definition.

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

**Raises**

[**CircuitError**](circuit#qiskit.circuit.CircuitError "qiskit.circuit.CircuitError") – If n \< 1.

### replace\_blocks

<span id="qiskit.circuit.SwitchCaseOp.replace_blocks" />

`replace_blocks(blocks)`

Replace blocks and return new instruction. :param blocks: Tuple of QuantumCircuits to replace in instruction.

**Returns**

New ControlFlowOp with replaced blocks.

**Return type**

[*SwitchCaseOp*](#qiskit.circuit.SwitchCaseOp "qiskit.circuit.controlflow.switch_case.SwitchCaseOp")

### reverse\_ops

<span id="qiskit.circuit.SwitchCaseOp.reverse_ops" />

`reverse_ops()`

For a composite instruction, reverse the order of sub-instructions.

This is done by recursively reversing all sub-instructions. It does not invert any gate.

**Returns**

**a new instruction with**

sub-instructions reversed.

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

### soft\_compare

<span id="qiskit.circuit.SwitchCaseOp.soft_compare" />

`soft_compare(other)`

Soft comparison between gates. Their names, number of qubits, and classical bit numbers must match. The number of parameters must match. Each parameter is compared. If one is a ParameterExpression then it is not taken into account.

**Parameters**

**other** (*instruction*) – other instruction.

**Returns**

are self and other equal up to parameter expressions.

**Return type**

[bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.12)")

### validate\_parameter

<span id="qiskit.circuit.SwitchCaseOp.validate_parameter" />

`validate_parameter(parameter)`

Instruction parameters has no validation or normalization.

