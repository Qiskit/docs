---
title: iSwapGate
description: API reference for qiskit.circuit.library.iSwapGate
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.iSwapGate
---

# iSwapGate

<span id="qiskit.circuit.library.iSwapGate" />

`qiskit.circuit.library.iSwapGate(*args, _force_mutable=False, **kwargs)`

Bases: [`SingletonGate`](circuit_singleton#qiskit.circuit.singleton.SingletonGate "qiskit.circuit.singleton.SingletonGate")

iSWAP gate.

A 2-qubit XX+YY interaction. This is a Clifford and symmetric gate. Its action is to swap two qubit states and phase the $|01\rangle$ and $|10\rangle$ amplitudes by i.

Can be applied to a [`QuantumCircuit`](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit") with the [`iswap()`](qiskit.circuit.QuantumCircuit#iswap "qiskit.circuit.QuantumCircuit.iswap") method.

**Circuit Symbol:**

```python
q_0: ─⨂─
      │
q_1: ─⨂─
```

**Reference Implementation:**

```python
     ┌───┐┌───┐     ┌───┐
q_0: ┤ S ├┤ H ├──■──┤ X ├─────
     ├───┤└───┘┌─┴─┐└─┬─┘┌───┐
q_1: ┤ S ├─────┤ X ├──■──┤ H ├
     └───┘     └───┘     └───┘
```

**Matrix Representation:**

$$
\begin{split}iSWAP = R_{XX+YY}\left(-\frac{\pi}{2}\right)
  = \exp\left(i \frac{\pi}{4} \left(X{\otimes}X+Y{\otimes}Y\right)\right) =
    \begin{pmatrix}
        1 & 0 & 0 & 0 \\
        0 & 0 & i & 0 \\
        0 & i & 0 & 0 \\
        0 & 0 & 0 & 1
    \end{pmatrix}\end{split}
$$

This gate is equivalent to a SWAP up to a diagonal.

$$
\begin{split}iSWAP =
   \begin{pmatrix}
       1 & 0 & 0 & 0 \\
       0 & 0 & 1 & 0 \\
       0 & 1 & 0 & 0 \\
       0 & 0 & 0 & 1
   \end{pmatrix}
.  \begin{pmatrix}
       1 & 0 & 0 & 0 \\
       0 & i & 0 & 0 \\
       0 & 0 & i & 0 \\
       0 & 0 & 0 & 1
   \end{pmatrix}\end{split}
$$

Create new iSwap gate.

## Attributes

<span id="qiskit.circuit.library.iSwapGate.base_class" />

### base\_class

Get the base class of this instruction. This is guaranteed to be in the inheritance tree of `self`.

The “base class” of an instruction is the lowest class in its inheritance tree that the object should be considered entirely compatible with for \_all\_ circuit applications. This typically means that the subclass is defined purely to offer some sort of programmer convenience over the base class, and the base class is the “true” class for a behavioural perspective. In particular, you should *not* override [`base_class`](#qiskit.circuit.library.iSwapGate.base_class "qiskit.circuit.library.iSwapGate.base_class") if you are defining a custom version of an instruction that will be implemented differently by hardware, such as an alternative measurement strategy, or a version of a parametrised gate with a particular set of parameters for the purposes of distinguishing it in a [`Target`](qiskit.transpiler.Target "qiskit.transpiler.Target") from the full parametrised gate.

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

<span id="qiskit.circuit.library.iSwapGate.condition" />

### condition

The classical condition on the instruction.

<span id="qiskit.circuit.library.iSwapGate.condition_bits" />

### condition\_bits

Get Clbits in condition.

<span id="qiskit.circuit.library.iSwapGate.decompositions" />

### decompositions

Get the decompositions of the instruction from the SessionEquivalenceLibrary.

<span id="qiskit.circuit.library.iSwapGate.definition" />

### definition

Return definition in terms of other basic gates.

<span id="qiskit.circuit.library.iSwapGate.duration" />

### duration

Get the duration.

<span id="qiskit.circuit.library.iSwapGate.label" />

### label

Return instruction label

<span id="qiskit.circuit.library.iSwapGate.mutable" />

### mutable

Is this instance is a mutable unique instance or not.

If this attribute is `False` the gate instance is a shared singleton and is not mutable.

<span id="qiskit.circuit.library.iSwapGate.name" />

### name

Return the name.

<span id="qiskit.circuit.library.iSwapGate.num_clbits" />

### num\_clbits

Return the number of clbits.

<span id="qiskit.circuit.library.iSwapGate.num_qubits" />

### num\_qubits

Return the number of qubits.

<span id="qiskit.circuit.library.iSwapGate.params" />

### params

return instruction params.

<span id="qiskit.circuit.library.iSwapGate.unit" />

### unit

Get the time unit of duration.

## Methods

### power

<span id="qiskit.circuit.library.iSwapGate.power" />

`power(exponent)`

Raise gate to a power.

