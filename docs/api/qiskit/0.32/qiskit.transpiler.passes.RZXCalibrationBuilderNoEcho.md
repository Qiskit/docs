---
title: RZXCalibrationBuilderNoEcho
description: API reference for qiskit.transpiler.passes.RZXCalibrationBuilderNoEcho
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.transpiler.passes.RZXCalibrationBuilderNoEcho
---

# RZXCalibrationBuilderNoEcho

<span id="qiskit.transpiler.passes.RZXCalibrationBuilderNoEcho" />

`RZXCalibrationBuilderNoEcho(backend)`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.18/qiskit/transpiler/passes/scheduling/calibration_creators.py "view source code")

Bases: `qiskit.transpiler.passes.scheduling.calibration_creators.RZXCalibrationBuilder`

Creates calibrations for RZXGate(theta) by stretching and compressing Gaussian square pulses in the CX gate.

The `RZXCalibrationBuilderNoEcho` is a variation of the [`RZXCalibrationBuilder`](qiskit.transpiler.passes.RZXCalibrationBuilder "qiskit.transpiler.passes.RZXCalibrationBuilder") pass that creates calibrations for the cross-resonance pulses without inserting the echo pulses in the pulse schedule. This enables exposing the echo in the cross-resonance sequence as gates so that the transpiler can simplify them. The `RZXCalibrationBuilderNoEcho` only supports the hardware-native direction of the CX gate.

Initializes a RZXGate calibration builder.

**Parameters**

**backend** (*\<module 'qiskit.providers.basebackend' from '/home/computertreker/git/qiskit/qiskit/.tox/docs/lib/python3.7/site-packages/qiskit/providers/basebackend.py'>*) – Backend for which to construct the gates.

**Raises**

**QiskitError** – if open pulse is not supported by the backend.

## Methods

### get\_calibration

<span id="qiskit.transpiler.passes.RZXCalibrationBuilderNoEcho.get_calibration" />

`RZXCalibrationBuilderNoEcho.get_calibration(params, qubits)`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.18/qiskit/transpiler/passes/scheduling/calibration_creators.py "view source code")

Builds the calibration schedule for the RZXGate(theta) without echos.

**Parameters**

*   **params** (`List`) – Parameters of the RZXGate(theta). I.e. params\[0] is theta.
*   **qubits** (`List`) – List of qubits for which to get the schedules. The first qubit is the control and the second is the target.

**Returns**

The calibration schedule for the RZXGate(theta).

**Return type**

schedule

**Raises**

**QiskitError** – If the control and target qubits cannot be identified, or the backend does not support a cx gate between the qubits, or the backend does not natively support the specified direction of the cx.

### name

<span id="qiskit.transpiler.passes.RZXCalibrationBuilderNoEcho.name" />

`RZXCalibrationBuilderNoEcho.name()`

Return the name of the pass.

### rescale\_cr\_inst

<span id="qiskit.transpiler.passes.RZXCalibrationBuilderNoEcho.rescale_cr_inst" />

`static RZXCalibrationBuilderNoEcho.rescale_cr_inst(instruction, theta, sample_mult=16)`

**Parameters**

*   **instruction** (`Play`) – The instruction from which to create a new shortened or lengthened pulse.
*   **theta** (`float`) – desired angle, pi/2 is assumed to be the angle that the pulse in the given play instruction implements.
*   **sample\_mult** (`int`) – All pulses must be a multiple of sample\_mult.

**Returns**

**The play instruction with the stretched compressed**

GaussianSquare pulse.

**Return type**

[qiskit.pulse.Play](qiskit.pulse.Play "qiskit.pulse.Play")

**Raises**

**QiskitError** – if the pulses are not GaussianSquare.

### run

<span id="qiskit.transpiler.passes.RZXCalibrationBuilderNoEcho.run" />

`RZXCalibrationBuilderNoEcho.run(dag)`

Run the calibration adder pass on dag.

**Parameters**

**dag** ([*DAGCircuit*](qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit")) – DAG to schedule.

**Returns**

A DAG with calibrations added to it.

**Return type**

[DAGCircuit](qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit")

### supported

<span id="qiskit.transpiler.passes.RZXCalibrationBuilderNoEcho.supported" />

`RZXCalibrationBuilderNoEcho.supported(node_op)`

**Parameters**

**node\_op** (`DAGNode`) – The node from the dag dep.

**Returns**

True if the node is a RZXGate.

**Return type**

match

## Attributes

<span id="qiskit.transpiler.passes.RZXCalibrationBuilderNoEcho.is_analysis_pass" />

### is\_analysis\_pass

Check if the pass is an analysis pass.

If the pass is an AnalysisPass, that means that the pass can analyze the DAG and write the results of that analysis in the property set. Modifications on the DAG are not allowed by this kind of pass.

<span id="qiskit.transpiler.passes.RZXCalibrationBuilderNoEcho.is_transformation_pass" />

### is\_transformation\_pass

Check if the pass is a transformation pass.

If the pass is a TransformationPass, that means that the pass can manipulate the DAG, but cannot modify the property set (but it can be read).

