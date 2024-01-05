---
title: HarmonicPotential
description: API reference for qiskit.chemistry.algorithms.pes_samplers.HarmonicPotential
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.chemistry.algorithms.pes_samplers.HarmonicPotential
---

# HarmonicPotential

<span id="qiskit.chemistry.algorithms.pes_samplers.HarmonicPotential" />

`HarmonicPotential(molecule)`

Bases: `qiskit.chemistry.algorithms.pes_samplers.potentials.potential_base.PotentialBase`

Implements a 1D Harmonic potential.

Input units are Angstroms (distance between the two atoms), and output units are Hartrees (molecular energy).

**Parameters**

**molecule** (`Molecule`) – the underlying molecule.

**Raises**

**ValueError** – Only implemented for diatomic molecules

## Methods

### dissociation\_energy

<span id="qiskit.chemistry.algorithms.pes_samplers.HarmonicPotential.dissociation_energy" />

`HarmonicPotential.dissociation_energy(scaling=1.0)`

Returns the estimated dissociation energy for the current fit.

**Parameters**

**scaling** (`float`) – Scaling to change units. (Default is 1.0 for Hartrees)

**Return type**

`float`

**Returns**

estimated dissociation energy

### eval

<span id="qiskit.chemistry.algorithms.pes_samplers.HarmonicPotential.eval" />

`HarmonicPotential.eval(x)`

After fitting the data to the fit function, predict the energy at a point x.

**Parameters**

**x** (`float`) – value to evaluate surface in

**Return type**

`float`

**Returns**

value of potential in point x

### fit

<span id="qiskit.chemistry.algorithms.pes_samplers.HarmonicPotential.fit" />

`HarmonicPotential.fit(xdata, ydata, initial_vals=None, bounds_list=None)`

Fits a potential to computed molecular energies.

**Parameters**

*   **xdata** (`List`\[`float`]) – interatomic distance points (Angstroms)
*   **ydata** (`List`\[`float`]) – molecular energies (Hartrees)
*   **initial\_vals** (`Optional`\[`List`\[`float`]]) – Initial values for fit parameters. None for default. Order of parameters is k, r\_0 and m\_shift (see fit\_function implementation)
*   **bounds\_list** (`Optional`\[`Tuple`\[`List`\[`float`], `List`\[`float`]]]) – Bounds for the fit parameters. None for default. Order of parameters is k, r\_0 and m\_shift (see fit\_function implementation)

**Return type**

`None`

### fit\_function

<span id="qiskit.chemistry.algorithms.pes_samplers.HarmonicPotential.fit_function" />

`static HarmonicPotential.fit_function(x, k, r_0, m_shift)`

Functional form of the potential.

**Parameters**

*   **x** (`float`) – x parameter of harmonic potential functional form
*   **k** (`float`) – k parameter of harmonic potential functional form
*   **r\_0** (`float`) – r\_0 parameter of harmonic potential functional form
*   **m\_shift** (`float`) – m parameter of harmonic potential functional form

**Return type**

`float`

**Returns**

harmonic potential functional form

### fundamental\_frequency

<span id="qiskit.chemistry.algorithms.pes_samplers.HarmonicPotential.fundamental_frequency" />

`HarmonicPotential.fundamental_frequency()`

Returns the fundamental frequency for the current fit (in s^-1).

**Return type**

`float`

**Returns**

fundamental frequency for the current fit

### get\_equilibrium\_geometry

<span id="qiskit.chemistry.algorithms.pes_samplers.HarmonicPotential.get_equilibrium_geometry" />

`HarmonicPotential.get_equilibrium_geometry(scaling=1.0)`

Returns the interatomic distance corresponding to minimal energy.

**Parameters**

**scaling** (`float`) – Scaling to change units. (Default is 1.0 for Angstroms)

**Return type**

`float`

**Returns**

geometry corresponding to minimal energy

### get\_maximum\_trusted\_level

<span id="qiskit.chemistry.algorithms.pes_samplers.HarmonicPotential.get_maximum_trusted_level" />

`HarmonicPotential.get_maximum_trusted_level(n=0)`

Returns the maximum energy level for which the particular implementation still provides a good approximation of reality. Default value of 100. Redefined where needed (see e.g. Morse).

**Parameters**

**n** (`int`) – vibronic mode

**Return type**

`float`

**Returns**

maximum\_trusted\_level setted

### get\_minimal\_energy

<span id="qiskit.chemistry.algorithms.pes_samplers.HarmonicPotential.get_minimal_energy" />

`HarmonicPotential.get_minimal_energy(scaling=1.0)`

Returns the smallest molecular energy for the current fit.

**Parameters**

**scaling** (`float`) – Scaling to change units. (Default is 1.0 for Hartrees)

**Return type**

`float`

**Returns**

smallest molecular energy for the current fit

### get\_num\_modes

<span id="qiskit.chemistry.algorithms.pes_samplers.HarmonicPotential.get_num_modes" />

`HarmonicPotential.get_num_modes()`

This (1D) potential represents a single vibrational mode

**Return type**

`int`

### get\_trust\_region

<span id="qiskit.chemistry.algorithms.pes_samplers.HarmonicPotential.get_trust_region" />

`HarmonicPotential.get_trust_region()`

The potential will usually be well-defined (even if not useful) for arbitrary x so we return a fairly large interval here. Redefine in derived classes if needed.

**Return type**

`Tuple`\[`float`, `float`]

### process\_fit\_data

<span id="qiskit.chemistry.algorithms.pes_samplers.HarmonicPotential.process_fit_data" />

`classmethod HarmonicPotential.process_fit_data(xdata, ydata)`

#### Mostly for internal use. Preprocesses the data passed to fit\_to\_data()

so that only the points around the minimum are fit (which gives more accurate vibrational modes).

**Parameters**

*   **xdata** (`List`\[`float`]) – xdata to be considered
*   **ydata** (`List`\[`float`]) – ydata to be considered

**Return type**

`Tuple`\[`list`, `list`]

**Returns**

the processed data that fit better to a harmonic potential

### update\_molecule

<span id="qiskit.chemistry.algorithms.pes_samplers.HarmonicPotential.update_molecule" />

`HarmonicPotential.update_molecule(molecule)`

Updates the underlying molecule.

**Parameters**

**molecule** (`Molecule`) – chemistry molecule

**Raises**

**ValueError** – Only implemented for diatomic molecules

**Return type**

`Molecule`

### vibrational\_energy\_level

<span id="qiskit.chemistry.algorithms.pes_samplers.HarmonicPotential.vibrational_energy_level" />

`HarmonicPotential.vibrational_energy_level(n)`

Returns the n-th vibrational energy level for the current fit (in Hartrees).

**Parameters**

**n** (`int`) – vibrational mode

**Return type**

`float`

**Returns**

vibrational energy level for the current fit

### wave\_number

<span id="qiskit.chemistry.algorithms.pes_samplers.HarmonicPotential.wave_number" />

`HarmonicPotential.wave_number()`

Returns the wave number for the current fit (in cm^-1).

**Return type**

`int`

**Returns**

wave number for the current fit

