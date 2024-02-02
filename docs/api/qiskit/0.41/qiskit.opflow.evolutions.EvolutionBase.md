---
title: EvolutionBase
description: API reference for qiskit.opflow.evolutions.EvolutionBase
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.opflow.evolutions.EvolutionBase
---

# EvolutionBase

<span id="qiskit.opflow.evolutions.EvolutionBase" />

`EvolutionBase`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.23/qiskit/opflow/evolutions/evolution_base.py "view source code")

Bases: [`qiskit.opflow.converters.converter_base.ConverterBase`](qiskit.opflow.converters.ConverterBase "qiskit.opflow.converters.converter_base.ConverterBase"), `abc.ABC`

A base for Evolution converters. Evolutions are converters which traverse an Operator tree, replacing any `EvolvedOp` e with a Schrodinger equation-style evolution `CircuitOp` equalling or approximating the matrix exponential of -i \* the Operator contained inside (e.primitive). The Evolutions are essentially implementations of Hamiltonian Simulation algorithms, including various methods for Trotterization.

**Methods Defined Here**

|                                                                                                              |                                                                                                   |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------- |
| [`convert`](qiskit.opflow.evolutions.EvolutionBase#convert "qiskit.opflow.evolutions.EvolutionBase.convert") | Traverse the operator, replacing any `EvolutionOps` with their equivalent evolution `CircuitOps`. |

