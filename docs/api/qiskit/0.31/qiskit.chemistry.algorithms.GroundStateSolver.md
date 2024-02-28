---
title: GroundStateSolver
description: API reference for qiskit.chemistry.algorithms.GroundStateSolver
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.chemistry.algorithms.GroundStateSolver
---

# GroundStateSolver

<span id="qiskit.chemistry.algorithms.GroundStateSolver" />

`GroundStateSolver(transformation)` [GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.9/qiskit/chemistry/algorithms/ground_state_solvers/ground_state_solver.py "view source code")

Bases: `abc.ABC`

The ground state calculation interface

**Parameters**

**transformation** (`Transformation`) – transformation from driver to qubit operator (and aux. operators)

## Methods

### evaluate\_operators

<span id="qiskit.chemistry.algorithms.GroundStateSolver.evaluate_operators" />

`abstract GroundStateSolver.evaluate_operators(state, operators)` [GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.9/qiskit/chemistry/algorithms/ground_state_solvers/ground_state_solver.py "view source code")

Evaluates additional operators at the given state.

**Parameters**

*   **state** (`Union`\[`str`, `dict`, `Result`, `list`, `ndarray`, `Statevector`, `QuantumCircuit`, `Instruction`, `OperatorBase`]) – any kind of input that can be used to specify a state. See also `StateFn` for more details.
*   **operators** (`Union`\[`WeightedPauliOperator`, `OperatorBase`, `list`, `dict`]) – either a single, list or dictionary of `WeightedPauliOperator``s or any kind of operator implementing the ``OperatorBase`.

**Return type**

`Union`\[`float`, `List`\[`float`], `Dict`\[`str`, `List`\[`float`]]]

**Returns**

The expectation value of the given operator(s). The return type will be identical to the format of the provided operators.

### returns\_groundstate

<span id="qiskit.chemistry.algorithms.GroundStateSolver.returns_groundstate" />

`abstract GroundStateSolver.returns_groundstate()` [GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.9/qiskit/chemistry/algorithms/ground_state_solvers/ground_state_solver.py "view source code")

Whether this class returns only the ground state energy or also the ground state itself.

**Return type**

`bool`

**Returns**

True, if this class also returns the ground state in the results object. False otherwise.

### solve

<span id="qiskit.chemistry.algorithms.GroundStateSolver.solve" />

`abstract GroundStateSolver.solve(driver, aux_operators=None)` [GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.9/qiskit/chemistry/algorithms/ground_state_solvers/ground_state_solver.py "view source code")

Compute the ground state energy of the molecule that was supplied via the driver.

**Parameters**

*   **driver** (`BaseDriver`) – a chemistry driver object which defines the chemical problem that is to be solved by this calculation.
*   **aux\_operators** (`Union`\[`List`\[`FermionicOperator`], `List`\[`BosonicOperator`], `None`]) – Additional auxiliary operators to evaluate. Must be of type `FermionicOperator` if the qubit transformation is fermionic and of type `BosonicOperator` it is bosonic.

**Return type**

`Union`\[`ElectronicStructureResult`, `VibronicStructureResult`]

**Returns**

An eigenstate result.

## Attributes

<span id="qiskit.chemistry.algorithms.GroundStateSolver.transformation" />

### transformation

Returns the transformation used to obtain a qubit operator from the molecule.

**Return type**

`Transformation`

