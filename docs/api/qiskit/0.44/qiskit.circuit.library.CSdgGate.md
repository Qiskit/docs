---
title: CSdgGate
description: API reference for qiskit.circuit.library.CSdgGate
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.CSdgGate
---

# CSdgGate

<span id="qiskit.circuit.library.CSdgGate" />

`qiskit.circuit.library.CSdgGate(label=None, ctrl_state=None)`

Bases: [`ControlledGate`](qiskit.circuit.ControlledGate "qiskit.circuit.controlledgate.ControlledGate")

Controlled-S^dagger gate.

Can be applied to a [`QuantumCircuit`](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit") with the [`csdg()`](qiskit.circuit.QuantumCircuit#csdg "qiskit.circuit.QuantumCircuit.csdg") method.

**Circuit symbol:**

```python
q_0: ───■───
     ┌──┴──┐
q_1: ┤ Sdg ├
     └─────┘
```

**Matrix representation:**

$$
\begin{split}CS^\dagger \ q_0, q_1 =
I \otimes |0 \rangle\langle 0| + S^\dagger \otimes |1 \rangle\langle 1|  =
    \begin{pmatrix}
        1 & 0 & 0 & 0 \\
        0 & 1 & 0 & 0 \\
        0 & 0 & 1 & 0 \\
        0 & 0 & 0 & -i
    \end{pmatrix}\end{split}
$$

Create new CSdg gate.

## Attributes

<span id="qiskit.circuit.library.CSdgGate.condition_bits" />

### condition\_bits

Get Clbits in condition.

<span id="qiskit.circuit.library.CSdgGate.ctrl_state" />

### ctrl\_state

Return the control state of the gate as a decimal integer.

<span id="qiskit.circuit.library.CSdgGate.decompositions" />

### decompositions

Get the decompositions of the instruction from the SessionEquivalenceLibrary.

<span id="qiskit.circuit.library.CSdgGate.definition" />

### definition

Return definition in terms of other basic gates. If the gate has open controls, as determined from self.ctrl\_state, the returned definition is conjugated with X without changing the internal \_definition.

<span id="qiskit.circuit.library.CSdgGate.duration" />

### duration

Get the duration.

<span id="qiskit.circuit.library.CSdgGate.label" />

### label

Return instruction label

<span id="qiskit.circuit.library.CSdgGate.name" />

### name

Get name of gate. If the gate has open controls the gate name will become:

> \<original\_name\_o\<ctrl\_state>

where \<original\_name> is the gate name for the default case of closed control qubits and \<ctrl\_state> is the integer value of the control state for the gate.

<span id="qiskit.circuit.library.CSdgGate.num_clbits" />

### num\_clbits

Return the number of clbits.

<span id="qiskit.circuit.library.CSdgGate.num_ctrl_qubits" />

### num\_ctrl\_qubits

Get number of control qubits.

**Returns**

The number of control qubits for the gate.

**Return type**

[int](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")

<span id="qiskit.circuit.library.CSdgGate.num_qubits" />

### num\_qubits

Return the number of qubits.

<span id="qiskit.circuit.library.CSdgGate.params" />

### params

Get parameters from base\_gate.

**Returns**

List of gate parameters.

**Return type**

[list](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.12)")

**Raises**

[**CircuitError**](circuit#qiskit.circuit.CircuitError "qiskit.circuit.CircuitError") – Controlled gate does not define a base gate

<span id="qiskit.circuit.library.CSdgGate.unit" />

### unit

Get the time unit of duration.

## Methods

### inverse

<span id="qiskit.circuit.library.CSdgGate.inverse" />

`inverse()`

Return inverse of CSdgGate (CSGate).

### power

<span id="qiskit.circuit.library.CSdgGate.power" />

`power(exponent)`

Raise gate to a power.

