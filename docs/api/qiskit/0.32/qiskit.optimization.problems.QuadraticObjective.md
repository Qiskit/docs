---
title: QuadraticObjective
description: API reference for qiskit.optimization.problems.QuadraticObjective
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.optimization.problems.QuadraticObjective
---

# QuadraticObjective

<span id="qiskit.optimization.problems.QuadraticObjective" />

`QuadraticObjective(quadratic_program, constant=0.0, linear=None, quadratic=None, sense=<ObjSense.MINIMIZE: 1>)`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.18/qiskit/optimization/problems/quadratic_objective.py "view source code")

Bases: `qiskit.optimization.problems.quadratic_program_element.QuadraticProgramElement`

Representation of quadratic objective function of the form: constant + linear \* x + x \* quadratic \* x.

Constructs a quadratic objective function.

**Parameters**

*   **quadratic\_program** (`Any`) – The parent quadratic program.
*   **constant** (`float`) – The constant offset of the objective.
*   **linear** (`Union`\[`ndarray`, `spmatrix`, `List`\[`float`], `Dict`\[`Union`\[`int`, `str`], `float`], `None`]) – The coefficients of the linear part of the objective.
*   **quadratic** (`Union`\[`ndarray`, `spmatrix`, `List`\[`List`\[`float`]], `Dict`\[`Tuple`\[`Union`\[`int`, `str`], `Union`\[`int`, `str`]], `float`], `None`]) – The coefficients of the quadratic part of the objective.
*   **sense** (`ObjSense`) – The optimization sense of the objective.

## Methods

### evaluate

<span id="qiskit.optimization.problems.QuadraticObjective.evaluate" />

`QuadraticObjective.evaluate(x)`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.18/qiskit/optimization/problems/quadratic_objective.py "view source code")

Evaluate the quadratic objective for given variable values.

**Parameters**

**x** (`Union`\[`ndarray`, `List`, `Dict`\[`Union`\[`int`, `str`], `float`]]) – The values of the variables to be evaluated.

**Return type**

`float`

**Returns**

The value of the quadratic objective given the variable values.

### evaluate\_gradient

<span id="qiskit.optimization.problems.QuadraticObjective.evaluate_gradient" />

`QuadraticObjective.evaluate_gradient(x)`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.18/qiskit/optimization/problems/quadratic_objective.py "view source code")

Evaluate the gradient of the quadratic objective for given variable values.

**Parameters**

**x** (`Union`\[`ndarray`, `List`, `Dict`\[`Union`\[`int`, `str`], `float`]]) – The values of the variables to be evaluated.

**Return type**

`ndarray`

**Returns**

The value of the gradient of the quadratic objective given the variable values.

## Attributes

<span id="qiskit.optimization.problems.QuadraticObjective.constant" />

### constant

Returns the constant part of the objective function.

**Return type**

`float`

**Returns**

The constant part of the objective function.

<span id="qiskit.optimization.problems.QuadraticObjective.linear" />

### linear

Returns the linear part of the objective function.

**Return type**

`LinearExpression`

**Returns**

The linear part of the objective function.

<span id="qiskit.optimization.problems.QuadraticObjective.quadratic" />

### quadratic

Returns the quadratic part of the objective function.

**Return type**

`QuadraticExpression`

**Returns**

The quadratic part of the objective function.

<span id="qiskit.optimization.problems.QuadraticObjective.quadratic_program" />

### quadratic\_program

Returns the parent QuadraticProgram.

**Return type**

`Any`

**Returns**

The parent QuadraticProgram.

<span id="qiskit.optimization.problems.QuadraticObjective.sense" />

### sense

Returns the sense of the objective function.

**Return type**

`ObjSense`

**Returns**

The sense of the objective function.

