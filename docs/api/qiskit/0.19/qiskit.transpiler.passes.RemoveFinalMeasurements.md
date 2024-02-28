---
title: RemoveFinalMeasurements
description: API reference for qiskit.transpiler.passes.RemoveFinalMeasurements
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.transpiler.passes.RemoveFinalMeasurements
---

# RemoveFinalMeasurements

<span id="qiskit.transpiler.passes.RemoveFinalMeasurements" />

`RemoveFinalMeasurements(*args, **kwargs)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.14/qiskit/transpiler/passes/utils/remove_final_measurements.py "view source code")

Remove final measurements and barriers at the end of a circuit.

This pass removes final barriers and final measurements, as well as the ClassicalRegisters they are connected to if the ClassicalRegister is unused. Measurements and barriers are considered final if they are followed by no other operations (aside from other measurements or barriers.)

## Attributes

### is\_analysis\_pass

Check if the pass is an analysis pass.

If the pass is an AnalysisPass, that means that the pass can analyze the DAG and write the results of that analysis in the property set. Modifications on the DAG are not allowed by this kind of pass.

### is\_transformation\_pass

Check if the pass is a transformation pass.

If the pass is a TransformationPass, that means that the pass can manipulate the DAG, but cannot modify the property set (but it can be read).

## Methods

### name

<span id="qiskit.transpiler.passes.RemoveFinalMeasurements.name" />

`RemoveFinalMeasurements.name()`

Return the name of the pass.

### run

<span id="qiskit.transpiler.passes.RemoveFinalMeasurements.run" />

`RemoveFinalMeasurements.run(dag)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.14/qiskit/transpiler/passes/utils/remove_final_measurements.py "view source code")

Run the RemoveFinalMeasurements pass on dag.

**Parameters**

**dag** ([*DAGCircuit*](qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit")) – the DAG to be optimized.

**Returns**

the optimized DAG.

**Return type**

[DAGCircuit](qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit")

