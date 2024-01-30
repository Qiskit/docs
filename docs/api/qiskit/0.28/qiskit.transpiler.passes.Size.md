---
title: Size
description: API reference for qiskit.transpiler.passes.Size
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.transpiler.passes.Size
---

# qiskit.transpiler.passes.Size

<span id="qiskit.transpiler.passes.Size" />

`Size(*args, **kwargs)`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.18/qiskit/transpiler/passes/analysis/size.py "view source code")

Calculate the size of a DAG circuit.

The result is saved in `property_set['size']` as an integer.

### \_\_init\_\_

<span id="qiskit.transpiler.passes.Size.__init__" />

`__init__()`

Initialize self. See help(type(self)) for accurate signature.

## Methods

|                                                                                                  |                              |
| ------------------------------------------------------------------------------------------------ | ---------------------------- |
| [`__init__`](#qiskit.transpiler.passes.Size.__init__ "qiskit.transpiler.passes.Size.__init__")() | Initialize self.             |
| [`name`](#qiskit.transpiler.passes.Size.name "qiskit.transpiler.passes.Size.name")()             | Return the name of the pass. |
| [`run`](#qiskit.transpiler.passes.Size.run "qiskit.transpiler.passes.Size.run")(dag)             | Run the Size pass on dag.    |

## Attributes

|                                                                                                                                          |                                             |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| [`is_analysis_pass`](#qiskit.transpiler.passes.Size.is_analysis_pass "qiskit.transpiler.passes.Size.is_analysis_pass")                   | Check if the pass is an analysis pass.      |
| [`is_transformation_pass`](#qiskit.transpiler.passes.Size.is_transformation_pass "qiskit.transpiler.passes.Size.is_transformation_pass") | Check if the pass is a transformation pass. |

### is\_analysis\_pass

<span id="qiskit.transpiler.passes.Size.is_analysis_pass" />

`property is_analysis_pass`

Check if the pass is an analysis pass.

If the pass is an AnalysisPass, that means that the pass can analyze the DAG and write the results of that analysis in the property set. Modifications on the DAG are not allowed by this kind of pass.

### is\_transformation\_pass

<span id="qiskit.transpiler.passes.Size.is_transformation_pass" />

`property is_transformation_pass`

Check if the pass is a transformation pass.

If the pass is a TransformationPass, that means that the pass can manipulate the DAG, but cannot modify the property set (but it can be read).

### name

<span id="qiskit.transpiler.passes.Size.name" />

`name()`

Return the name of the pass.

### run

<span id="qiskit.transpiler.passes.Size.run" />

`run(dag)`

Run the Size pass on dag.

