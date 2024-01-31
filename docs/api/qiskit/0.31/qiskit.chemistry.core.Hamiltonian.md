---
title: Hamiltonian
description: API reference for qiskit.chemistry.core.Hamiltonian
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.chemistry.core.Hamiltonian
---

# Hamiltonian

<span id="qiskit.chemistry.core.Hamiltonian" />

`Hamiltonian(transformation=<TransformationType.FULL: 'full'>, qubit_mapping=<QubitMappingType.PARITY: 'parity'>, two_qubit_reduction=True, freeze_core=False, orbital_reduction=None, z2symmetry_reduction=None)`[GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.9/qiskit/chemistry/core/hamiltonian.py "view source code")

Bases: `qiskit.chemistry.core.chemistry_operator.ChemistryOperator`

A molecular Hamiltonian operator, representing the energy of the electrons and nuclei in a molecule.

**Parameters**

*   **transformation** (`TransformationType`) – full or particle\_hole
*   **qubit\_mapping** (`QubitMappingType`) – jordan\_wigner, parity or bravyi\_kitaev
*   **two\_qubit\_reduction** (`bool`) – Whether two qubit reduction should be used, when parity mapping only
*   **freeze\_core** (`bool`) – Whether to freeze core orbitals when possible
*   **orbital\_reduction** (`Optional`\[`List`\[`int`]]) – Orbital list to be frozen or removed
*   **z2symmetry\_reduction** (`Union`\[`str`, `List`\[`int`], `None`]) – If z2 symmetry reduction should be applied to resulting qubit operators that are computed. For each symmetry detected the operator will be split in two where each requires one qubit less for computation. So for example 3 symmetries will split in the original operator into 8 new operators each requiring 3 less qubits. Now only one of these operators will have the ground state and be the correct symmetry sector needed for the ground state. Setting ‘auto’ will use an automatic computation of the correct sector. If from other experiments, with the z2symmetry logic, the sector is known, then the tapering values of that sector can be provided (a list of int of values -1, and 1). The default is None meaning no symmetry reduction is done. Note that dipole and other operators such as spin, num particles etc are also symmetry reduced according to the symmetries found in the main operator if this operator commutes with the main operator symmetry. If it does not then the operator will be discarded since no meaningful measurement can take place.

**Raises**

[**QiskitChemistryError**](qiskit.chemistry.QiskitChemistryError "qiskit.chemistry.QiskitChemistryError") – Invalid symmetry reduction

## Methods

### process\_algorithm\_result

<span id="qiskit.chemistry.core.Hamiltonian.process_algorithm_result" />

`Hamiltonian.process_algorithm_result(algo_result)`

Takes the algorithm result and processes it as required, e.g. by combination of any parts that were classically computed, for the final result.

**Parameters**

**algo\_result** (`Union`\[`dict`, `MinimumEigensolverResult`, `EigensolverResult`]) – Result from algorithm

**Return type**

`Union`\[`Tuple`\[`List`\[`str`], `dict`], `MolecularGroundStateResult`, `MolecularExcitedStatesResult`]

**Returns**

Final chemistry result computed from the algorithm result

### run

<span id="qiskit.chemistry.core.Hamiltonian.run" />

`Hamiltonian.run(qmolecule)`[GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.9/qiskit/chemistry/core/hamiltonian.py "view source code")

run method

**Return type**

`Tuple`\[`WeightedPauliOperator`, `List`\[`WeightedPauliOperator`]]

## Attributes

<span id="qiskit.chemistry.core.Hamiltonian.INFO_NUM_ORBITALS" />

### INFO\_NUM\_ORBITALS

`= 'num_orbitals'`

<span id="qiskit.chemistry.core.Hamiltonian.INFO_NUM_PARTICLES" />

### INFO\_NUM\_PARTICLES

`= 'num_particles'`

<span id="qiskit.chemistry.core.Hamiltonian.INFO_TWO_QUBIT_REDUCTION" />

### INFO\_TWO\_QUBIT\_REDUCTION

`= 'two_qubit_reduction'`

<span id="qiskit.chemistry.core.Hamiltonian.INFO_Z2SYMMETRIES" />

### INFO\_Z2SYMMETRIES

`= 'z2symmetries'`

<span id="qiskit.chemistry.core.Hamiltonian.molecule_info" />

### molecule\_info

returns molecule info

