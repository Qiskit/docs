---
title: RZZGate
description: API reference for qiskit.circuit.library.RZZGate
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.RZZGate
---

# RZZGate

<span id="qiskit.circuit.library.RZZGate" />

`qiskit.circuit.library.RZZGate(theta, label=None, *, duration=None, unit='dt')`

Bases: [`Gate`](qiskit.circuit.Gate "qiskit.circuit.gate.Gate")

A parametric 2-qubit $Z \otimes Z$ interaction (rotation about ZZ).

This gate is symmetric, and is maximally entangling at $\theta = \pi/2$.

Can be applied to a [`QuantumCircuit`](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit") with the [`rzz()`](qiskit.circuit.QuantumCircuit#rzz "qiskit.circuit.QuantumCircuit.rzz") method.

**Circuit Symbol:**

```python
q_0: ───■────
        │zz(θ)
q_1: ───■────
```

**Matrix Representation:**

$$
 \begin{align}\begin{aligned}\newcommand{\th}{\frac{\theta}{2}}\\\begin{split}R_{ZZ}(\theta) = \exp\left(-i \th Z{\otimes}Z\right) =
    \begin{pmatrix}
        e^{-i \th} & 0 & 0 & 0 \\
        0 & e^{i \th} & 0 & 0 \\
        0 & 0 & e^{i \th} & 0 \\
        0 & 0 & 0 & e^{-i \th}
    \end{pmatrix}\end{split}\end{aligned}\end{align} 
$$

This is a direct sum of RZ rotations, so this gate is equivalent to a uniformly controlled (multiplexed) RZ gate:

$$
\begin{split}R_{ZZ}(\theta) =
    \begin{pmatrix}
        RZ(\theta) & 0 \\
        0 & RZ(-\theta)
    \end{pmatrix}\end{split}
$$

**Examples:**

> $$
> R_{ZZ}(\theta = 0) = I
> $$
>
> $$
> R_{ZZ}(\theta = 2\pi) = -I
> $$
>
> $$
> R_{ZZ}(\theta = \pi) = - Z \otimes Z
> $$
>
> $$
> \begin{split}R_{ZZ}\left(\theta = \frac{\pi}{2}\right) = \frac{1}{\sqrt{2}}
>                         \begin{pmatrix}
>                             1-i & 0 & 0 & 0 \\
>                             0 & 1+i & 0 & 0 \\
>                             0 & 0 & 1+i & 0 \\
>                             0 & 0 & 0 & 1-i
>                         \end{pmatrix}\end{split}
> $$

Create new RZZ gate.

## Attributes

<span id="qiskit.circuit.library.RZZGate.base_class" />

### base\_class

Get the base class of this instruction. This is guaranteed to be in the inheritance tree of `self`.

The “base class” of an instruction is the lowest class in its inheritance tree that the object should be considered entirely compatible with for \_all\_ circuit applications. This typically means that the subclass is defined purely to offer some sort of programmer convenience over the base class, and the base class is the “true” class for a behavioural perspective. In particular, you should *not* override [`base_class`](#qiskit.circuit.library.RZZGate.base_class "qiskit.circuit.library.RZZGate.base_class") if you are defining a custom version of an instruction that will be implemented differently by hardware, such as an alternative measurement strategy, or a version of a parametrised gate with a particular set of parameters for the purposes of distinguishing it in a [`Target`](qiskit.transpiler.Target "qiskit.transpiler.Target") from the full parametrised gate.

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

<span id="qiskit.circuit.library.RZZGate.condition" />

### condition

The classical condition on the instruction.

<span id="qiskit.circuit.library.RZZGate.condition_bits" />

### condition\_bits

Get Clbits in condition.

<span id="qiskit.circuit.library.RZZGate.decompositions" />

### decompositions

Get the decompositions of the instruction from the SessionEquivalenceLibrary.

<span id="qiskit.circuit.library.RZZGate.definition" />

### definition

Return definition in terms of other basic gates.

<span id="qiskit.circuit.library.RZZGate.duration" />

### duration

Get the duration.

<span id="qiskit.circuit.library.RZZGate.label" />

### label

Return instruction label

<span id="qiskit.circuit.library.RZZGate.mutable" />

### mutable

Is this instance is a mutable unique instance or not.

If this attribute is `False` the gate instance is a shared singleton and is not mutable.

<span id="qiskit.circuit.library.RZZGate.name" />

### name

Return the name.

<span id="qiskit.circuit.library.RZZGate.num_clbits" />

### num\_clbits

Return the number of clbits.

<span id="qiskit.circuit.library.RZZGate.num_qubits" />

### num\_qubits

Return the number of qubits.

<span id="qiskit.circuit.library.RZZGate.params" />

### params

return instruction params.

<span id="qiskit.circuit.library.RZZGate.unit" />

### unit

Get the time unit of duration.

## Methods

### inverse

<span id="qiskit.circuit.library.RZZGate.inverse" />

`inverse()`

Return inverse RZZ gate (i.e. with the negative rotation angle).

### power

<span id="qiskit.circuit.library.RZZGate.power" />

`power(exponent)`

Raise gate to a power.

