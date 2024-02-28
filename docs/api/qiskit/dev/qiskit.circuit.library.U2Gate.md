---
title: U2Gate
description: API reference for qiskit.circuit.library.U2Gate
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.U2Gate
---

# U2Gate

<span id="qiskit.circuit.library.U2Gate" />

`qiskit.circuit.library.U2Gate(phi, lam, label=None, *, duration=None, unit='dt')` [GitHub](https://github.com/qiskit/qiskit/tree/main/qiskit/circuit/library/standard_gates/u2.py "view source code")

Bases: [`Gate`](circuit#qiskit.circuit.Gate "qiskit.circuit.gate.Gate")

Single-qubit rotation about the X+Z axis.

Implemented using one X90 pulse on IBM Quantum systems:

<Admonition title="Warning" type="caution">
  This gate is deprecated. Instead, the following replacements should be used

  $$
  U2(\phi, \lambda) = U\left(\frac{\pi}{2}, \phi, \lambda\right)
  $$

  ```python
  circuit = QuantumCircuit(1)
  circuit.u(pi/2, phi, lambda)
  ```
</Admonition>

**Circuit symbol:**

```python
     ┌─────────┐
q_0: ┤ U2(φ,λ) ├
     └─────────┘
```

**Matrix Representation:**

$$
U2(\phi, \lambda) = \frac{1}{\sqrt{2}}
    \begin{pmatrix}
        1          & -e^{i\lambda} \\
        e^{i\phi} & e^{i(\phi+\lambda)}
    \end{pmatrix}
$$

**Examples:**

$$
U2(\phi,\lambda) = e^{i \frac{\phi + \lambda}{2}}RZ(\phi)
RY\left(\frac{\pi}{2}\right) RZ(\lambda)
= e^{- i\frac{\pi}{4}} P\left(\frac{\pi}{2} + \phi\right)
\sqrt{X} P\left(\lambda- \frac{\pi}{2}\right)
$$

$$
U2(0, \pi) = H
$$

$$
U2(0, 0) = RY(\pi/2)
$$

$$
U2(-\pi/2, \pi/2) = RX(\pi/2)
$$

<Admonition title="See also" type="note">
  `U3Gate`: U3 is a generalization of U2 that covers all single-qubit rotations, using two X90 pulses.
</Admonition>

Create new U2 gate.

## Attributes

<span id="qiskit.circuit.library.U2Gate.base_class" />

### base\_class

Get the base class of this instruction. This is guaranteed to be in the inheritance tree of `self`.

The “base class” of an instruction is the lowest class in its inheritance tree that the object should be considered entirely compatible with for \_all\_ circuit applications. This typically means that the subclass is defined purely to offer some sort of programmer convenience over the base class, and the base class is the “true” class for a behavioural perspective. In particular, you should *not* override [`base_class`](#qiskit.circuit.library.U2Gate.base_class "qiskit.circuit.library.U2Gate.base_class") if you are defining a custom version of an instruction that will be implemented differently by hardware, such as an alternative measurement strategy, or a version of a parametrised gate with a particular set of parameters for the purposes of distinguishing it in a [`Target`](qiskit.transpiler.Target "qiskit.transpiler.Target") from the full parametrised gate.

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

<span id="qiskit.circuit.library.U2Gate.condition" />

### condition

The classical condition on the instruction.

<span id="qiskit.circuit.library.U2Gate.condition_bits" />

### condition\_bits

Get Clbits in condition.

<span id="qiskit.circuit.library.U2Gate.decompositions" />

### decompositions

Get the decompositions of the instruction from the SessionEquivalenceLibrary.

<span id="qiskit.circuit.library.U2Gate.definition" />

### definition

Return definition in terms of other basic gates.

<span id="qiskit.circuit.library.U2Gate.duration" />

### duration

Get the duration.

<span id="qiskit.circuit.library.U2Gate.label" />

### label

Return instruction label

<span id="qiskit.circuit.library.U2Gate.mutable" />

### mutable

Is this instance is a mutable unique instance or not.

If this attribute is `False` the gate instance is a shared singleton and is not mutable.

<span id="qiskit.circuit.library.U2Gate.name" />

### name

Return the name.

<span id="qiskit.circuit.library.U2Gate.num_clbits" />

### num\_clbits

Return the number of clbits.

<span id="qiskit.circuit.library.U2Gate.num_qubits" />

### num\_qubits

Return the number of qubits.

<span id="qiskit.circuit.library.U2Gate.params" />

### params

The parameters of this `Instruction`. Ideally these will be gate angles.

<span id="qiskit.circuit.library.U2Gate.unit" />

### unit

Get the time unit of duration.

## Methods

### inverse

<span id="qiskit.circuit.library.U2Gate.inverse" />

`inverse(annotated=False)`

Return inverted U2 gate.

$U2(\phi, \lambda)^{\dagger} =U2(-\lambda-\pi, -\phi+\pi))$

**Parameters**

**annotated** ([*bool*](https://docs.python.org/3/library/functions.html#bool "(in Python v3.12)")) – when set to `True`, this is typically used to return an [`AnnotatedOperation`](circuit#qiskit.circuit.AnnotatedOperation "qiskit.circuit.AnnotatedOperation") with an inverse modifier set instead of a concrete [`Gate`](circuit#qiskit.circuit.Gate "qiskit.circuit.Gate"). However, for this class this argument is ignored as the inverse of this gate is always a [`U2Gate`](#qiskit.circuit.library.U2Gate "qiskit.circuit.library.U2Gate") with inverse parameter values.

**Returns**

inverse gate.

**Return type**

[U2Gate](#qiskit.circuit.library.U2Gate "qiskit.circuit.library.U2Gate")

