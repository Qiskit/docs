---
title: EigensolverFactory
description: API reference for qiskit.chemistry.algorithms.EigensolverFactory
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.chemistry.algorithms.EigensolverFactory
---

# EigensolverFactory

<span id="qiskit.chemistry.algorithms.EigensolverFactory" />

`EigensolverFactory`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.18/qiskit/chemistry/algorithms/excited_states_solvers/eigensolver_factories/eigensolver_factory.py "view source code")

Bases: `abc.ABC`

A factory to construct a eigensolver based on a qubit operator transformation.

## Methods

### get\_solver

<span id="qiskit.chemistry.algorithms.EigensolverFactory.get_solver" />

`abstract EigensolverFactory.get_solver(transformation)`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.18/qiskit/chemistry/algorithms/excited_states_solvers/eigensolver_factories/eigensolver_factory.py "view source code")

Returns a eigensolver, based on the qubit operator transformation.

**Parameters**

**transformation** (`Transformation`) – The qubit operator transformation.

**Return type**

`Eigensolver`

**Returns**

An eigensolver suitable to compute the excited states of the molecule transformed by `transformation`.

