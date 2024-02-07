---
title: IMFIL
description: API reference for qiskit.aqua.components.optimizers.IMFIL
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.components.optimizers.IMFIL
---

<span id="qiskit-aqua-components-optimizers-imfil" />

# qiskit.aqua.components.optimizers.IMFIL

<span id="qiskit.aqua.components.optimizers.IMFIL" />

`IMFIL(maxiter=1000)`[GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.8/qiskit/aqua/components/optimizers/imfil.py "view source code")

IMplicit FILtering algorithm.

Implicit filtering is a way to solve bound-constrained optimization problems for which derivatives are not available. In comparison to methods that use interpolation to reconstruct the function and its higher derivatives, implicit filtering builds upon coordinate search followed by interpolation to get an approximate gradient.

Uses skquant.opt installed with pip install scikit-quant. For further detail, please refer to [https://github.com/scikit-quant/scikit-quant](https://github.com/scikit-quant/scikit-quant) and [https://qat4chem.lbl.gov/software](https://qat4chem.lbl.gov/software).

**Parameters**

**maxiter** (`int`) – Maximum number of function evaluations.

**Raises**

[**MissingOptionalLibraryError**](qiskit.aqua.MissingOptionalLibraryError "qiskit.aqua.MissingOptionalLibraryError") – scikit-quant not installed

### \_\_init\_\_

<span id="qiskit.aqua.components.optimizers.IMFIL.__init__" />

`__init__(maxiter=1000)`

**Parameters**

**maxiter** (`int`) – Maximum number of function evaluations.

**Raises**

[**MissingOptionalLibraryError**](qiskit.aqua.MissingOptionalLibraryError "qiskit.aqua.MissingOptionalLibraryError") – scikit-quant not installed

## Methods

|                                                                                                                                                                            |                                                                                                           |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| [`__init__`](#qiskit.aqua.components.optimizers.IMFIL.__init__ "qiskit.aqua.components.optimizers.IMFIL.__init__")(\[maxiter])                                             | **type maxiter**`int`                                                                                     |
| [`get_support_level`](#qiskit.aqua.components.optimizers.IMFIL.get_support_level "qiskit.aqua.components.optimizers.IMFIL.get_support_level")()                            | Returns support level dictionary.                                                                         |
| [`gradient_num_diff`](#qiskit.aqua.components.optimizers.IMFIL.gradient_num_diff "qiskit.aqua.components.optimizers.IMFIL.gradient_num_diff")(x\_center, f, epsilon\[, …]) | We compute the gradient with the numeric differentiation in the parallel way, around the point x\_center. |
| [`optimize`](#qiskit.aqua.components.optimizers.IMFIL.optimize "qiskit.aqua.components.optimizers.IMFIL.optimize")(num\_vars, objective\_function\[, …])                   | Runs the optimization.                                                                                    |
| [`print_options`](#qiskit.aqua.components.optimizers.IMFIL.print_options "qiskit.aqua.components.optimizers.IMFIL.print_options")()                                        | Print algorithm-specific options.                                                                         |
| [`set_max_evals_grouped`](#qiskit.aqua.components.optimizers.IMFIL.set_max_evals_grouped "qiskit.aqua.components.optimizers.IMFIL.set_max_evals_grouped")(limit)           | Set max evals grouped                                                                                     |
| [`set_options`](#qiskit.aqua.components.optimizers.IMFIL.set_options "qiskit.aqua.components.optimizers.IMFIL.set_options")(\*\*kwargs)                                    | Sets or updates values in the options dictionary.                                                         |
| [`wrap_function`](#qiskit.aqua.components.optimizers.IMFIL.wrap_function "qiskit.aqua.components.optimizers.IMFIL.wrap_function")(function, args)                          | Wrap the function to implicitly inject the args at the call of the function.                              |

## Attributes

|                                                                                                                                                                             |                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| [`bounds_support_level`](#qiskit.aqua.components.optimizers.IMFIL.bounds_support_level "qiskit.aqua.components.optimizers.IMFIL.bounds_support_level")                      | Returns bounds support level        |
| [`gradient_support_level`](#qiskit.aqua.components.optimizers.IMFIL.gradient_support_level "qiskit.aqua.components.optimizers.IMFIL.gradient_support_level")                | Returns gradient support level      |
| [`initial_point_support_level`](#qiskit.aqua.components.optimizers.IMFIL.initial_point_support_level "qiskit.aqua.components.optimizers.IMFIL.initial_point_support_level") | Returns initial point support level |
| [`is_bounds_ignored`](#qiskit.aqua.components.optimizers.IMFIL.is_bounds_ignored "qiskit.aqua.components.optimizers.IMFIL.is_bounds_ignored")                               | Returns is bounds ignored           |
| [`is_bounds_required`](#qiskit.aqua.components.optimizers.IMFIL.is_bounds_required "qiskit.aqua.components.optimizers.IMFIL.is_bounds_required")                            | Returns is bounds required          |
| [`is_bounds_supported`](#qiskit.aqua.components.optimizers.IMFIL.is_bounds_supported "qiskit.aqua.components.optimizers.IMFIL.is_bounds_supported")                         | Returns is bounds supported         |
| [`is_gradient_ignored`](#qiskit.aqua.components.optimizers.IMFIL.is_gradient_ignored "qiskit.aqua.components.optimizers.IMFIL.is_gradient_ignored")                         | Returns is gradient ignored         |
| [`is_gradient_required`](#qiskit.aqua.components.optimizers.IMFIL.is_gradient_required "qiskit.aqua.components.optimizers.IMFIL.is_gradient_required")                      | Returns is gradient required        |
| [`is_gradient_supported`](#qiskit.aqua.components.optimizers.IMFIL.is_gradient_supported "qiskit.aqua.components.optimizers.IMFIL.is_gradient_supported")                   | Returns is gradient supported       |
| [`is_initial_point_ignored`](#qiskit.aqua.components.optimizers.IMFIL.is_initial_point_ignored "qiskit.aqua.components.optimizers.IMFIL.is_initial_point_ignored")          | Returns is initial point ignored    |
| [`is_initial_point_required`](#qiskit.aqua.components.optimizers.IMFIL.is_initial_point_required "qiskit.aqua.components.optimizers.IMFIL.is_initial_point_required")       | Returns is initial point required   |
| [`is_initial_point_supported`](#qiskit.aqua.components.optimizers.IMFIL.is_initial_point_supported "qiskit.aqua.components.optimizers.IMFIL.is_initial_point_supported")    | Returns is initial point supported  |
| [`setting`](#qiskit.aqua.components.optimizers.IMFIL.setting "qiskit.aqua.components.optimizers.IMFIL.setting")                                                             | Return setting                      |

### bounds\_support\_level

<span id="qiskit.aqua.components.optimizers.IMFIL.bounds_support_level" />

`property bounds_support_level`

Returns bounds support level

### get\_support\_level

<span id="qiskit.aqua.components.optimizers.IMFIL.get_support_level" />

`get_support_level()`

Returns support level dictionary.

### gradient\_num\_diff

<span id="qiskit.aqua.components.optimizers.IMFIL.gradient_num_diff" />

`static gradient_num_diff(x_center, f, epsilon, max_evals_grouped=1)`

We compute the gradient with the numeric differentiation in the parallel way, around the point x\_center.

**Parameters**

*   **x\_center** (*ndarray*) – point around which we compute the gradient
*   **f** (*func*) – the function of which the gradient is to be computed.
*   **epsilon** (*float*) – the epsilon used in the numeric differentiation.
*   **max\_evals\_grouped** (*int*) – max evals grouped

**Returns**

the gradient computed

**Return type**

grad

### gradient\_support\_level

<span id="qiskit.aqua.components.optimizers.IMFIL.gradient_support_level" />

`property gradient_support_level`

Returns gradient support level

### initial\_point\_support\_level

<span id="qiskit.aqua.components.optimizers.IMFIL.initial_point_support_level" />

`property initial_point_support_level`

Returns initial point support level

### is\_bounds\_ignored

<span id="qiskit.aqua.components.optimizers.IMFIL.is_bounds_ignored" />

`property is_bounds_ignored`

Returns is bounds ignored

### is\_bounds\_required

<span id="qiskit.aqua.components.optimizers.IMFIL.is_bounds_required" />

`property is_bounds_required`

Returns is bounds required

### is\_bounds\_supported

<span id="qiskit.aqua.components.optimizers.IMFIL.is_bounds_supported" />

`property is_bounds_supported`

Returns is bounds supported

### is\_gradient\_ignored

<span id="qiskit.aqua.components.optimizers.IMFIL.is_gradient_ignored" />

`property is_gradient_ignored`

Returns is gradient ignored

### is\_gradient\_required

<span id="qiskit.aqua.components.optimizers.IMFIL.is_gradient_required" />

`property is_gradient_required`

Returns is gradient required

### is\_gradient\_supported

<span id="qiskit.aqua.components.optimizers.IMFIL.is_gradient_supported" />

`property is_gradient_supported`

Returns is gradient supported

### is\_initial\_point\_ignored

<span id="qiskit.aqua.components.optimizers.IMFIL.is_initial_point_ignored" />

`property is_initial_point_ignored`

Returns is initial point ignored

### is\_initial\_point\_required

<span id="qiskit.aqua.components.optimizers.IMFIL.is_initial_point_required" />

`property is_initial_point_required`

Returns is initial point required

### is\_initial\_point\_supported

<span id="qiskit.aqua.components.optimizers.IMFIL.is_initial_point_supported" />

`property is_initial_point_supported`

Returns is initial point supported

### optimize

<span id="qiskit.aqua.components.optimizers.IMFIL.optimize" />

`optimize(num_vars, objective_function, gradient_function=None, variable_bounds=None, initial_point=None)`

Runs the optimization.

### print\_options

<span id="qiskit.aqua.components.optimizers.IMFIL.print_options" />

`print_options()`

Print algorithm-specific options.

### set\_max\_evals\_grouped

<span id="qiskit.aqua.components.optimizers.IMFIL.set_max_evals_grouped" />

`set_max_evals_grouped(limit)`

Set max evals grouped

### set\_options

<span id="qiskit.aqua.components.optimizers.IMFIL.set_options" />

`set_options(**kwargs)`

Sets or updates values in the options dictionary.

The options dictionary may be used internally by a given optimizer to pass additional optional values for the underlying optimizer/optimization function used. The options dictionary may be initially populated with a set of key/values when the given optimizer is constructed.

**Parameters**

**kwargs** (*dict*) – options, given as name=value.

### setting

<span id="qiskit.aqua.components.optimizers.IMFIL.setting" />

`property setting`

Return setting

### wrap\_function

<span id="qiskit.aqua.components.optimizers.IMFIL.wrap_function" />

`static wrap_function(function, args)`

Wrap the function to implicitly inject the args at the call of the function.

**Parameters**

*   **function** (*func*) – the target function
*   **args** (*tuple*) – the args to be injected

**Returns**

wrapper

**Return type**

function\_wrapper

