---
title: XXPlusYYGate
description: API reference for qiskit.circuit.library.XXPlusYYGate
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.XXPlusYYGate
---

# XXPlusYYGate

<span id="qiskit.circuit.library.XXPlusYYGate" />

`qiskit.circuit.library.XXPlusYYGate(theta, beta=0, label='(XX+YY)', *, duration=None, unit='dt')`

Bases: [`Gate`](qiskit.circuit.Gate "qiskit.circuit.gate.Gate")

XX+YY interaction gate.

A 2-qubit parameterized XX+YY interaction, also known as an XY gate. Its action is to induce a coherent rotation by some angle between $|01\rangle$ and $|10\rangle$.

**Circuit Symbol:**

```python
     ┌───────────────┐
q_0: ┤0              ├
     │  (XX+YY)(θ,β) │
q_1: ┤1              ├
     └───────────────┘
```

**Matrix Representation:**

$$
 \begin{align}\begin{aligned}\newcommand{\th}{\frac{\theta}{2}}\\\begin{split}R_{XX+YY}(\theta, \beta)\ q_0, q_1 =
  RZ_0(-\beta) \cdot \exp\left(-i \frac{\theta}{2} \frac{XX+YY}{2}\right) \cdot RZ_0(\beta) =
    \begin{pmatrix}
        1 & 0                     & 0                    & 0  \\
        0 & \cos\left(\th\right)             & -i\sin\left(\th\right)e^{-i\beta} & 0  \\
        0 & -i\sin\left(\th\right)e^{i\beta} & \cos\left(\th\right)            & 0  \\
        0 & 0                     & 0                    & 1
    \end{pmatrix}\end{split}\end{aligned}\end{align} 
$$

<Admonition title="Note" type="note">
  In Qiskit’s convention, higher qubit indices are more significant (little endian convention). In the above example we apply the gate on (q\_0, q\_1) which results in adding the (optional) phase defined by $beta$ on q\_0. Instead, if we apply it on (q\_1, q\_0), the phase is added on q\_1. If $beta$ is set to its default value of $0$, the gate is equivalent in big and little endian.

  ```python
       ┌───────────────┐
  q_0: ┤1              ├
       │  (XX+YY)(θ,β) │
  q_1: ┤0              ├
       └───────────────┘
  ```
</Admonition>

$$
 \begin{align}\begin{aligned}\newcommand{\th}{\frac{\theta}{2}}\\\begin{split}R_{XX+YY}(\theta, \beta)\ q_0, q_1 =
  RZ_1(-\beta) \cdot \exp\left(-i \frac{\theta}{2} \frac{XX+YY}{2}\right) \cdot RZ_1(\beta) =
    \begin{pmatrix}
        1 & 0                     & 0                    & 0  \\
        0 & \cos\left(\th\right)             & -i\sin\left(\th\right)e^{i\beta} & 0  \\
        0 & -i\sin\left(\th\right)e^{-i\beta} & \cos\left(\th\right)            & 0  \\
        0 & 0                     & 0                    & 1
    \end{pmatrix}\end{split}\end{aligned}\end{align} 
$$

Create new XX+YY gate.

**Parameters**

*   **theta** ([*ParameterExpression*](qiskit.circuit.ParameterExpression "qiskit.circuit.parameterexpression.ParameterExpression")  *|*[*float*](https://docs.python.org/3/library/functions.html#float "(in Python v3.12)")) – The rotation angle.
*   **beta** ([*ParameterExpression*](qiskit.circuit.ParameterExpression "qiskit.circuit.parameterexpression.ParameterExpression")  *|*[*float*](https://docs.python.org/3/library/functions.html#float "(in Python v3.12)")) – The phase angle.
*   **label** ([*str*](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.12)") *| None*) – The label of the gate.

## Attributes

<span id="qiskit.circuit.library.XXPlusYYGate.base_class" />

### base\_class

Get the base class of this instruction. This is guaranteed to be in the inheritance tree of `self`.

The “base class” of an instruction is the lowest class in its inheritance tree that the object should be considered entirely compatible with for \_all\_ circuit applications. This typically means that the subclass is defined purely to offer some sort of programmer convenience over the base class, and the base class is the “true” class for a behavioural perspective. In particular, you should *not* override [`base_class`](#qiskit.circuit.library.XXPlusYYGate.base_class "qiskit.circuit.library.XXPlusYYGate.base_class") if you are defining a custom version of an instruction that will be implemented differently by hardware, such as an alternative measurement strategy, or a version of a parametrised gate with a particular set of parameters for the purposes of distinguishing it in a [`Target`](qiskit.transpiler.Target "qiskit.transpiler.Target") from the full parametrised gate.

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

<span id="qiskit.circuit.library.XXPlusYYGate.condition" />

### condition

The classical condition on the instruction.

<span id="qiskit.circuit.library.XXPlusYYGate.condition_bits" />

### condition\_bits

Get Clbits in condition.

<span id="qiskit.circuit.library.XXPlusYYGate.decompositions" />

### decompositions

Get the decompositions of the instruction from the SessionEquivalenceLibrary.

<span id="qiskit.circuit.library.XXPlusYYGate.definition" />

### definition

Return definition in terms of other basic gates.

<span id="qiskit.circuit.library.XXPlusYYGate.duration" />

### duration

Get the duration.

<span id="qiskit.circuit.library.XXPlusYYGate.label" />

### label

Return instruction label

<span id="qiskit.circuit.library.XXPlusYYGate.mutable" />

### mutable

Is this instance is a mutable unique instance or not.

If this attribute is `False` the gate instance is a shared singleton and is not mutable.

<span id="qiskit.circuit.library.XXPlusYYGate.name" />

### name

Return the name.

<span id="qiskit.circuit.library.XXPlusYYGate.num_clbits" />

### num\_clbits

Return the number of clbits.

<span id="qiskit.circuit.library.XXPlusYYGate.num_qubits" />

### num\_qubits

Return the number of qubits.

<span id="qiskit.circuit.library.XXPlusYYGate.params" />

### params

return instruction params.

<span id="qiskit.circuit.library.XXPlusYYGate.unit" />

### unit

Get the time unit of duration.

## Methods

### inverse

<span id="qiskit.circuit.library.XXPlusYYGate.inverse" />

`inverse()`

Return inverse XX+YY gate (i.e. with the negative rotation angle and same phase angle).

### power

<span id="qiskit.circuit.library.XXPlusYYGate.power" />

`power(exponent)`

Raise gate to a power.

