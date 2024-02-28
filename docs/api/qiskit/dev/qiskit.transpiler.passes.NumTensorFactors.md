---
title: NumTensorFactors
description: API reference for qiskit.transpiler.passes.NumTensorFactors
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.transpiler.passes.NumTensorFactors
---

# NumTensorFactors

<span id="qiskit.transpiler.passes.NumTensorFactors" />

`qiskit.transpiler.passes.NumTensorFactors(*args, **kwargs)` [GitHub](https://github.com/qiskit/qiskit/tree/main/qiskit/transpiler/passes/analysis/num_tensor_factors.py "view source code")

Bases: [`AnalysisPass`](qiskit.transpiler.AnalysisPass "qiskit.transpiler.basepasses.AnalysisPass")

Calculate the number of tensor factors of a DAG circuit.

The result is saved in `property_set['num_tensor_factors']` as an integer.

## Attributes

<span id="qiskit.transpiler.passes.NumTensorFactors.is_analysis_pass" />

### is\_analysis\_pass

Check if the pass is an analysis pass.

If the pass is an AnalysisPass, that means that the pass can analyze the DAG and write the results of that analysis in the property set. Modifications on the DAG are not allowed by this kind of pass.

<span id="qiskit.transpiler.passes.NumTensorFactors.is_transformation_pass" />

### is\_transformation\_pass

Check if the pass is a transformation pass.

If the pass is a TransformationPass, that means that the pass can manipulate the DAG, but cannot modify the property set (but it can be read).

## Methods

### execute

<span id="qiskit.transpiler.passes.NumTensorFactors.execute" />

`execute(passmanager_ir, state, callback=None)`

Execute optimization task for input Qiskit IR.

**Parameters**

*   **passmanager\_ir** (*PassManagerIR*) – Qiskit IR to optimize.
*   **state** ([*PassManagerState*](qiskit.passmanager.PassManagerState "qiskit.passmanager.PassManagerState")) – State associated with workflow execution by the pass manager itself.
*   **callback** (*Callable*) – A callback function which is caller per execution of optimization task.

**Returns**

Optimized Qiskit IR and state of the workflow.

**Return type**

[tuple](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.12)")\[PassManagerIR, [PassManagerState](qiskit.passmanager.PassManagerState "qiskit.passmanager.PassManagerState")]

### name

<span id="qiskit.transpiler.passes.NumTensorFactors.name" />

`name()`

Name of the pass.

**Return type**

[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.12)")

### run

<span id="qiskit.transpiler.passes.NumTensorFactors.run" />

`run(dag)`

Run the NumTensorFactors pass on dag.

### update\_status

<span id="qiskit.transpiler.passes.NumTensorFactors.update_status" />

`update_status(state, run_state)`

Update workflow status.

**Parameters**

*   **state** ([*PassManagerState*](qiskit.passmanager.PassManagerState "qiskit.passmanager.compilation_status.PassManagerState")) – Pass manager state to update.
*   **run\_state** (*RunState*) – Completion status of current task.

**Returns**

Updated pass manager state.

**Return type**

[*PassManagerState*](qiskit.passmanager.PassManagerState "qiskit.passmanager.compilation_status.PassManagerState")

