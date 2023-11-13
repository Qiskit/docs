---
title: PadDelay
description: API reference for qiskit.transpiler.passes.PadDelay
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.transpiler.passes.PadDelay
---

# PadDelay

<span id="qiskit.transpiler.passes.PadDelay" />

`qiskit.transpiler.passes.PadDelay(*args, **kwargs)`

Bases: `BasePadding`

Padding idle time with Delay instructions.

Consecutive delays will be merged in the output of this pass.

```python
durations = InstructionDurations([("x", None, 160), ("cx", None, 800)])

qc = QuantumCircuit(2)
qc.delay(100, 0)
qc.x(1)
qc.cx(0, 1)
```

The ASAP-scheduled circuit output may become

```python
     ┌────────────────┐
q_0: ┤ Delay(160[dt]) ├──■──
     └─────┬───┬──────┘┌─┴─┐
q_1: ──────┤ X ├───────┤ X ├
           └───┘       └───┘
```

Note that the additional idle time of 60dt on the `q_0` wire coming from the duration difference between `Delay` of 100dt (`q_0`) and `XGate` of 160 dt (`q_1`) is absorbed in the delay instruction on the `q_0` wire, i.e. in total 160 dt.

See `BasePadding` pass for details.

Create new padding delay pass.

**Parameters**

*   **fill\_very\_end** – Set `True` to fill the end of circuit with delay.
*   **target** – The [`Target`](qiskit.transpiler.Target "qiskit.transpiler.Target") representing the target backend. If it supplied and it does not support delay instruction on a qubit, padding passes do not pad any idle time of the qubit.

## Attributes

<span id="qiskit.transpiler.passes.PadDelay.is_analysis_pass" />

### is\_analysis\_pass

Check if the pass is an analysis pass.

If the pass is an AnalysisPass, that means that the pass can analyze the DAG and write the results of that analysis in the property set. Modifications on the DAG are not allowed by this kind of pass.

<span id="qiskit.transpiler.passes.PadDelay.is_transformation_pass" />

### is\_transformation\_pass

Check if the pass is a transformation pass.

If the pass is a TransformationPass, that means that the pass can manipulate the DAG, but cannot modify the property set (but it can be read).

## Methods

### execute

<span id="qiskit.transpiler.passes.PadDelay.execute" />

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

<span id="qiskit.transpiler.passes.PadDelay.name" />

`name()`

Name of the pass.

**Return type**

[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.12)")

### run

<span id="qiskit.transpiler.passes.PadDelay.run" />

`run(dag)`

Run the padding pass on `dag`.

**Parameters**

**dag** ([*DAGCircuit*](qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.dagcircuit.DAGCircuit")) – DAG to be checked.

**Returns**

DAG with idle time filled with instructions.

**Return type**

[DAGCircuit](qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit")

**Raises**

[**TranspilerError**](transpiler#qiskit.transpiler.TranspilerError "qiskit.transpiler.TranspilerError") – When a particular node is not scheduled, likely some transform pass is inserted before this node is called.

### update\_status

<span id="qiskit.transpiler.passes.PadDelay.update_status" />

`update_status(state, run_state)`

Update workflow status.

**Parameters**

*   **state** ([*PassManagerState*](qiskit.passmanager.PassManagerState "qiskit.passmanager.compilation_status.PassManagerState")) – Pass manager state to update.
*   **run\_state** (*RunState*) – Completion status of current task.

**Returns**

Updated pass manager state.

**Return type**

[*PassManagerState*](qiskit.passmanager.PassManagerState "qiskit.passmanager.compilation_status.PassManagerState")

