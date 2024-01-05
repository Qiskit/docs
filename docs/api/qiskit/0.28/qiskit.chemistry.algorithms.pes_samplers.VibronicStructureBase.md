---
title: VibronicStructureBase
description: API reference for qiskit.chemistry.algorithms.pes_samplers.VibronicStructureBase
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.chemistry.algorithms.pes_samplers.VibronicStructureBase
---

# qiskit.chemistry.algorithms.pes\_samplers.VibronicStructureBase

<span id="qiskit.chemistry.algorithms.pes_samplers.VibronicStructureBase" />

`VibronicStructureBase(molecule)`

Class to hold a molecular vibronic structure providing access to vibrational modes and energy levels.

### \_\_init\_\_

<span id="qiskit.chemistry.algorithms.pes_samplers.VibronicStructureBase.__init__" />

`__init__(molecule)`

Initialize self. See help(type(self)) for accurate signature.

## Methods

### get\_maximum\_trusted\_level

<span id="qiskit.chemistry.algorithms.pes_samplers.VibronicStructureBase.get_maximum_trusted_level" />

`get_maximum_trusted_level(n=0)`

Returns the maximum energy level for which the particular implementation still provides a good approximation of reality. Default value of 100. Redefined where needed (see e.g. Morse).

**Parameters**

**n** (`int`) – vibronic mode

**Return type**

`float`

**Returns**

maximum\_trusted\_level setted

### get\_num\_modes

<span id="qiskit.chemistry.algorithms.pes_samplers.VibronicStructureBase.get_num_modes" />

`abstract get_num_modes()`

Returns the number of vibrational modes for the molecule.

**Return type**

`float`

**Returns**

the number of vibrational modes

### update\_molecule

<span id="qiskit.chemistry.algorithms.pes_samplers.VibronicStructureBase.update_molecule" />

`update_molecule(molecule)`

Wipe state if molecule changes, and check validity of molecule for potential.

**Parameters**

**molecule** (`Molecule`) – chemistry molecule

**Return type**

`Molecule`

**Returns**

molecule used

### vibrational\_energy\_level

<span id="qiskit.chemistry.algorithms.pes_samplers.VibronicStructureBase.vibrational_energy_level" />

`abstract vibrational_energy_level(n)`

Returns the n-th vibrational energy level for a given mode.

**Parameters**

**n** (`int`) – number of vibrational mode

**Return type**

`float`

**Returns**

n-th vibrational energy level for a given mode

