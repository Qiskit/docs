---
title: ECRGate
description: API reference for qiskit.circuit.library.ECRGate
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.ECRGate
---

# ECRGate

<span id="qiskit.circuit.library.ECRGate" />

`qiskit.circuit.library.ECRGate(*args, _force_mutable=False, **kwargs)`

Bases: [`SingletonGate`](circuit_singleton#qiskit.circuit.singleton.SingletonGate "qiskit.circuit.singleton.SingletonGate")

An echoed cross-resonance gate.

This gate is maximally entangling and is equivalent to a CNOT up to single-qubit pre-rotations. The echoing procedure mitigates some unwanted terms (terms other than ZX) to cancel in an experiment. More specifically, this gate implements $\frac{1}{\sqrt{2}}(IX-XY)$.

Can be applied to a [`QuantumCircuit`](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit") with the [`ecr()`](qiskit.circuit.QuantumCircuit#ecr "qiskit.circuit.QuantumCircuit.ecr") method.

**Circuit Symbol:**

```python
     ┌─────────┐            ┌────────────┐┌────────┐┌─────────────┐
q_0: ┤0        ├       q_0: ┤0           ├┤ RX(pi) ├┤0            ├
     │   ECR   │   =        │  RZX(pi/4) │└────────┘│  RZX(-pi/4) │
q_1: ┤1        ├       q_1: ┤1           ├──────────┤1            ├
     └─────────┘            └────────────┘          └─────────────┘
```

**Matrix Representation:**

$$
\begin{split}ECR\ q_0, q_1 = \frac{1}{\sqrt{2}}
    \begin{pmatrix}
        0   & 1   &  0  & i \\
        1   & 0   &  -i & 0 \\
        0   & i   &  0  & 1 \\
        -i  & 0   &  1  & 0
    \end{pmatrix}\end{split}
$$

<Admonition title="Note" type="note">
  In Qiskit’s convention, higher qubit indices are more significant (little endian convention). In the above example we apply the gate on (q\_0, q\_1) which results in the $X \otimes Z$ tensor order. Instead, if we apply it on (q\_1, q\_0), the matrix will be $Z \otimes X$:

  ```python
       ┌─────────┐
  q_0: ┤1        ├
       │   ECR   │
  q_1: ┤0        ├
       └─────────┘
  ```

  $$
  \begin{split}ECR\ q_0, q_1 = \frac{1}{\sqrt{2}}
      \begin{pmatrix}
          0   & 0   &  1  & i \\
          0   & 0   &  i  & 1 \\
          1   & -i  &  0  & 0 \\
          -i  & 1   &  0  & 0
      \end{pmatrix}\end{split}
  $$
</Admonition>

Create new ECR gate.

## Attributes

<span id="qiskit.circuit.library.ECRGate.base_class" />

### base\_class

Get the base class of this instruction. This is guaranteed to be in the inheritance tree of `self`.

The “base class” of an instruction is the lowest class in its inheritance tree that the object should be considered entirely compatible with for \_all\_ circuit applications. This typically means that the subclass is defined purely to offer some sort of programmer convenience over the base class, and the base class is the “true” class for a behavioural perspective. In particular, you should *not* override [`base_class`](#qiskit.circuit.library.ECRGate.base_class "qiskit.circuit.library.ECRGate.base_class") if you are defining a custom version of an instruction that will be implemented differently by hardware, such as an alternative measurement strategy, or a version of a parametrised gate with a particular set of parameters for the purposes of distinguishing it in a [`Target`](qiskit.transpiler.Target "qiskit.transpiler.Target") from the full parametrised gate.

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

<span id="qiskit.circuit.library.ECRGate.condition" />

### condition

The classical condition on the instruction.

<span id="qiskit.circuit.library.ECRGate.condition_bits" />

### condition\_bits

Get Clbits in condition.

<span id="qiskit.circuit.library.ECRGate.decompositions" />

### decompositions

Get the decompositions of the instruction from the SessionEquivalenceLibrary.

<span id="qiskit.circuit.library.ECRGate.definition" />

### definition

Return definition in terms of other basic gates.

<span id="qiskit.circuit.library.ECRGate.duration" />

### duration

Get the duration.

<span id="qiskit.circuit.library.ECRGate.label" />

### label

Return instruction label

<span id="qiskit.circuit.library.ECRGate.mutable" />

### mutable

Is this instance is a mutable unique instance or not.

If this attribute is `False` the gate instance is a shared singleton and is not mutable.

<span id="qiskit.circuit.library.ECRGate.name" />

### name

Return the name.

<span id="qiskit.circuit.library.ECRGate.num_clbits" />

### num\_clbits

Return the number of clbits.

<span id="qiskit.circuit.library.ECRGate.num_qubits" />

### num\_qubits

Return the number of qubits.

<span id="qiskit.circuit.library.ECRGate.params" />

### params

return instruction params.

<span id="qiskit.circuit.library.ECRGate.unit" />

### unit

Get the time unit of duration.

## Methods

### inverse

<span id="qiskit.circuit.library.ECRGate.inverse" />

`inverse()`

Return inverse ECR gate (itself).

