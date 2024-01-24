---
title: NormalizeRXAngle
description: API reference for qiskit.transpiler.passes.NormalizeRXAngle
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.transpiler.passes.NormalizeRXAngle
---

# NormalizeRXAngle

<span id="qiskit.transpiler.passes.NormalizeRXAngle" />

`qiskit.transpiler.passes.NormalizeRXAngle(*args, **kwargs)`

Bases: [`TransformationPass`](qiskit.transpiler.TransformationPass "qiskit.transpiler.basepasses.TransformationPass")

Normalize theta parameter of RXGate instruction.

The parameter normalization is performed with following steps.

1\) Wrap RX Gate theta into \[0, pi]. When theta is negative value, the gate is decomposed into the following sequence.

```python
   ┌───────┐┌─────────┐┌────────┐
q: ┤ Rz(π) ├┤ Rx(|θ|) ├┤ Rz(-π) ├
   └───────┘└─────────┘└────────┘
```

2.  If the operation is supported by target, convert RX(pi/2) to SX, and RX(pi) to X.
3.  Quantize theta value according to the user-specified resolution.

This will help reduce the size of calibration data sent over the wire, and allow us to exploit the more accurate, hardware-calibrated pulses. Note that pulse calibration might be attached per each rotation angle.

NormalizeRXAngle initializer.

**Parameters**

*   **target** ([*Target*](qiskit.transpiler.Target "qiskit.transpiler.Target")) – The [`Target`](qiskit.transpiler.Target "qiskit.transpiler.Target") representing the target backend. If the target contains SX and X calibrations, this pass will replace the corresponding RX gates with SX and X gates.
*   **resolution\_in\_radian** ([*float*](https://docs.python.org/3/library/functions.html#float "(in Python v3.12)")) – Resolution for RX rotation angle quantization. If set to zero, this pass won’t modify the rotation angles in the given DAG. (=Provides aribitary-angle RX)

## Attributes

<span id="qiskit.transpiler.passes.NormalizeRXAngle.is_analysis_pass" />

### is\_analysis\_pass

Check if the pass is an analysis pass.

If the pass is an AnalysisPass, that means that the pass can analyze the DAG and write the results of that analysis in the property set. Modifications on the DAG are not allowed by this kind of pass.

<span id="qiskit.transpiler.passes.NormalizeRXAngle.is_transformation_pass" />

### is\_transformation\_pass

Check if the pass is a transformation pass.

If the pass is a TransformationPass, that means that the pass can manipulate the DAG, but cannot modify the property set (but it can be read).

## Methods

### execute

<span id="qiskit.transpiler.passes.NormalizeRXAngle.execute" />

`execute(passmanager_ir, state, callback=None)`

Execute optimization task for input Qiskit IR.

**Parameters**

*   **passmanager\_ir** ([*Any*](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.12)")) – Qiskit IR to optimize.
*   **state** ([*PassManagerState*](qiskit.passmanager.PassManagerState "qiskit.passmanager.compilation_status.PassManagerState")) – State associated with workflow execution by the pass manager itself.
*   **callback** ([*Callable*](https://docs.python.org/3/library/collections.abc.html#collections.abc.Callable "(in Python v3.12)") *| None*) – A callback function which is caller per execution of optimization task.

**Returns**

Optimized Qiskit IR and state of the workflow.

**Return type**

[tuple](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.12)")\[[*Any*](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.12)"), [qiskit.passmanager.compilation\_status.PassManagerState](qiskit.passmanager.PassManagerState "qiskit.passmanager.compilation_status.PassManagerState")]

### name

<span id="qiskit.transpiler.passes.NormalizeRXAngle.name" />

`name()`

Name of the pass.

**Return type**

[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.12)")

### quantize\_angles

<span id="qiskit.transpiler.passes.NormalizeRXAngle.quantize_angles" />

`quantize_angles(qubit, original_angle)`

Quantize the RX rotation angles by assigning the same value for the angles that differ within a resolution provided by the user.

**Parameters**

*   **qubit** ([*Qubit*](qiskit.circuit.Qubit "qiskit.circuit.Qubit")) – This will be the dict key to access the list of quantized rotation angles.
*   **original\_angle** ([*float*](https://docs.python.org/3/library/functions.html#float "(in Python v3.12)")) – Original rotation angle, before quantization.

**Returns**

Quantized angle.

**Return type**

[float](https://docs.python.org/3/library/functions.html#float "(in Python v3.12)")

### run

<span id="qiskit.transpiler.passes.NormalizeRXAngle.run" />

`run(dag)`

Run the NormalizeRXAngle pass on `dag`.

**Parameters**

**dag** ([*DAGCircuit*](qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit")) – The DAG to be optimized.

**Returns**

A DAG with RX gate calibration.

**Return type**

[DAGCircuit](qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit")

### update\_status

<span id="qiskit.transpiler.passes.NormalizeRXAngle.update_status" />

`update_status(state, run_state)`

Update workflow status.

**Parameters**

*   **state** ([*PassManagerState*](qiskit.passmanager.PassManagerState "qiskit.passmanager.compilation_status.PassManagerState")) – Pass manager state to update.
*   **run\_state** (*RunState*) – Completion status of current task.

**Returns**

Updated pass manager state.

**Return type**

[*PassManagerState*](qiskit.passmanager.PassManagerState "qiskit.passmanager.compilation_status.PassManagerState")

