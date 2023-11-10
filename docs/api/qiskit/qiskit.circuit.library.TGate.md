---
title: TGate
description: API reference for qiskit.circuit.library.TGate
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.TGate
---

# TGate

<span id="qiskit.circuit.library.TGate" />

`qiskit.circuit.library.TGate(*args, _force_mutable=False, **kwargs)`

Bases: [`SingletonGate`](circuit_singleton#qiskit.circuit.singleton.SingletonGate "qiskit.circuit.singleton.SingletonGate")

Single qubit T gate (Z\*\*0.25).

It induces a $\pi/4$ phase, and is sometimes called the pi/8 gate (because of how the RZ(pi/4) matrix looks like).

This is a non-Clifford gate and a fourth-root of Pauli-Z.

Can be applied to a [`QuantumCircuit`](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit") with the [`t()`](qiskit.circuit.QuantumCircuit#t "qiskit.circuit.QuantumCircuit.t") method.

**Matrix Representation:**

$$
\begin{split}T = \begin{pmatrix}
        1 & 0 \\
        0 & e^{i\pi/4}
    \end{pmatrix}\end{split}
$$

**Circuit symbol:**

```python
     ┌───┐
q_0: ┤ T ├
     └───┘
```

Equivalent to a $\pi/4$ radian rotation about the Z axis.

Create new T gate.

## Attributes

<span id="qiskit.circuit.library.TGate.base_class" />

### base\_class

Get the base class of this instruction. This is guaranteed to be in the inheritance tree of `self`.

The “base class” of an instruction is the lowest class in its inheritance tree that the object should be considered entirely compatible with for \_all\_ circuit applications. This typically means that the subclass is defined purely to offer some sort of programmer convenience over the base class, and the base class is the “true” class for a behavioural perspective. In particular, you should *not* override [`base_class`](#qiskit.circuit.library.TGate.base_class "qiskit.circuit.library.TGate.base_class") if you are defining a custom version of an instruction that will be implemented differently by hardware, such as an alternative measurement strategy, or a version of a parametrised gate with a particular set of parameters for the purposes of distinguishing it in a [`Target`](qiskit.transpiler.Target "qiskit.transpiler.Target") from the full parametrised gate.

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

<span id="qiskit.circuit.library.TGate.condition" />

### condition

The classical condition on the instruction.

<span id="qiskit.circuit.library.TGate.condition_bits" />

### condition\_bits

Get Clbits in condition.

<span id="qiskit.circuit.library.TGate.decompositions" />

### decompositions

Get the decompositions of the instruction from the SessionEquivalenceLibrary.

<span id="qiskit.circuit.library.TGate.definition" />

### definition

Return definition in terms of other basic gates.

<span id="qiskit.circuit.library.TGate.duration" />

### duration

Get the duration.

<span id="qiskit.circuit.library.TGate.label" />

### label

Return instruction label

<span id="qiskit.circuit.library.TGate.mutable" />

### mutable

Is this instance is a mutable unique instance or not.

If this attribute is `False` the gate instance is a shared singleton and is not mutable.

<span id="qiskit.circuit.library.TGate.name" />

### name

Return the name.

<span id="qiskit.circuit.library.TGate.num_clbits" />

### num\_clbits

Return the number of clbits.

<span id="qiskit.circuit.library.TGate.num_qubits" />

### num\_qubits

Return the number of qubits.

<span id="qiskit.circuit.library.TGate.params" />

### params

return instruction params.

<span id="qiskit.circuit.library.TGate.unit" />

### unit

Get the time unit of duration.

## Methods

### inverse

<span id="qiskit.circuit.library.TGate.inverse" />

`inverse()`

Return inverse T gate (i.e. Tdg).

### power

<span id="qiskit.circuit.library.TGate.power" />

`power(exponent)`

Raise gate to a power.

