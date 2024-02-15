---
title: FlowControllerLinear
description: API reference for qiskit.passmanager.FlowControllerLinear
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.passmanager.FlowControllerLinear
---

# FlowControllerLinear

<span id="qiskit.passmanager.FlowControllerLinear" />

`qiskit.passmanager.FlowControllerLinear(tasks=(), *, options=None)`[GitHub](https://github.com/qiskit/qiskit/tree/stable/1.0/qiskit/passmanager/flow_controllers.py "view source code")

Bases: [`BaseController`](qiskit.passmanager.BaseController "qiskit.passmanager.base_tasks.BaseController")

A standard flow controller that runs tasks one after the other.

Create new flow controller.

**Parameters**

**options** ([*dict*](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.12)")*\[*[*str*](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.12)")*, Any] | None*) – Option for this flow controller.

## Attributes

<span id="qiskit.passmanager.FlowControllerLinear.passes" />

### passes

Alias of tasks for backward compatibility.

## Methods

### execute

<span id="qiskit.passmanager.FlowControllerLinear.execute" />

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

### iter\_tasks

<span id="qiskit.passmanager.FlowControllerLinear.iter_tasks" />

`iter_tasks(state)`

A custom logic to choose a next task to run.

Controller subclass can consume the state to build a proper task pipeline. The updated state after a task execution will be fed back in as the “return” value of any `yield` statements. This indicates the order of task execution is only determined at running time. This method is not allowed to mutate the given state object.

**Parameters**

*   **state** ([*PassManagerState*](qiskit.passmanager.PassManagerState "qiskit.passmanager.PassManagerState")) – The state of the passmanager workflow at the beginning of this flow controller’s execution.
*   **state** – the state of pass manager after the execution of the last task that was yielded. The generator does not need to inspect this if it is irrelevant to its logic, nor update it.

**Yields**

*Task* – Next task to run.

**Return type**

Generator\[Task, [PassManagerState](qiskit.passmanager.PassManagerState "qiskit.passmanager.PassManagerState"), None]

