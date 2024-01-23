---
title: BarrierBeforeFinalMeasurements
description: API reference for qiskit.transpiler.passes.BarrierBeforeFinalMeasurements
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.transpiler.passes.BarrierBeforeFinalMeasurements
---

# BarrierBeforeFinalMeasurements

<span id="qiskit.transpiler.passes.BarrierBeforeFinalMeasurements" />

`qiskit.transpiler.passes.BarrierBeforeFinalMeasurements(*args, **kwargs)`

Bases: [`TransformationPass`](qiskit.transpiler.TransformationPass "qiskit.transpiler.basepasses.TransformationPass")

Add a barrier before final measurements.

This pass adds a barrier before the set of final measurements. Measurements are considered final if they are followed by no other operations (aside from other measurements or barriers.)

## Attributes

<span id="qiskit.transpiler.passes.BarrierBeforeFinalMeasurements.is_analysis_pass" />

### is\_analysis\_pass

Check if the pass is an analysis pass.

If the pass is an AnalysisPass, that means that the pass can analyze the DAG and write the results of that analysis in the property set. Modifications on the DAG are not allowed by this kind of pass.

<span id="qiskit.transpiler.passes.BarrierBeforeFinalMeasurements.is_transformation_pass" />

### is\_transformation\_pass

Check if the pass is a transformation pass.

If the pass is a TransformationPass, that means that the pass can manipulate the DAG, but cannot modify the property set (but it can be read).

## Methods

### execute

<span id="qiskit.transpiler.passes.BarrierBeforeFinalMeasurements.execute" />

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

<span id="qiskit.transpiler.passes.BarrierBeforeFinalMeasurements.name" />

`name()`

Name of the pass.

**Return type**

[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.12)")

### run

<span id="qiskit.transpiler.passes.BarrierBeforeFinalMeasurements.run" />

`run(dag)`

Run the BarrierBeforeFinalMeasurements pass on dag.

### update\_status

<span id="qiskit.transpiler.passes.BarrierBeforeFinalMeasurements.update_status" />

`update_status(state, run_state)`

Update workflow status.

**Parameters**

*   **state** ([*PassManagerState*](qiskit.passmanager.PassManagerState "qiskit.passmanager.compilation_status.PassManagerState")) – Pass manager state to update.
*   **run\_state** (*RunState*) – Completion status of current task.

**Returns**

Updated pass manager state.

**Return type**

[*PassManagerState*](qiskit.passmanager.PassManagerState "qiskit.passmanager.compilation_status.PassManagerState")

