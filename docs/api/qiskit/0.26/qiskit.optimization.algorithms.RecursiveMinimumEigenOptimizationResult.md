---
title: RecursiveMinimumEigenOptimizationResult
description: API reference for qiskit.optimization.algorithms.RecursiveMinimumEigenOptimizationResult
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.optimization.algorithms.RecursiveMinimumEigenOptimizationResult
---

# qiskit.optimization.algorithms.RecursiveMinimumEigenOptimizationResult

<span id="qiskit.optimization.algorithms.RecursiveMinimumEigenOptimizationResult" />

`RecursiveMinimumEigenOptimizationResult(x, fval, variables, status, replacements, history)`

Recursive Eigen Optimizer Result.

Constructs an instance of the result class.

**Parameters**

*   **x** (`Union`\[`List`\[`float`], `ndarray`]) – the optimal value found in the optimization.
*   **fval** (`float`) – the optimal function value.
*   **variables** (`List`\[`Variable`]) – the list of variables of the optimization problem.
*   **status** (`OptimizationResultStatus`) – the termination status of the optimization algorithm.
*   **replacements** (`Dict`\[`str`, `Tuple`\[`str`, `int`]]) – a dictionary of substituted variables. Key is a variable being substituted, value is a tuple of substituting variable and a weight, either 1 or -1.
*   **history** (`Tuple`\[`List`\[`MinimumEigenOptimizationResult`], `OptimizationResult`]) – a tuple containing intermediate results. The first element is a list of `MinimumEigenOptimizerResult` obtained by invoking [`MinimumEigenOptimizer`](qiskit.optimization.algorithms.MinimumEigenOptimizer "qiskit.optimization.algorithms.MinimumEigenOptimizer") iteratively, the second element is an instance of `OptimizationResult` obtained at the last step via min\_num\_vars\_optimizer.

### \_\_init\_\_

<span id="qiskit.optimization.algorithms.RecursiveMinimumEigenOptimizationResult.__init__" />

`__init__(x, fval, variables, status, replacements, history)`

Constructs an instance of the result class.

**Parameters**

*   **x** (`Union`\[`List`\[`float`], `ndarray`]) – the optimal value found in the optimization.
*   **fval** (`float`) – the optimal function value.
*   **variables** (`List`\[`Variable`]) – the list of variables of the optimization problem.
*   **status** (`OptimizationResultStatus`) – the termination status of the optimization algorithm.
*   **replacements** (`Dict`\[`str`, `Tuple`\[`str`, `int`]]) – a dictionary of substituted variables. Key is a variable being substituted, value is a tuple of substituting variable and a weight, either 1 or -1.
*   **history** (`Tuple`\[`List`\[`MinimumEigenOptimizationResult`], `OptimizationResult`]) – a tuple containing intermediate results. The first element is a list of `MinimumEigenOptimizerResult` obtained by invoking [`MinimumEigenOptimizer`](qiskit.optimization.algorithms.MinimumEigenOptimizer "qiskit.optimization.algorithms.MinimumEigenOptimizer") iteratively, the second element is an instance of `OptimizationResult` obtained at the last step via min\_num\_vars\_optimizer.

## Methods

## Attributes

### fval

<span id="qiskit.optimization.algorithms.RecursiveMinimumEigenOptimizationResult.fval" />

`property fval`

Returns the optimal function value.

**Return type**

`float`

**Returns**

The function value corresponding to the optimal value found in the optimization.

### history

<span id="qiskit.optimization.algorithms.RecursiveMinimumEigenOptimizationResult.history" />

`property history`

Returns intermediate results. The first element is a list of `MinimumEigenOptimizerResult` obtained by invoking [`MinimumEigenOptimizer`](qiskit.optimization.algorithms.MinimumEigenOptimizer "qiskit.optimization.algorithms.MinimumEigenOptimizer") iteratively, the second element is an instance of `OptimizationResult` obtained at the last step via min\_num\_vars\_optimizer.

**Return type**

`Tuple`\[`List`\[`MinimumEigenOptimizationResult`], `OptimizationResult`]

### raw\_results

<span id="qiskit.optimization.algorithms.RecursiveMinimumEigenOptimizationResult.raw_results" />

`property raw_results`

Return the original results object from the optimization algorithm.

Currently a dump for any leftovers.

**Return type**

`Any`

**Returns**

Additional result information of the optimization algorithm.

### replacements

<span id="qiskit.optimization.algorithms.RecursiveMinimumEigenOptimizationResult.replacements" />

`property replacements`

Returns a dictionary of substituted variables. Key is a variable being substituted, value is a tuple of substituting variable and a weight, either 1 or -1.

**Return type**

`Dict`\[`str`, `Tuple`\[`str`, `int`]]

### samples

<span id="qiskit.optimization.algorithms.RecursiveMinimumEigenOptimizationResult.samples" />

`property samples`

Returns the list of solution samples

**Return type**

`List`\[`SolutionSample`]

**Returns**

The list of solution samples.

### status

<span id="qiskit.optimization.algorithms.RecursiveMinimumEigenOptimizationResult.status" />

`property status`

Returns the termination status of the optimization algorithm.

**Return type**

`OptimizationResultStatus`

**Returns**

The termination status of the algorithm.

### variable\_names

<span id="qiskit.optimization.algorithms.RecursiveMinimumEigenOptimizationResult.variable_names" />

`property variable_names`

Returns the list of variable names of the optimization problem.

**Return type**

`List`\[`str`]

**Returns**

The list of variable names of the optimization problem.

### variables

<span id="qiskit.optimization.algorithms.RecursiveMinimumEigenOptimizationResult.variables" />

`property variables`

Returns the list of variables of the optimization problem.

**Return type**

`List`\[`Variable`]

**Returns**

The list of variables.

### variables\_dict

<span id="qiskit.optimization.algorithms.RecursiveMinimumEigenOptimizationResult.variables_dict" />

`property variables_dict`

Returns the optimal value as a dictionary of the variable name and corresponding value.

**Return type**

`Dict`\[`str`, `float`]

**Returns**

The optimal value as a dictionary of the variable name and corresponding value.

### x

<span id="qiskit.optimization.algorithms.RecursiveMinimumEigenOptimizationResult.x" />

`property x`

Returns the optimal value found in the optimization or None in case of FAILURE.

**Return type**

`Optional`\[`ndarray`]

**Returns**

The optimal value found in the optimization.

