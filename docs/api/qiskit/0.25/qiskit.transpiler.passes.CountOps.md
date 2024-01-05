---
title: CountOps
description: API reference for qiskit.transpiler.passes.CountOps
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.transpiler.passes.CountOps
---

# qiskit.transpiler.passes.CountOps

<span id="qiskit.transpiler.passes.CountOps" />

`CountOps(*args, **kwargs)`

Count the operations in a DAG circuit.

The result is saved in `property_set['count_ops']` as an integer.

### \_\_init\_\_

<span id="qiskit.transpiler.passes.CountOps.__init__" />

`__init__()`

Initialize self. See help(type(self)) for accurate signature.

## Methods

## Attributes

### is\_analysis\_pass

<span id="qiskit.transpiler.passes.CountOps.is_analysis_pass" />

`property is_analysis_pass`

Check if the pass is an analysis pass.

If the pass is an AnalysisPass, that means that the pass can analyze the DAG and write the results of that analysis in the property set. Modifications on the DAG are not allowed by this kind of pass.

### is\_transformation\_pass

<span id="qiskit.transpiler.passes.CountOps.is_transformation_pass" />

`property is_transformation_pass`

Check if the pass is a transformation pass.

If the pass is a TransformationPass, that means that the pass can manipulate the DAG, but cannot modify the property set (but it can be read).

### name

<span id="qiskit.transpiler.passes.CountOps.name" />

`name()`

Return the name of the pass.

### run

<span id="qiskit.transpiler.passes.CountOps.run" />

`run(dag)`

Run the CountOps pass on dag.

