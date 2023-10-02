---
title: BlockBasePadder
description: API reference for qiskit_ibm_provider.transpiler.passes.scheduling.BlockBasePadder
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit_ibm_provider.transpiler.passes.scheduling.BlockBasePadder
---

# BlockBasePadder

<span id="qiskit_ibm_provider.transpiler.passes.scheduling.BlockBasePadder" />

`BlockBasePadder`

The base class of padding pass.

This pass requires one of scheduling passes to be executed before itself. Since there are multiple scheduling strategies, the selection of scheduling pass is left in the hands of the pass manager designer. Once a scheduling analysis pass is run, `node_start_time` is generated in the `property_set`. This information is represented by a python dictionary of the expected instruction execution times keyed on the node instances. The padding pass expects all `DAGOpNode` in the circuit to be scheduled.

This base class doesn’t define any sequence to interleave, but it manages the location where the sequence is inserted, and provides a set of information necessary to construct the proper sequence. Thus, a subclass of this pass just needs to implement `_pad()` method, in which the subclass constructs a circuit block to insert. This mechanism removes lots of boilerplate logic to manage whole DAG circuits.

Note that padding pass subclasses should define interleaving sequences satisfying:

> *   Interleaved sequence does not change start time of other nodes
> *   Interleaved sequence should have total duration of the provided `time_interval`.

Any manipulation violating these constraints may prevent this base pass from correctly tracking the start time of each instruction, which may result in violation of hardware alignment constraints.

## Attributes

<span id="blockbasepadder-is-analysis-pass" />

### is\_analysis\_pass

Check if the pass is an analysis pass.

If the pass is an AnalysisPass, that means that the pass can analyze the DAG and write the results of that analysis in the property set. Modifications on the DAG are not allowed by this kind of pass.

<span id="blockbasepadder-is-transformation-pass" />

### is\_transformation\_pass

Check if the pass is a transformation pass.

If the pass is a TransformationPass, that means that the pass can manipulate the DAG, but cannot modify the property set (but it can be read).

## Methods

<span id="blockbasepadder-call" />

### \_\_call\_\_

<span id="qiskit_ibm_provider.transpiler.passes.scheduling.BlockBasePadder.__call__" />

`BlockBasePadder.__call__(circuit, property_set=None)`

Runs the pass on circuit.

**Parameters**

*   **circuit** (*QuantumCircuit*) – the dag on which the pass is run.
*   **property\_set** (*PropertySet or dict or None*) – input/output property set. An analysis pass might change the property set in-place.

**Returns**

**If on transformation pass, the resulting QuantumCircuit. If analysis**

pass, the input circuit.

**Return type**

QuantumCircuit

<span id="blockbasepadder-name" />

### name

<span id="qiskit_ibm_provider.transpiler.passes.scheduling.BlockBasePadder.name" />

`BlockBasePadder.name()`

Return the name of the pass.

<span id="blockbasepadder-run" />

### run

<span id="qiskit_ibm_provider.transpiler.passes.scheduling.BlockBasePadder.run" />

`BlockBasePadder.run(dag)`

Run the padding pass on `dag`.

**Parameters**

**dag** (`DAGCircuit`) – DAG to be checked.

**Returns**

DAG with idle time filled with instructions.

**Return type**

DAGCircuit

**Raises**

**TranspilerError** – When a particular node is not scheduled, likely some transform pass is inserted before this node is called.

