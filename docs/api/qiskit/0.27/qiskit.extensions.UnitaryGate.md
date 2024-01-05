---
title: UnitaryGate
description: API reference for qiskit.extensions.UnitaryGate
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.extensions.UnitaryGate
---

# qiskit.extensions.UnitaryGate

<span id="qiskit.extensions.UnitaryGate" />

`UnitaryGate(data, label=None)`

Class for representing unitary gates

Create a gate from a numeric unitary matrix.

**Parameters**

*   **data** (*matrix or* [*Operator*](qiskit.quantum_info.Operator "qiskit.quantum_info.Operator")) – unitary operator.
*   **label** (*str*) – unitary name for backend \[Default: None].

**Raises**

**ExtensionError** – if input data is not an N-qubit unitary operator.

### \_\_init\_\_

<span id="qiskit.extensions.UnitaryGate.__init__" />

`__init__(data, label=None)`

Create a gate from a numeric unitary matrix.

**Parameters**

*   **data** (*matrix or* [*Operator*](qiskit.quantum_info.Operator "qiskit.quantum_info.Operator")) – unitary operator.
*   **label** (*str*) – unitary name for backend \[Default: None].

**Raises**

**ExtensionError** – if input data is not an N-qubit unitary operator.

## Methods

## Attributes

### add\_decomposition

<span id="qiskit.extensions.UnitaryGate.add_decomposition" />

`add_decomposition(decomposition)`

Add a decomposition of the instruction to the SessionEquivalenceLibrary.

### adjoint

<span id="qiskit.extensions.UnitaryGate.adjoint" />

`adjoint()`

Return the adjoint of the unitary.

### assemble

<span id="qiskit.extensions.UnitaryGate.assemble" />

`assemble()`

Assemble a QasmQobjInstruction

**Return type**

`Instruction`

### broadcast\_arguments

<span id="qiskit.extensions.UnitaryGate.broadcast_arguments" />

`broadcast_arguments(qargs, cargs)`

Validation and handling of the arguments and its relationship.

For example, `cx([q[0],q[1]], q[2])` means `cx(q[0], q[2]); cx(q[1], q[2])`. This method yields the arguments in the right grouping. In the given example:

```python
in: [[q[0],q[1]], q[2]],[]
outs: [q[0], q[2]], []
      [q[1], q[2]], []
```

The general broadcasting rules are:

> *   If len(qargs) == 1:
>
>     ```python
>     [q[0], q[1]] -> [q[0]],[q[1]]
>     ```
>
> *   If len(qargs) == 2:
>
>     ```python
>     [[q[0], q[1]], [r[0], r[1]]] -> [q[0], r[0]], [q[1], r[1]]
>     [[q[0]], [r[0], r[1]]]       -> [q[0], r[0]], [q[0], r[1]]
>     [[q[0], q[1]], [r[0]]]       -> [q[0], r[0]], [q[1], r[0]]
>     ```
>
> *   If len(qargs) >= 3:
>
>     ```python
>     [q[0], q[1]], [r[0], r[1]],  ...] -> [q[0], r[0], ...], [q[1], r[1], ...]
>     ```

**Parameters**

*   **qargs** (`List`) – List of quantum bit arguments.
*   **cargs** (`List`) – List of classical bit arguments.

**Return type**

`Tuple`\[`List`, `List`]

**Returns**

A tuple with single arguments.

**Raises**

**CircuitError** – If the input is not valid. For example, the number of arguments does not match the gate expectation.

### c\_if

<span id="qiskit.extensions.UnitaryGate.c_if" />

`c_if(classical, val)`

Add classical condition on register classical and value val.

### conjugate

<span id="qiskit.extensions.UnitaryGate.conjugate" />

`conjugate()`

Return the conjugate of the unitary.

### control

<span id="qiskit.extensions.UnitaryGate.control" />

`control(num_ctrl_qubits=1, label=None, ctrl_state=None)`

Return controlled version of gate

**Parameters**

*   **num\_ctrl\_qubits** (*int*) – number of controls to add to gate (default=1)
*   **label** (*str*) – optional gate label
*   **ctrl\_state** (*int or str or None*) – The control state in decimal or as a bit string (e.g. ‘1011’). If None, use 2\*\*num\_ctrl\_qubits-1.

**Returns**

controlled version of gate.

**Return type**

[UnitaryGate](#qiskit.extensions.UnitaryGate "qiskit.extensions.UnitaryGate")

**Raises**

*   **QiskitError** – Invalid ctrl\_state.
*   **ExtensionError** – Non-unitary controlled unitary.

### copy

<span id="qiskit.extensions.UnitaryGate.copy" />

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

<span id="qiskit.extensions.UnitaryGate.decompositions" />

`property decompositions`

Get the decompositions of the instruction from the SessionEquivalenceLibrary.

### definition

<span id="qiskit.extensions.UnitaryGate.definition" />

`property definition`

Return definition in terms of other basic gates.

### duration

<span id="qiskit.extensions.UnitaryGate.duration" />

`property duration`

Get the duration.

### inverse

<span id="qiskit.extensions.UnitaryGate.inverse" />

`inverse()`

Return the adjoint of the unitary.

### is\_parameterized

<span id="qiskit.extensions.UnitaryGate.is_parameterized" />

`is_parameterized()`

Return True .IFF. instruction is parameterized else False

### label

<span id="qiskit.extensions.UnitaryGate.label" />

`property label`

Return gate label

**Return type**

`str`

### mirror

<span id="qiskit.extensions.UnitaryGate.mirror" />

`mirror()`

DEPRECATED: use instruction.reverse\_ops().

**Returns**

**a new instruction with sub-instructions**

reversed.

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

### params

<span id="qiskit.extensions.UnitaryGate.params" />

`property params`

return instruction params.

### power

<span id="qiskit.extensions.UnitaryGate.power" />

`power(exponent)`

Creates a unitary gate as gate^exponent.

**Parameters**

**exponent** (*float*) – Gate^exponent

**Returns**

To which to\_matrix is self.to\_matrix^exponent.

**Return type**

[qiskit.extensions.UnitaryGate](#qiskit.extensions.UnitaryGate "qiskit.extensions.UnitaryGate")

**Raises**

**CircuitError** – If Gate is not unitary

### qasm

<span id="qiskit.extensions.UnitaryGate.qasm" />

`qasm()`

The qasm for a custom unitary gate This is achieved by adding a custom gate that corresponds to the definition of this gate. It gives the gate a random name if one hasn’t been given to it.

### repeat

<span id="qiskit.extensions.UnitaryGate.repeat" />

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

<span id="qiskit.extensions.UnitaryGate.reverse_ops" />

`reverse_ops()`

For a composite instruction, reverse the order of sub-instructions.

This is done by recursively reversing all sub-instructions. It does not invert any gate.

**Returns**

**a new instruction with**

sub-instructions reversed.

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

### soft\_compare

<span id="qiskit.extensions.UnitaryGate.soft_compare" />

`soft_compare(other)`

Soft comparison between gates. Their names, number of qubits, and classical bit numbers must match. The number of parameters must match. Each parameter is compared. If one is a ParameterExpression then it is not taken into account.

**Parameters**

**other** (*instruction*) – other instruction.

**Returns**

are self and other equal up to parameter expressions.

**Return type**

bool

### to\_matrix

<span id="qiskit.extensions.UnitaryGate.to_matrix" />

`to_matrix()`

Return a Numpy.array for the gate unitary matrix.

**Returns**

if the Gate subclass has a matrix definition.

**Return type**

np.ndarray

**Raises**

**CircuitError** – If a Gate subclass does not implement this method an exception will be raised when this base class method is called.

### transpose

<span id="qiskit.extensions.UnitaryGate.transpose" />

`transpose()`

Return the transpose of the unitary.

### unit

<span id="qiskit.extensions.UnitaryGate.unit" />

`property unit`

Get the time unit of duration.

### validate\_parameter

<span id="qiskit.extensions.UnitaryGate.validate_parameter" />

`validate_parameter(parameter)`

Unitary gate parameter has to be an ndarray.

