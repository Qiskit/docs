---
title: BooleanExpression
description: API reference for qiskit.circuit.classicalfunction.BooleanExpression
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.classicalfunction.BooleanExpression
---

# BooleanExpression

<span id="qiskit.circuit.classicalfunction.BooleanExpression" />

`qiskit.circuit.classicalfunction.BooleanExpression(expression, name=None, var_order=None)`

Bases: `ClassicalElement`

The Boolean Expression gate.

**Parameters**

*   **expression** ([*str*](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.12)")) – The logical expression string.
*   **name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.12)")) – Optional. Instruction gate name. Otherwise part of the expression is going to be used.
*   **var\_order** ([*list*](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.12)")) – A list with the order in which variables will be created. (default: by appearance)

## Attributes

<span id="qiskit.circuit.classicalfunction.BooleanExpression.base_class" />

### base\_class

Get the base class of this instruction. This is guaranteed to be in the inheritance tree of `self`.

The “base class” of an instruction is the lowest class in its inheritance tree that the object should be considered entirely compatible with for \_all\_ circuit applications. This typically means that the subclass is defined purely to offer some sort of programmer convenience over the base class, and the base class is the “true” class for a behavioural perspective. In particular, you should *not* override [`base_class`](#qiskit.circuit.classicalfunction.BooleanExpression.base_class "qiskit.circuit.classicalfunction.BooleanExpression.base_class") if you are defining a custom version of an instruction that will be implemented differently by hardware, such as an alternative measurement strategy, or a version of a parametrised gate with a particular set of parameters for the purposes of distinguishing it in a [`Target`](qiskit.transpiler.Target "qiskit.transpiler.Target") from the full parametrised gate.

This is often exactly equivalent to `type(obj)`, except in the case of singleton instances of standard-library instructions. These singleton instances are special subclasses of their base class, and this property will return that base. For example:

```python
>>> isinstance(XGate(), XGate)
True
>>> type(XGate()) is XGate
False
>>> XGate().base_class is XGate
True
```

In general, you should not rely on the precise class of an instruction; within a given circuit, it is expected that `Instruction.name` should be a more suitable discriminator in most situations.

<span id="qiskit.circuit.classicalfunction.BooleanExpression.condition" />

### condition

The classical condition on the instruction.

<span id="qiskit.circuit.classicalfunction.BooleanExpression.condition_bits" />

### condition\_bits

Get Clbits in condition.

<span id="qiskit.circuit.classicalfunction.BooleanExpression.decompositions" />

### decompositions

Get the decompositions of the instruction from the SessionEquivalenceLibrary.

<span id="qiskit.circuit.classicalfunction.BooleanExpression.definition" />

### definition

Return definition in terms of other basic gates.

<span id="qiskit.circuit.classicalfunction.BooleanExpression.duration" />

### duration

Get the duration.

<span id="qiskit.circuit.classicalfunction.BooleanExpression.label" />

### label

Return instruction label

<span id="qiskit.circuit.classicalfunction.BooleanExpression.mutable" />

### mutable

Is this instance is a mutable unique instance or not.

If this attribute is `False` the gate instance is a shared singleton and is not mutable.

<span id="qiskit.circuit.classicalfunction.BooleanExpression.name" />

### name

Return the name.

<span id="qiskit.circuit.classicalfunction.BooleanExpression.num_clbits" />

### num\_clbits

Return the number of clbits.

<span id="qiskit.circuit.classicalfunction.BooleanExpression.num_qubits" />

### num\_qubits

Return the number of qubits.

<span id="qiskit.circuit.classicalfunction.BooleanExpression.params" />

### params

return instruction params.

<span id="qiskit.circuit.classicalfunction.BooleanExpression.unit" />

### unit

Get the time unit of duration.

## Methods

### add\_decomposition

<span id="qiskit.circuit.classicalfunction.BooleanExpression.add_decomposition" />

`add_decomposition(decomposition)`

Add a decomposition of the instruction to the SessionEquivalenceLibrary.

### assemble

<span id="qiskit.circuit.classicalfunction.BooleanExpression.assemble" />

`assemble()`

Assemble a QasmQobjInstruction

### broadcast\_arguments

<span id="qiskit.circuit.classicalfunction.BooleanExpression.broadcast_arguments" />

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

*   **qargs** ([*list*](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.12)")) – List of quantum bit arguments.
*   **cargs** ([*list*](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.12)")) – List of classical bit arguments.

**Returns**

A tuple with single arguments.

**Raises**

[**CircuitError**](circuit#qiskit.circuit.CircuitError "qiskit.circuit.CircuitError") – If the input is not valid. For example, the number of arguments does not match the gate expectation.

**Return type**

[*Iterable*](https://docs.python.org/3/library/typing.html#typing.Iterable "(in Python v3.12)")\[[tuple](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.12)")\[[list](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.12)"), [list](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.12)")]]

### c\_if

<span id="qiskit.circuit.classicalfunction.BooleanExpression.c_if" />

`c_if(classical, val)`

Set a classical equality condition on this instruction between the register or cbit `classical` and value `val`.

<Admonition title="Note" type="note">
  This is a setter method, not an additive one. Calling this multiple times will silently override any previously set condition; it does not stack.
</Admonition>

### control

<span id="qiskit.circuit.classicalfunction.BooleanExpression.control" />

`control(num_ctrl_qubits=1, label=None, ctrl_state=None)`

Return controlled version of gate. See [`ControlledGate`](qiskit.circuit.ControlledGate "qiskit.circuit.ControlledGate") for usage.

**Parameters**

*   **num\_ctrl\_qubits** ([*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")) – number of controls to add to gate (default: `1`)
*   **label** ([*str*](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.12)") *| None*) – optional gate label
*   **ctrl\_state** ([*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")  *|*[*str*](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.12)") *| None*) – The control state in decimal or as a bitstring (e.g. `'111'`). If `None`, use `2**num_ctrl_qubits-1`.

**Returns**

Controlled version of gate. This default algorithm uses `num_ctrl_qubits-1` ancilla qubits so returns a gate of size `num_qubits + 2*num_ctrl_qubits - 1`.

**Return type**

[qiskit.circuit.ControlledGate](qiskit.circuit.ControlledGate "qiskit.circuit.ControlledGate")

**Raises**

[**QiskitError**](exceptions#qiskit.exceptions.QiskitError "qiskit.exceptions.QiskitError") – unrecognized mode or invalid ctrl\_state

### copy

<span id="qiskit.circuit.classicalfunction.BooleanExpression.copy" />

`copy(name=None)`

Copy of the instruction.

**Parameters**

**name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.12)")) – name to be given to the copied circuit, if `None` then the name stays the same.

**Returns**

a copy of the current instruction, with the name updated if it was provided

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

### from\_dimacs\_file

<span id="qiskit.circuit.classicalfunction.BooleanExpression.from_dimacs_file" />

`classmethod from_dimacs_file(filename)`

Create a BooleanExpression from the string in the DIMACS format. :param filename: A file in DIMACS format.

**Returns**

A gate for the input string

**Return type**

[BooleanExpression](#qiskit.circuit.classicalfunction.BooleanExpression "qiskit.circuit.classicalfunction.BooleanExpression")

**Raises**

[**FileNotFoundError**](https://docs.python.org/3/library/exceptions.html#FileNotFoundError "(in Python v3.12)") – If filename is not found.

### inverse

<span id="qiskit.circuit.classicalfunction.BooleanExpression.inverse" />

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

<span id="qiskit.circuit.classicalfunction.BooleanExpression.is_parameterized" />

`is_parameterized()`

Return True .IFF. instruction is parameterized else False

### power

<span id="qiskit.circuit.classicalfunction.BooleanExpression.power" />

`power(exponent)`

Creates a unitary gate as gate^exponent.

**Parameters**

**exponent** ([*float*](https://docs.python.org/3/library/functions.html#float "(in Python v3.12)")) – Gate^exponent

**Returns**

To which to\_matrix is self.to\_matrix^exponent.

**Return type**

.library.UnitaryGate

**Raises**

[**CircuitError**](circuit#qiskit.circuit.CircuitError "qiskit.circuit.CircuitError") – If Gate is not unitary

### qasm

<span id="qiskit.circuit.classicalfunction.BooleanExpression.qasm" />

`qasm()`

Return a default OpenQASM string for the instruction.

Derived instructions may override this to print in a different format (e.g. `measure q[0] -> c[0];`).

<Admonition title="Deprecated since version 0.25.0" type="danger">
  The method `qiskit.circuit.instruction.Instruction.qasm()` is deprecated as of qiskit-terra 0.25.0. It will be removed no earlier than 3 months after the release date. Correct exporting to OpenQASM 2 is the responsibility of a larger exporter; it cannot safely be done on an object-by-object basis without context. No replacement will be provided, because the premise is wrong.
</Admonition>

### repeat

<span id="qiskit.circuit.classicalfunction.BooleanExpression.repeat" />

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

### reverse\_ops

<span id="qiskit.circuit.classicalfunction.BooleanExpression.reverse_ops" />

`reverse_ops()`

For a composite instruction, reverse the order of sub-instructions.

This is done by recursively reversing all sub-instructions. It does not invert any gate.

**Returns**

**a new instruction with**

sub-instructions reversed.

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

### simulate

<span id="qiskit.circuit.classicalfunction.BooleanExpression.simulate" />

`simulate(bitstring)`

Evaluate the expression on a bitstring.

This evaluation is done classically.

**Parameters**

**bitstring** ([*str*](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.12)")) – The bitstring for which to evaluate.

**Returns**

result of the evaluation.

**Return type**

[bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.12)")

### soft\_compare

<span id="qiskit.circuit.classicalfunction.BooleanExpression.soft_compare" />

`soft_compare(other)`

Soft comparison between gates. Their names, number of qubits, and classical bit numbers must match. The number of parameters must match. Each parameter is compared. If one is a ParameterExpression then it is not taken into account.

**Parameters**

**other** (*instruction*) – other instruction.

**Returns**

are self and other equal up to parameter expressions.

**Return type**

[bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.12)")

### synth

<span id="qiskit.circuit.classicalfunction.BooleanExpression.synth" />

`synth(registerless=True, synthesizer=None)`

Synthesis the logic network into a [`QuantumCircuit`](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit").

**Parameters**

*   **registerless** ([*bool*](https://docs.python.org/3/library/functions.html#bool "(in Python v3.12)")) – Default `True`. If `False` uses the parameter names to create registers with those names. Otherwise, creates a circuit with a flat quantum register.
*   **synthesizer** ([*Callable*](https://docs.python.org/3/library/typing.html#typing.Callable "(in Python v3.12)")*\[\[*[*BooleanExpression*](#qiskit.circuit.classicalfunction.BooleanExpression "qiskit.circuit.classicalfunction.boolean_expression.BooleanExpression")*],* [*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.quantumcircuit.QuantumCircuit")*] | None*) – A callable that takes self and returns a Tweedledum circuit.

**Returns**

A circuit implementing the logic network.

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

### to\_matrix

<span id="qiskit.circuit.classicalfunction.BooleanExpression.to_matrix" />

`to_matrix()`

Return a Numpy.array for the gate unitary matrix.

**Returns**

if the Gate subclass has a matrix definition.

**Return type**

np.ndarray

**Raises**

[**CircuitError**](circuit#qiskit.circuit.CircuitError "qiskit.circuit.CircuitError") – If a Gate subclass does not implement this method an exception will be raised when this base class method is called.

### to\_mutable

<span id="qiskit.circuit.classicalfunction.BooleanExpression.to_mutable" />

`to_mutable()`

Return a mutable copy of this gate.

This method will return a new mutable copy of this gate instance. If a singleton instance is being used this will be a new unique instance that can be mutated. If the instance is already mutable it will be a deepcopy of that instance.

### validate\_parameter

<span id="qiskit.circuit.classicalfunction.BooleanExpression.validate_parameter" />

`validate_parameter(parameter)`

Gate parameters should be int, float, or ParameterExpression

