---
title: GroverOptimizationResult
description: API reference for qiskit.optimization.algorithms.GroverOptimizationResult
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.optimization.algorithms.GroverOptimizationResult
---

# GroverOptimizationResult

<span id="qiskit.optimization.algorithms.GroverOptimizationResult" />

`GroverOptimizationResult(x, fval, variables, operation_counts, n_input_qubits, n_output_qubits, intermediate_fval, threshold, status)`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.18/qiskit/optimization/algorithms/grover_optimizer.py "view source code")

Bases: `qiskit.optimization.algorithms.optimization_algorithm.OptimizationResult`

A result object for Grover Optimization methods.

Constructs a result object with the specific Grover properties.

**Parameters**

*   **x** (`Union`\[`List`\[`float`], `ndarray`]) – The solution of the problem
*   **fval** (`float`) – The value of the objective function of the solution
*   **variables** (`List`\[`Variable`]) – A list of variables defined in the problem
*   **operation\_counts** (`Dict`\[`int`, `Dict`\[`str`, `int`]]) – The counts of each operation performed per iteration.
*   **n\_input\_qubits** (`int`) – The number of qubits used to represent the input.
*   **n\_output\_qubits** (`int`) – The number of qubits used to represent the output.
*   **intermediate\_fval** (`float`) – The intermediate value of the objective function of the solution, that is expected to be identical with `fval`.
*   **threshold** (`float`) – The threshold of Grover algorithm.
*   **status** (`OptimizationResultStatus`) – the termination status of the optimization algorithm.

## Attributes

<span id="qiskit.optimization.algorithms.GroverOptimizationResult.fval" />

### fval

Returns the optimal function value.

**Return type**

`float`

**Returns**

The function value corresponding to the optimal value found in the optimization.

<span id="qiskit.optimization.algorithms.GroverOptimizationResult.intermediate_fval" />

### intermediate\_fval

Getter of the intermediate fval

**Return type**

`float`

**Returns**

The intermediate value of fval before interpret.

<span id="qiskit.optimization.algorithms.GroverOptimizationResult.n_input_qubits" />

### n\_input\_qubits

Getter of n\_input\_qubits

**Return type**

`int`

**Returns**

The number of qubits used to represent the input.

<span id="qiskit.optimization.algorithms.GroverOptimizationResult.n_output_qubits" />

### n\_output\_qubits

Getter of n\_output\_qubits

**Return type**

`int`

**Returns**

The number of qubits used to represent the output.

<span id="qiskit.optimization.algorithms.GroverOptimizationResult.operation_counts" />

### operation\_counts

Get the operation counts.

**Return type**

`Dict`\[`int`, `Dict`\[`str`, `int`]]

**Returns**

The counts of each operation performed per iteration.

<span id="qiskit.optimization.algorithms.GroverOptimizationResult.raw_results" />

### raw\_results

Return the original results object from the optimization algorithm.

Currently a dump for any leftovers.

**Return type**

`Any`

**Returns**

Additional result information of the optimization algorithm.

<span id="qiskit.optimization.algorithms.GroverOptimizationResult.samples" />

### samples

Returns the list of solution samples

**Return type**

`List`\[`SolutionSample`]

**Returns**

The list of solution samples.

<span id="qiskit.optimization.algorithms.GroverOptimizationResult.status" />

### status

Returns the termination status of the optimization algorithm.

**Return type**

`OptimizationResultStatus`

**Returns**

The termination status of the algorithm.

<span id="qiskit.optimization.algorithms.GroverOptimizationResult.threshold" />

### threshold

Getter of the threshold of Grover algorithm.

**Return type**

`float`

**Returns**

The threshold of Grover algorithm.

<span id="qiskit.optimization.algorithms.GroverOptimizationResult.variable_names" />

### variable\_names

Returns the list of variable names of the optimization problem.

**Return type**

`List`\[`str`]

**Returns**

The list of variable names of the optimization problem.

<span id="qiskit.optimization.algorithms.GroverOptimizationResult.variables" />

### variables

Returns the list of variables of the optimization problem.

**Return type**

`List`\[`Variable`]

**Returns**

The list of variables.

<span id="qiskit.optimization.algorithms.GroverOptimizationResult.variables_dict" />

### variables\_dict

Returns the optimal value as a dictionary of the variable name and corresponding value.

**Return type**

`Dict`\[`str`, `float`]

**Returns**

The optimal value as a dictionary of the variable name and corresponding value.

<span id="qiskit.optimization.algorithms.GroverOptimizationResult.x" />

### x

Returns the optimal value found in the optimization or None in case of FAILURE.

**Return type**

`Optional`\[`ndarray`]

**Returns**

The optimal value found in the optimization.

