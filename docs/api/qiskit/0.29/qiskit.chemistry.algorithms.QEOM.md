---
title: QEOM
description: API reference for qiskit.chemistry.algorithms.QEOM
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.chemistry.algorithms.QEOM
---

# QEOM

<span id="qiskit.chemistry.algorithms.QEOM" />

`QEOM(ground_state_solver, excitations='sd')`[GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.9/qiskit/chemistry/algorithms/excited_states_solvers/qeom.py "view source code")

Bases: `qiskit.chemistry.algorithms.excited_states_solvers.excited_states_solver.ExcitedStatesSolver`

The calculation of excited states via the qEOM algorithm

**Parameters**

*   **ground\_state\_solver** (`GroundStateSolver`) – a GroundStateSolver object. The qEOM algorithm will use this ground state to compute the EOM matrix elements
*   **excitations** (`Union`\[`str`, `List`\[`List`\[`int`]]]) – The excitations to be included in the eom pseudo-eigenvalue problem. If a string (‘s’, ‘d’ or ‘sd’) then all excitations of the given type will be used. Otherwise a list of custom excitations can directly be provided.

## Methods

### solve

<span id="qiskit.chemistry.algorithms.QEOM.solve" />

`QEOM.solve(driver, aux_operators=None)`[GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.9/qiskit/chemistry/algorithms/excited_states_solvers/qeom.py "view source code")

Run the excited-states calculation.

Construct and solves the EOM pseudo-eigenvalue problem to obtain the excitation energies and the excitation operators expansion coefficients.

**Parameters**

*   **driver** (`BaseDriver`) – a chemistry driver object which defines the chemical problem that is to be solved by this calculation.
*   **aux\_operators** (`Union`\[`List`\[`FermionicOperator`], `List`\[`BosonicOperator`], `None`]) – Additional auxiliary operators to evaluate. Must be of type `FermionicOperator` if the qubit transformation is fermionic and of type `BosonicOperator` it is bosonic.

**Return type**

`Union`\[`ElectronicStructureResult`, `VibronicStructureResult`]

**Returns**

The excited states result. In case of a fermionic problem a `ElectronicStructureResult` is returned and in the bosonic case a `VibronicStructureResult`.

## Attributes

<span id="qiskit.chemistry.algorithms.QEOM.excitations" />

### excitations

Returns the excitations to be included in the eom pseudo-eigenvalue problem.

**Return type**

`Union`\[`str`, `List`\[`List`\[`int`]]]

