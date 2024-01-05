---
title: CXDirection
description: API reference for qiskit.transpiler.passes.CXDirection
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.transpiler.passes.CXDirection
---

# qiskit.transpiler.passes.CXDirection

<span id="qiskit.transpiler.passes.CXDirection" />

`CXDirection(*args, **kwargs)`

Deprecated: use [`qiskit.transpiler.passes.GateDirection`](qiskit.transpiler.passes.GateDirection "qiskit.transpiler.passes.GateDirection") pass instead.

GateDirection pass.

**Parameters**

**coupling\_map** ([*CouplingMap*](qiskit.transpiler.CouplingMap "qiskit.transpiler.CouplingMap")) – Directed graph represented a coupling map.

### \_\_init\_\_

<span id="qiskit.transpiler.passes.CXDirection.__init__" />

`__init__(coupling_map)`

GateDirection pass.

**Parameters**

**coupling\_map** ([*CouplingMap*](qiskit.transpiler.CouplingMap "qiskit.transpiler.CouplingMap")) – Directed graph represented a coupling map.

## Methods

## Attributes

### is\_analysis\_pass

<span id="qiskit.transpiler.passes.CXDirection.is_analysis_pass" />

`property is_analysis_pass`

Check if the pass is an analysis pass.

If the pass is an AnalysisPass, that means that the pass can analyze the DAG and write the results of that analysis in the property set. Modifications on the DAG are not allowed by this kind of pass.

### is\_transformation\_pass

<span id="qiskit.transpiler.passes.CXDirection.is_transformation_pass" />

`property is_transformation_pass`

Check if the pass is a transformation pass.

If the pass is a TransformationPass, that means that the pass can manipulate the DAG, but cannot modify the property set (but it can be read).

### name

<span id="qiskit.transpiler.passes.CXDirection.name" />

`name()`

Return the name of the pass.

### run

<span id="qiskit.transpiler.passes.CXDirection.run" />

`run(dag)`

Run the GateDirection pass on dag.

Flips the cx nodes to match the directed coupling map. Modifies the input dag.

**Parameters**

**dag** ([*DAGCircuit*](qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit")) – DAG to map.

**Returns**

The rearranged dag for the coupling map

**Return type**

[DAGCircuit](qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit")

**Raises**

[**TranspilerError**](qiskit.transpiler.TranspilerError "qiskit.transpiler.TranspilerError") – If the circuit cannot be mapped just by flipping the cx nodes.

