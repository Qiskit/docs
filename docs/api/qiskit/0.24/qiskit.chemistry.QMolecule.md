---
title: QMolecule
description: API reference for qiskit.chemistry.QMolecule
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.chemistry.QMolecule
---

<span id="qiskit-chemistry-qmolecule" />

# qiskit.chemistry.QMolecule

<span id="qiskit.chemistry.QMolecule" />

`QMolecule(filename=None)`

Molecule data class containing driver result.

When one of the chemistry [`drivers`](qiskit.chemistry.drivers#module-qiskit.chemistry.drivers "qiskit.chemistry.drivers") is run and instance of this class is returned. This contains various properties that are made available in a consistent manner across the various drivers.

Note that values here, for the same input molecule to each driver, may be vary across the drivers underlying code implementation. Also some drivers may not provide certain fields such as dipole integrals in the case of [`PyQuanteDriver`](qiskit.chemistry.drivers.PyQuanteDriver "qiskit.chemistry.drivers.PyQuanteDriver").

This class provides methods to save it and load it again from an HDF5 file

### \_\_init\_\_

<span id="qiskit.chemistry.QMolecule.__init__" />

`__init__(filename=None)`

Initialize self. See help(type(self)) for accurate signature.

## Methods

## Attributes

### Z

<span id="qiskit.chemistry.QMolecule.Z" />

`Z(natom)`

### core\_orbitals

<span id="qiskit.chemistry.QMolecule.core_orbitals" />

`property core_orbitals`

Returns: A list of core orbital indices.

**Return type**

`List`\[`int`]

### filename

<span id="qiskit.chemistry.QMolecule.filename" />

`property filename`

returns temp file path

### has\_dipole\_integrals

<span id="qiskit.chemistry.QMolecule.has_dipole_integrals" />

`has_dipole_integrals()`

Check if dipole integrals are present.

### load

<span id="qiskit.chemistry.QMolecule.load" />

`load()`

loads info saved.

### log

<span id="qiskit.chemistry.QMolecule.log" />

`log()`

log properties

### one\_body\_integrals

<span id="qiskit.chemistry.QMolecule.one_body_integrals" />

`property one_body_integrals`

Returns one body electron integrals.

### onee\_to\_spin

<span id="qiskit.chemistry.QMolecule.onee_to_spin" />

`static onee_to_spin(mohij, mohij_b=None, threshold=1e-12)`

Convert one-body MO integrals to spin orbital basis

Takes one body integrals in molecular orbital basis and returns integrals in spin orbitals ready for use as coefficients to one body terms 2nd quantized Hamiltonian.

**Parameters**

*   **mohij** (*numpy.ndarray*) – One body orbitals in molecular basis (Alpha)
*   **mohij\_b** (*numpy.ndarray*) – One body orbitals in molecular basis (Beta)
*   **threshold** (*float*) – Threshold value for assignments

**Returns**

One body integrals in spin orbitals

**Return type**

numpy.ndarray

### oneeints2mo

<span id="qiskit.chemistry.QMolecule.oneeints2mo" />

`static oneeints2mo(ints, moc)`

Converts one-body integrals from AO to MO basis

Returns one electron integrals in AO basis converted to given MO basis

**Parameters**

*   **ints** (*numpy.ndarray*) – N^2 one electron integrals in AO basis
*   **moc** (*numpy.ndarray*) – Molecular orbital coefficients

**Returns**

integrals in MO basis

**Return type**

numpy.ndarray

### remove\_file

<span id="qiskit.chemistry.QMolecule.remove_file" />

`remove_file(file_name=None)`

remove file

### save

<span id="qiskit.chemistry.QMolecule.save" />

`save(file_name=None)`

Saves the info from the driver.

### two\_body\_integrals

<span id="qiskit.chemistry.QMolecule.two_body_integrals" />

`property two_body_integrals`

Returns two body electron integrals.

### twoe\_to\_spin

<span id="qiskit.chemistry.QMolecule.twoe_to_spin" />

`static twoe_to_spin(mohijkl, mohijkl_bb=None, mohijkl_ba=None, threshold=1e-12)`

Convert two-body MO integrals to spin orbital basis

Takes two body integrals in molecular orbital basis and returns integrals in spin orbitals ready for use as coefficients to two body terms in 2nd quantized Hamiltonian.

**Parameters**

*   **mohijkl** (*numpy.ndarray*) – Two body orbitals in molecular basis (AlphaAlpha)
*   **mohijkl\_bb** (*numpy.ndarray*) – Two body orbitals in molecular basis (BetaBeta)
*   **mohijkl\_ba** (*numpy.ndarray*) – Two body orbitals in molecular basis (BetaAlpha)
*   **threshold** (*float*) – Threshold value for assignments

**Returns**

Two body integrals in spin orbitals

**Return type**

numpy.ndarray

### twoeints2mo

<span id="qiskit.chemistry.QMolecule.twoeints2mo" />

`static twoeints2mo(ints, moc)`

Converts two-body integrals from AO to MO basis

Returns two electron integrals in AO basis converted to given MO basis

**Parameters**

*   **ints** (*numpy.ndarray*) – N^2 two electron integrals in AO basis
*   **moc** (*numpy.ndarray*) – Molecular orbital coefficients

**Returns**

integrals in MO basis

**Return type**

numpy.ndarray

### twoeints2mo\_general

<span id="qiskit.chemistry.QMolecule.twoeints2mo_general" />

`static twoeints2mo_general(ints, moc1, moc2, moc3, moc4)`

### x\_dipole\_integrals

<span id="qiskit.chemistry.QMolecule.x_dipole_integrals" />

`property x_dipole_integrals`

returns x\_dipole\_integrals

### y\_dipole\_integrals

<span id="qiskit.chemistry.QMolecule.y_dipole_integrals" />

`property y_dipole_integrals`

returns y\_dipole\_integrals

### z\_dipole\_integrals

<span id="qiskit.chemistry.QMolecule.z_dipole_integrals" />

`property z_dipole_integrals`

returns z\_dipole\_integrals

