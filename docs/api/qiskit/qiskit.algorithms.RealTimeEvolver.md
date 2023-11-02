---
title: RealTimeEvolver
description: API reference for qiskit.algorithms.RealTimeEvolver
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.algorithms.RealTimeEvolver
---

# RealTimeEvolver

<span id="qiskit.algorithms.RealTimeEvolver" />

`qiskit.algorithms.RealTimeEvolver`

Bases: [`ABC`](https://docs.python.org/3/library/abc.html#abc.ABC "(in Python v3.12)")

Interface for Quantum Real Time Evolution.

## Methods

### evolve

<span id="qiskit.algorithms.RealTimeEvolver.evolve" />

`abstract evolve(evolution_problem)`

Perform real time evolution $\exp(-i t H)|\Psi\rangle$.

Evolves an initial state $|\Psi\rangle$ for a time $t$ under a Hamiltonian $H$, as provided in the `evolution_problem`.

**Parameters**

**evolution\_problem** ([*TimeEvolutionProblem*](qiskit.algorithms.TimeEvolutionProblem "qiskit.algorithms.time_evolvers.time_evolution_problem.TimeEvolutionProblem")) – The definition of the evolution problem.

**Returns**

Evolution result which includes an evolved quantum state.

**Return type**

[*TimeEvolutionResult*](qiskit.algorithms.TimeEvolutionResult "qiskit.algorithms.time_evolvers.time_evolution_result.TimeEvolutionResult")

