---
title: RGate
description: API reference for qiskit.circuit.library.RGate
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.RGate
---

# RGate

<span id="qiskit.circuit.library.RGate" />

`qiskit.circuit.library.RGate(theta, phi, label=None, *, duration=None, unit='dt')`

Bases: [`Gate`](qiskit.circuit.Gate "qiskit.circuit.gate.Gate")

Rotation θ around the cos(φ)x + sin(φ)y axis.

Can be applied to a [`QuantumCircuit`](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit") with the [`r()`](qiskit.circuit.QuantumCircuit#r "qiskit.circuit.QuantumCircuit.r") method.

**Circuit symbol:**

```python
     ┌──────┐
q_0: ┤ R(ϴ) ├
     └──────┘
```

**Matrix Representation:**

$$
 \begin{align}\begin{aligned}\newcommand{\th}{\frac{\theta}{2}}\\\begin{split}R(\theta, \phi) = e^{-i \th \left(\cos{\phi} x + \sin{\phi} y\right)} =
    \begin{pmatrix}
        \cos\left(\th\right) & -i e^{-i \phi} \sin\left(\th\right) \\
        -i e^{i \phi} \sin\left(\th\right) & \cos\left(\th\right)
    \end{pmatrix}\end{split}\end{aligned}\end{align} 
$$

Create new r single-qubit gate.

## Attributes

<span id="qiskit.circuit.library.RGate.base_class" />

### base\_class

Get the base class of this instruction. This is guaranteed to be in the inheritance tree of `self`.

The “base class” of an instruction is the lowest class in its inheritance tree that the object should be considered entirely compatible with for \_all\_ circuit applications. This typically means that the subclass is defined purely to offer some sort of programmer convenience over the base class, and the base class is the “true” class for a behavioural perspective. In particular, you should *not* override [`base_class`](#qiskit.circuit.library.RGate.base_class "qiskit.circuit.library.RGate.base_class") if you are defining a custom version of an instruction that will be implemented differently by hardware, such as an alternative measurement strategy, or a version of a parametrised gate with a particular set of parameters for the purposes of distinguishing it in a [`Target`](qiskit.transpiler.Target "qiskit.transpiler.Target") from the full parametrised gate.

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

<span id="qiskit.circuit.library.RGate.condition" />

### condition

The classical condition on the instruction.

<span id="qiskit.circuit.library.RGate.condition_bits" />

### condition\_bits

Get Clbits in condition.

<span id="qiskit.circuit.library.RGate.decompositions" />

### decompositions

Get the decompositions of the instruction from the SessionEquivalenceLibrary.

<span id="qiskit.circuit.library.RGate.definition" />

### definition

Return definition in terms of other basic gates.

<span id="qiskit.circuit.library.RGate.duration" />

### duration

Get the duration.

<span id="qiskit.circuit.library.RGate.label" />

### label

Return instruction label

<span id="qiskit.circuit.library.RGate.mutable" />

### mutable

Is this instance is a mutable unique instance or not.

If this attribute is `False` the gate instance is a shared singleton and is not mutable.

<span id="qiskit.circuit.library.RGate.name" />

### name

Return the name.

<span id="qiskit.circuit.library.RGate.num_clbits" />

### num\_clbits

Return the number of clbits.

<span id="qiskit.circuit.library.RGate.num_qubits" />

### num\_qubits

Return the number of qubits.

<span id="qiskit.circuit.library.RGate.params" />

### params

return instruction params.

<span id="qiskit.circuit.library.RGate.unit" />

### unit

Get the time unit of duration.

## Methods

### inverse

<span id="qiskit.circuit.library.RGate.inverse" />

`inverse()`

Invert this gate.

r(θ, φ)^dagger = r(-θ, φ)

### power

<span id="qiskit.circuit.library.RGate.power" />

`power(exponent)`

Raise gate to a power.

