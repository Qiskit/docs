---
title: Parameter
description: API reference for qiskit.circuit.Parameter
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.Parameter
---

# Parameter

<span id="qiskit.circuit.Parameter" />

`Parameter(name)`

Bases: `qiskit.circuit.parameterexpression.ParameterExpression`

Parameter Class for variable parameters.

Create a new named [`Parameter`](#qiskit.circuit.Parameter "qiskit.circuit.Parameter").

**Parameters**

**name** (`str`) – name of the `Parameter`, used for visual representation. This can be any unicode string, e.g. “ϕ”.

## Methods

### arccos

<span id="qiskit.circuit.Parameter.arccos" />

`Parameter.arccos()`

Arccos of a ParameterExpression

### arcsin

<span id="qiskit.circuit.Parameter.arcsin" />

`Parameter.arcsin()`

Arcsin of a ParameterExpression

### arctan

<span id="qiskit.circuit.Parameter.arctan" />

`Parameter.arctan()`

Arctan of a ParameterExpression

### assign

<span id="qiskit.circuit.Parameter.assign" />

`Parameter.assign(parameter, value)`

Assign one parameter to a value, which can either be numeric or another parameter expression.

**Parameters**

*   **parameter** ([*Parameter*](qiskit.circuit.Parameter "qiskit.circuit.Parameter")) – A parameter in this expression whose value will be updated.
*   **value** (`Union`\[`ParameterExpression`, `float`]) – The new value to bind to.

**Return type**

`ParameterExpression`

**Returns**

A new expression parameterized by any parameters which were not bound by assignment.

### bind

<span id="qiskit.circuit.Parameter.bind" />

`Parameter.bind(parameter_values)`

Binds the provided set of parameters to their corresponding values.

**Parameters**

**parameter\_values** (`Dict`) – Mapping of Parameter instances to the numeric value to which they will be bound.

**Raises**

*   **CircuitError** –

    *   If parameter\_values contains Parameters outside those in self. - If a non-numeric value is passed in parameter\_values.

*   **ZeroDivisionError** –

    *   If binding the provided values requires division by zero.

**Return type**

`ParameterExpression`

**Returns**

A new expression parameterized by any parameters which were not bound by parameter\_values.

### conjugate

<span id="qiskit.circuit.Parameter.conjugate" />

`Parameter.conjugate()`

Return the conjugate.

**Return type**

`ParameterExpression`

### cos

<span id="qiskit.circuit.Parameter.cos" />

`Parameter.cos()`

Cosine of a ParameterExpression

### exp

<span id="qiskit.circuit.Parameter.exp" />

`Parameter.exp()`

Exponential of a ParameterExpression

### gradient

<span id="qiskit.circuit.Parameter.gradient" />

`Parameter.gradient(param)`

Get the derivative of a parameter expression w\.r.t. a specified parameter expression.

**Parameters**

**param** ([*Parameter*](qiskit.circuit.Parameter "qiskit.circuit.Parameter")) – Parameter w\.r.t. which we want to take the derivative

**Return type**

`Union`\[`ParameterExpression`, `float`]

**Returns**

ParameterExpression representing the gradient of param\_expr w\.r.t. param

### is\_real

<span id="qiskit.circuit.Parameter.is_real" />

`Parameter.is_real()`

Return whether the expression is real

### log

<span id="qiskit.circuit.Parameter.log" />

`Parameter.log()`

Logarithm of a ParameterExpression

### sin

<span id="qiskit.circuit.Parameter.sin" />

`Parameter.sin()`

Sine of a ParameterExpression

### subs

<span id="qiskit.circuit.Parameter.subs" />

`Parameter.subs(parameter_map)`

Substitute self with the corresponding parameter in `parameter_map`.

### tan

<span id="qiskit.circuit.Parameter.tan" />

`Parameter.tan()`

Tangent of a ParameterExpression

## Attributes

<span id="qiskit.circuit.Parameter.name" />

### name

Returns the name of the [`Parameter`](#qiskit.circuit.Parameter "qiskit.circuit.Parameter").

<span id="qiskit.circuit.Parameter.parameters" />

### parameters

Returns a set of the unbound Parameters in the expression.

**Return type**

`Set`

