---
title: CUGate
description: API reference for qiskit.circuit.library.CUGate
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.CUGate
---

# CUGate

<span id="qiskit.circuit.library.CUGate" />

`qiskit.circuit.library.CUGate(theta, phi, lam, gamma, label=None, ctrl_state=None, *, duration=None, unit='dt', _base_label=None)`

Bases: [`ControlledGate`](qiskit.circuit.ControlledGate "qiskit.circuit.controlledgate.ControlledGate")

Controlled-U gate (4-parameter two-qubit gate).

This is a controlled version of the U gate (generic single qubit rotation), including a possible global phase $e^{i\gamma}$ of the U gate.

Can be applied to a [`QuantumCircuit`](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit") with the [`cu()`](qiskit.circuit.QuantumCircuit#cu "qiskit.circuit.QuantumCircuit.cu") method.

**Circuit symbol:**

```python
q_0: ──────■──────
     ┌─────┴──────┐
q_1: ┤ U(ϴ,φ,λ,γ) ├
     └────────────┘
```

**Matrix representation:**

$$
 \begin{align}\begin{aligned}\newcommand{\th}{\frac{\theta}{2}}\\\begin{split}CU(\theta, \phi, \lambda, \gamma)\ q_0, q_1 =
    I \otimes |0\rangle\langle 0| +
    e^{i\gamma} U(\theta,\phi,\lambda) \otimes |1\rangle\langle 1| =
    \begin{pmatrix}
        1 & 0                           & 0 & 0 \\
        0 & e^{i\gamma}\cos(\th)        & 0 & -e^{i(\gamma + \lambda)}\sin(\th) \\
        0 & 0                           & 1 & 0 \\
        0 & e^{i(\gamma+\phi)}\sin(\th) & 0 & e^{i(\gamma+\phi+\lambda)}\cos(\th)
    \end{pmatrix}\end{split}\end{aligned}\end{align} 
$$

<Admonition title="Note" type="note">
  In Qiskit’s convention, higher qubit indices are more significant (little endian convention). In many textbooks, controlled gates are presented with the assumption of more significant qubits as control, which in our case would be q\_1. Thus a textbook matrix for this gate will be:

  ```python
       ┌────────────┐
  q_0: ┤ U(ϴ,φ,λ,γ) ├
       └─────┬──────┘
  q_1: ──────■───────
  ```

  $$
  \begin{split}CU(\theta, \phi, \lambda, \gamma)\ q_1, q_0 =
      |0\rangle\langle 0| \otimes I +
      e^{i\gamma}|1\rangle\langle 1| \otimes U(\theta,\phi,\lambda) =
      \begin{pmatrix}
          1 & 0 & 0                             & 0 \\
          0 & 1 & 0                             & 0 \\
          0 & 0 & e^{i\gamma} \cos(\th)         & -e^{i(\gamma + \lambda)}\sin(\th) \\
          0 & 0 & e^{i(\gamma + \phi)}\sin(\th) & e^{i(\gamma + \phi+\lambda)}\cos(\th)
      \end{pmatrix}\end{split}
  $$
</Admonition>

Create new CU gate.

## Attributes

<span id="qiskit.circuit.library.CUGate.base_class" />

### base\_class

Get the base class of this instruction. This is guaranteed to be in the inheritance tree of `self`.

The “base class” of an instruction is the lowest class in its inheritance tree that the object should be considered entirely compatible with for \_all\_ circuit applications. This typically means that the subclass is defined purely to offer some sort of programmer convenience over the base class, and the base class is the “true” class for a behavioural perspective. In particular, you should *not* override [`base_class`](#qiskit.circuit.library.CUGate.base_class "qiskit.circuit.library.CUGate.base_class") if you are defining a custom version of an instruction that will be implemented differently by hardware, such as an alternative measurement strategy, or a version of a parametrised gate with a particular set of parameters for the purposes of distinguishing it in a [`Target`](qiskit.transpiler.Target "qiskit.transpiler.Target") from the full parametrised gate.

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

<span id="qiskit.circuit.library.CUGate.condition" />

### condition

The classical condition on the instruction.

<span id="qiskit.circuit.library.CUGate.condition_bits" />

### condition\_bits

Get Clbits in condition.

<span id="qiskit.circuit.library.CUGate.ctrl_state" />

### ctrl\_state

Return the control state of the gate as a decimal integer.

<span id="qiskit.circuit.library.CUGate.decompositions" />

### decompositions

Get the decompositions of the instruction from the SessionEquivalenceLibrary.

<span id="qiskit.circuit.library.CUGate.definition" />

### definition

Return definition in terms of other basic gates. If the gate has open controls, as determined from self.ctrl\_state, the returned definition is conjugated with X without changing the internal \_definition.

<span id="qiskit.circuit.library.CUGate.duration" />

### duration

Get the duration.

<span id="qiskit.circuit.library.CUGate.label" />

### label

Return instruction label

<span id="qiskit.circuit.library.CUGate.mutable" />

### mutable

Is this instance is a mutable unique instance or not.

If this attribute is `False` the gate instance is a shared singleton and is not mutable.

<span id="qiskit.circuit.library.CUGate.name" />

### name

Get name of gate. If the gate has open controls the gate name will become:

> \<original\_name\_o\<ctrl\_state>

where \<original\_name> is the gate name for the default case of closed control qubits and \<ctrl\_state> is the integer value of the control state for the gate.

<span id="qiskit.circuit.library.CUGate.num_clbits" />

### num\_clbits

Return the number of clbits.

<span id="qiskit.circuit.library.CUGate.num_ctrl_qubits" />

### num\_ctrl\_qubits

Get number of control qubits.

**Returns**

The number of control qubits for the gate.

**Return type**

[int](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")

<span id="qiskit.circuit.library.CUGate.num_qubits" />

### num\_qubits

Return the number of qubits.

<span id="qiskit.circuit.library.CUGate.params" />

### params

<span id="qiskit.circuit.library.CUGate.unit" />

### unit

Get the time unit of duration.

## Methods

### inverse

<span id="qiskit.circuit.library.CUGate.inverse" />

`inverse()`

Return inverted CU gate.

$CU(\theta,\phi,\lambda,\gamma)^{\dagger} = CU(-\theta,-\phi,-\lambda,-\gamma)$)

