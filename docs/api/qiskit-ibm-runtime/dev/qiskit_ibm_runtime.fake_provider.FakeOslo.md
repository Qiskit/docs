---
title: FakeOslo
description: API reference for qiskit_ibm_runtime.fake_provider.FakeOslo
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit_ibm_runtime.fake_provider.FakeOslo
---

# FakeOslo

<span id="qiskit_ibm_runtime.fake_provider.FakeOslo" />

`FakeOslo`[GitHub](https://github.com/qiskit/qiskit-ibm-runtime/tree/main/qiskit_ibm_runtime/fake_provider/backends/oslo/fake_oslo.py "view source code")

A fake 7 qubit backend.

FakeBackendV2 initializer.

## Attributes

<span id="qiskit_ibm_runtime.fake_provider.FakeOslo.backend_name" />

### backend\_name

`= 'fake_oslo'`

<span id="qiskit_ibm_runtime.fake_provider.FakeOslo.conf_filename" />

### conf\_filename

`= 'conf_oslo.json'`

<span id="qiskit_ibm_runtime.fake_provider.FakeOslo.coupling_map" />

### coupling\_map

Return the `CouplingMap` object

<span id="qiskit_ibm_runtime.fake_provider.FakeOslo.defs_filename" />

### defs\_filename

`= 'defs_oslo.json'`

<span id="qiskit_ibm_runtime.fake_provider.FakeOslo.dirname" />

### dirname

`= '/home/runner/work/qiskit-ibm-runtime/qiskit-ibm-runtime/qiskit_ibm_runtime/fake_provider/backends/oslo'`

<span id="qiskit_ibm_runtime.fake_provider.FakeOslo.dt" />

### dt

Return the system time resolution of input signals

This is required to be implemented if the backend supports Pulse scheduling.

**Return type**

`Optional`\[`float`]

**Returns**

The input signal timestep in seconds. If the backend doesn’t define `dt`, `None` will be returned.

<span id="qiskit_ibm_runtime.fake_provider.FakeOslo.dtm" />

### dtm

Return the system time resolution of output signals

**Return type**

`float`

**Returns**

The output signal timestep in seconds.

<span id="qiskit_ibm_runtime.fake_provider.FakeOslo.instruction_durations" />

### instruction\_durations

Return the `InstructionDurations` object.

<span id="qiskit_ibm_runtime.fake_provider.FakeOslo.instruction_schedule_map" />

### instruction\_schedule\_map

Return the `InstructionScheduleMap` for the instructions defined in this backend’s target.

<span id="qiskit_ibm_runtime.fake_provider.FakeOslo.instructions" />

### instructions

A list of Instruction tuples on the backend of the form `(instruction, (qubits)`

**Return type**

`List`\[`Tuple`\[`Instruction`, `Tuple`\[`int`]]]

<span id="qiskit_ibm_runtime.fake_provider.FakeOslo.max_circuits" />

### max\_circuits

**Return type**

`None`

<span id="qiskit_ibm_runtime.fake_provider.FakeOslo.meas_map" />

### meas\_map

Return the grouping of measurements which are multiplexed This is required to be implemented if the backend supports Pulse scheduling.

**Return type**

`List`\[`List`\[`int`]]

**Returns**

The grouping of measurements which are multiplexed

<span id="qiskit_ibm_runtime.fake_provider.FakeOslo.num_qubits" />

### num\_qubits

Return the number of qubits the backend has.

**Return type**

`int`

<span id="qiskit_ibm_runtime.fake_provider.FakeOslo.operation_names" />

### operation\_names

A list of instruction names that the backend supports.

**Return type**

`List`\[`str`]

<span id="qiskit_ibm_runtime.fake_provider.FakeOslo.operations" />

### operations

A list of `Instruction` instances that the backend supports.

**Return type**

`List`\[`Instruction`]

<span id="qiskit_ibm_runtime.fake_provider.FakeOslo.options" />

### options

Return the options for the backend

The options of a backend are the dynamic parameters defining how the backend is used. These are used to control the [`run()`](#qiskit_ibm_runtime.fake_provider.FakeOslo.run "qiskit_ibm_runtime.fake_provider.FakeOslo.run") method.

<span id="qiskit_ibm_runtime.fake_provider.FakeOslo.props_filename" />

### props\_filename

`= 'props_oslo.json'`

<span id="qiskit_ibm_runtime.fake_provider.FakeOslo.provider" />

### provider

Return the backend Provider.

**Returns**

the Provider responsible for the backend.

**Return type**

Provider

<span id="qiskit_ibm_runtime.fake_provider.FakeOslo.target" />

### target

A `qiskit.transpiler.Target` object for the backend.

**Return type**

Target

<span id="qiskit_ibm_runtime.fake_provider.FakeOslo.version" />

### version

`= 2`

<span id="qiskit_ibm_runtime.fake_provider.FakeOslo.name" />

### name

Name of the backend.

<span id="qiskit_ibm_runtime.fake_provider.FakeOslo.description" />

### description

Optional human-readable description.

<span id="qiskit_ibm_runtime.fake_provider.FakeOslo.online_date" />

### online\_date

Date that the backend came online.

<span id="qiskit_ibm_runtime.fake_provider.FakeOslo.backend_version" />

### backend\_version

Version of the backend being provided. This is not the same as `BackendV2.version`, which is the version of the `Backend` abstract interface.

## Methods

### acquire\_channel

<span id="qiskit_ibm_runtime.fake_provider.FakeOslo.acquire_channel" />

`acquire_channel(qubit)`

Return the acquisition channel for the given qubit.

This is required to be implemented if the backend supports Pulse scheduling.

**Returns**

The Qubit measurement acquisition line.

**Return type**

AcquireChannel

### control\_channel

<span id="qiskit_ibm_runtime.fake_provider.FakeOslo.control_channel" />

`control_channel(qubits)`

Return the secondary drive channel for the given qubit

This is typically utilized for controlling multiqubit interactions. This channel is derived from other channels.

This is required to be implemented if the backend supports Pulse scheduling.

**Parameters**

**qubits** (`Iterable`\[`int`]) – Tuple or list of qubits of the form `(control_qubit, target_qubit)`.

**Returns**

The multi qubit control line.

**Return type**

List\[ControlChannel]

### drive\_channel

<span id="qiskit_ibm_runtime.fake_provider.FakeOslo.drive_channel" />

`drive_channel(qubit)`

Return the drive channel for the given qubit.

This is required to be implemented if the backend supports Pulse scheduling.

**Returns**

The Qubit drive channel

**Return type**

DriveChannel

### measure\_channel

<span id="qiskit_ibm_runtime.fake_provider.FakeOslo.measure_channel" />

`measure_channel(qubit)`

Return the measure stimulus channel for the given qubit.

This is required to be implemented if the backend supports Pulse scheduling.

**Returns**

The Qubit measurement stimulus line

**Return type**

MeasureChannel

### qubit\_properties

<span id="qiskit_ibm_runtime.fake_provider.FakeOslo.qubit_properties" />

`qubit_properties(qubit)`

Return QubitProperties for a given qubit.

If there are no defined or the backend doesn’t support querying these details this method does not need to be implemented.

**Parameters**

**qubit** (`Union`\[`int`, `List`\[`int`]]) – The qubit to get the `QubitProperties` object for. This can be a single integer for 1 qubit or a list of qubits and a list of `QubitProperties` objects will be returned in the same order

**Return type**

`Union`\[`QubitProperties`, `List`\[`QubitProperties`]]

**Returns**

The `QubitProperties` object for the specified qubit. If a list of qubits is provided a list will be returned. If properties are missing for a qubit this can be `None`.

**Raises**

**NotImplementedError** – if the backend doesn’t support querying the qubit properties

### run

<span id="qiskit_ibm_runtime.fake_provider.FakeOslo.run" />

`run(run_input, **options)`

Run on the fake backend using a simulator.

This method runs circuit jobs (an individual or a list of QuantumCircuit ) and pulse jobs (an individual or a list of Schedule or ScheduleBlock) using BasicAer simulator/ BasicSimulator or Aer simulator and returns a `Job` object.

If qiskit-aer is installed, jobs will be run using AerSimulator with noise model of the fake backend. Otherwise, jobs will be run using BasicAer simulator/ BasicSimulator simulator without noise.

Currently noisy simulation of a pulse job is not supported yet in FakeBackendV2.

**Parameters**

*   **run\_input** (*QuantumCircuit or Schedule or ScheduleBlock or list*) – An individual or a list of `QuantumCircuit`, `ScheduleBlock`, or `Schedule` objects to run on the backend.
*   **options** – Any kwarg options to pass to the backend for running the config. If a key is also present in the options attribute/object then the expectation is that the value specified will be used instead of what’s set in the options object.

**Returns**

The job object for the run

**Return type**

Job

**Raises**

**QiskitError** – If a pulse job is supplied and qiskit-aer is not installed.

### set\_options

<span id="qiskit_ibm_runtime.fake_provider.FakeOslo.set_options" />

`set_options(**fields)`

Set the options fields for the backend

This method is used to update the options of a backend. If you need to change any of the options prior to running just pass in the kwarg with the new value for the options.

**Parameters**

**fields** – The fields to update the options

**Raises**

**AttributeError** – If the field passed in is not part of the options

