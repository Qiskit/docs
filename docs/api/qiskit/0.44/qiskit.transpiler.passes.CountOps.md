---
title: CountOps
description: API reference for qiskit.transpiler.passes.CountOps
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.transpiler.passes.CountOps
---

# CountOps

<span id="qiskit.transpiler.passes.CountOps" />

`qiskit.transpiler.passes.CountOps(*args, **kwargs)`

Bases: [`AnalysisPass`](qiskit.transpiler.AnalysisPass "qiskit.transpiler.basepasses.AnalysisPass")

Count the operations in a DAG circuit.

The result is saved in `property_set['count_ops']` as an integer.

## Attributes

<span id="qiskit.transpiler.passes.CountOps.is_analysis_pass" />

### is\_analysis\_pass

Check if the pass is an analysis pass.

If the pass is an AnalysisPass, that means that the pass can analyze the DAG and write the results of that analysis in the property set. Modifications on the DAG are not allowed by this kind of pass.

<span id="qiskit.transpiler.passes.CountOps.is_transformation_pass" />

### is\_transformation\_pass

Check if the pass is a transformation pass.

If the pass is a TransformationPass, that means that the pass can manipulate the DAG, but cannot modify the property set (but it can be read).

## Methods

### name

<span id="qiskit.transpiler.passes.CountOps.name" />

`name()`

Return the name of the pass.

### run

<span id="qiskit.transpiler.passes.CountOps.run" />

`run(dag)`

Run the CountOps pass on dag.

