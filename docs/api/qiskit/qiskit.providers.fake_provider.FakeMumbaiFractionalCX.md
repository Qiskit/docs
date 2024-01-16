---
title: FakeMumbaiFractionalCX
description: API reference for qiskit.providers.fake_provider.FakeMumbaiFractionalCX
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.providers.fake_provider.FakeMumbaiFractionalCX
---

# FakeMumbaiFractionalCX

<span id="qiskit.providers.fake_provider.FakeMumbaiFractionalCX" />

`qiskit.providers.fake_provider.FakeMumbaiFractionalCX`

Bases: [`BackendV2`](qiskit.providers.BackendV2 "qiskit.providers.backend.BackendV2")

A fake mumbai backend.

Initialize a BackendV2 based backend

**Parameters**

*   **provider** – An optional backwards reference to the [`Provider`](qiskit.providers.Provider "qiskit.providers.Provider") object that the backend is from
*   **name** – An optional name for the backend
*   **description** – An optional description of the backend
*   **online\_date** – An optional datetime the backend was brought online
*   **backend\_version** – An optional backend version string. This differs from the [`version`](qiskit.providers.BackendV2#version "qiskit.providers.BackendV2.version") attribute as [`version`](qiskit.providers.BackendV2#version "qiskit.providers.BackendV2.version") is for the abstract [`Backend`](qiskit.providers.Backend "qiskit.providers.Backend") abstract interface version of the object while `backend_version` is for versioning the backend itself.
*   **fields** – kwargs for the values to use to override the default options.

**Raises**

[**AttributeError**](https://docs.python.org/3/library/exceptions.html#AttributeError "(in Python v3.12)") – If a field is specified that’s outside the backend’s options

## Attributes

<span id="qiskit.providers.fake_provider.FakeMumbaiFractionalCX.coupling_map" />

### coupling\_map

Return the [`CouplingMap`](qiskit.transpiler.CouplingMap "qiskit.transpiler.CouplingMap") object

<span id="qiskit.providers.fake_provider.FakeMumbaiFractionalCX.dt" />

### dt

Return the system time resolution of input signals

This is required to be implemented if the backend supports Pulse scheduling.

**Returns**

The input signal timestep in seconds. If the backend doesn’t define `dt`, `None` will be returned.

<span id="qiskit.providers.fake_provider.FakeMumbaiFractionalCX.dtm" />

### dtm

Return the system time resolution of output signals

**Returns**

The output signal timestep in seconds.

**Raises**

[**NotImplementedError**](https://docs.python.org/3/library/exceptions.html#NotImplementedError "(in Python v3.12)") – if the backend doesn’t support querying the output signal timestep

<span id="qiskit.providers.fake_provider.FakeMumbaiFractionalCX.instruction_durations" />

### instruction\_durations

Return the [`InstructionDurations`](qiskit.transpiler.InstructionDurations "qiskit.transpiler.InstructionDurations") object.

<span id="qiskit.providers.fake_provider.FakeMumbaiFractionalCX.instruction_schedule_map" />

### instruction\_schedule\_map

Return the [`InstructionScheduleMap`](qiskit.pulse.InstructionScheduleMap "qiskit.pulse.InstructionScheduleMap") for the instructions defined in this backend’s target.

<span id="qiskit.providers.fake_provider.FakeMumbaiFractionalCX.instructions" />

### instructions

A list of Instruction tuples on the backend of the form `(instruction, (qubits)`

<span id="qiskit.providers.fake_provider.FakeMumbaiFractionalCX.max_circuits" />

### max\_circuits

<span id="qiskit.providers.fake_provider.FakeMumbaiFractionalCX.meas_map" />

### meas\_map

Return the grouping of measurements which are multiplexed

This is required to be implemented if the backend supports Pulse scheduling.

**Returns**

The grouping of measurements which are multiplexed

**Raises**

[**NotImplementedError**](https://docs.python.org/3/library/exceptions.html#NotImplementedError "(in Python v3.12)") – if the backend doesn’t support querying the measurement mapping

<span id="qiskit.providers.fake_provider.FakeMumbaiFractionalCX.num_qubits" />

### num\_qubits

Return the number of qubits the backend has.

<span id="qiskit.providers.fake_provider.FakeMumbaiFractionalCX.operation_names" />

### operation\_names

A list of instruction names that the backend supports.

<span id="qiskit.providers.fake_provider.FakeMumbaiFractionalCX.operations" />

### operations

A list of [`Instruction`](qiskit.circuit.Instruction "qiskit.circuit.Instruction") instances that the backend supports.

<span id="qiskit.providers.fake_provider.FakeMumbaiFractionalCX.options" />

### options

Return the options for the backend

The options of a backend are the dynamic parameters defining how the backend is used. These are used to control the [`run()`](#qiskit.providers.fake_provider.FakeMumbaiFractionalCX.run "qiskit.providers.fake_provider.FakeMumbaiFractionalCX.run") method.

<span id="qiskit.providers.fake_provider.FakeMumbaiFractionalCX.provider" />

### provider

Return the backend Provider.

**Returns**

the Provider responsible for the backend.

**Return type**

[Provider](qiskit.providers.Provider "qiskit.providers.Provider")

<span id="qiskit.providers.fake_provider.FakeMumbaiFractionalCX.target" />

### target

<span id="qiskit.providers.fake_provider.FakeMumbaiFractionalCX.version" />

### version

`= 2`

<span id="qiskit.providers.fake_provider.FakeMumbaiFractionalCX.name" />

### name

Name of the backend.

<span id="qiskit.providers.fake_provider.FakeMumbaiFractionalCX.description" />

### description

Optional human-readable description.

<span id="qiskit.providers.fake_provider.FakeMumbaiFractionalCX.online_date" />

### online\_date

Date that the backend came online.

<span id="qiskit.providers.fake_provider.FakeMumbaiFractionalCX.backend_version" />

### backend\_version

Version of the backend being provided. This is not the same as [`BackendV2.version`](qiskit.providers.BackendV2#version "qiskit.providers.BackendV2.version"), which is the version of the [`Backend`](qiskit.providers.Backend "qiskit.providers.Backend") abstract interface.

## Methods

### acquire\_channel

<span id="qiskit.providers.fake_provider.FakeMumbaiFractionalCX.acquire_channel" />

`acquire_channel(qubit)`

Return the acquisition channel for the given qubit.

This is required to be implemented if the backend supports Pulse scheduling.

**Returns**

The Qubit measurement acquisition line.

**Return type**

[AcquireChannel](qiskit.pulse.channels.AcquireChannel "qiskit.pulse.channels.AcquireChannel")

**Raises**

[**NotImplementedError**](https://docs.python.org/3/library/exceptions.html#NotImplementedError "(in Python v3.12)") – if the backend doesn’t support querying the measurement mapping

### control\_channel

<span id="qiskit.providers.fake_provider.FakeMumbaiFractionalCX.control_channel" />

`control_channel(qubits)`

Return the secondary drive channel for the given qubit

This is typically utilized for controlling multiqubit interactions. This channel is derived from other channels.

This is required to be implemented if the backend supports Pulse scheduling.

**Parameters**

**qubits** ([*Iterable*](https://docs.python.org/3/library/typing.html#typing.Iterable "(in Python v3.12)")*\[*[*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")*]*) – Tuple or list of qubits of the form `(control_qubit, target_qubit)`.

**Returns**

The multi qubit control line.

**Return type**

List\[[ControlChannel](qiskit.pulse.channels.ControlChannel "qiskit.pulse.channels.ControlChannel")]

**Raises**

[**NotImplementedError**](https://docs.python.org/3/library/exceptions.html#NotImplementedError "(in Python v3.12)") – if the backend doesn’t support querying the measurement mapping

### drive\_channel

<span id="qiskit.providers.fake_provider.FakeMumbaiFractionalCX.drive_channel" />

`drive_channel(qubit)`

Return the drive channel for the given qubit.

This is required to be implemented if the backend supports Pulse scheduling.

**Returns**

The Qubit drive channel

**Return type**

[DriveChannel](qiskit.pulse.channels.DriveChannel "qiskit.pulse.channels.DriveChannel")

**Raises**

[**NotImplementedError**](https://docs.python.org/3/library/exceptions.html#NotImplementedError "(in Python v3.12)") – if the backend doesn’t support querying the measurement mapping

### measure\_channel

<span id="qiskit.providers.fake_provider.FakeMumbaiFractionalCX.measure_channel" />

`measure_channel(qubit)`

Return the measure stimulus channel for the given qubit.

This is required to be implemented if the backend supports Pulse scheduling.

**Returns**

The Qubit measurement stimulus line

**Return type**

[MeasureChannel](qiskit.pulse.channels.MeasureChannel "qiskit.pulse.channels.MeasureChannel")

**Raises**

[**NotImplementedError**](https://docs.python.org/3/library/exceptions.html#NotImplementedError "(in Python v3.12)") – if the backend doesn’t support querying the measurement mapping

### qubit\_properties

<span id="qiskit.providers.fake_provider.FakeMumbaiFractionalCX.qubit_properties" />

`qubit_properties(qubit)`

Return QubitProperties for a given qubit.

If there are no defined or the backend doesn’t support querying these details this method does not need to be implemented.

**Parameters**

**qubit** – The qubit to get the [`QubitProperties`](qiskit.providers.QubitProperties "qiskit.providers.QubitProperties") object for. This can be a single integer for 1 qubit or a list of qubits and a list of [`QubitProperties`](qiskit.providers.QubitProperties "qiskit.providers.QubitProperties") objects will be returned in the same order

**Returns**

The [`QubitProperties`](qiskit.providers.QubitProperties "qiskit.providers.QubitProperties") object for the specified qubit. If a list of qubits is provided a list will be returned. If properties are missing for a qubit this can be `None`.

**Raises**

[**NotImplementedError**](https://docs.python.org/3/library/exceptions.html#NotImplementedError "(in Python v3.12)") – if the backend doesn’t support querying the qubit properties

### run

<span id="qiskit.providers.fake_provider.FakeMumbaiFractionalCX.run" />

`run(run_input, **options)`

Run on the backend.

This method returns a [`Job`](qiskit.providers.Job "qiskit.providers.Job") object that runs circuits. Depending on the backend this may be either an async or sync call. It is at the discretion of the provider to decide whether running should block until the execution is finished or not: the Job class can handle either situation.

**Parameters**

*   **run\_input** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")  *or*[*Schedule*](qiskit.pulse.Schedule "qiskit.pulse.Schedule")  *or*[*ScheduleBlock*](qiskit.pulse.ScheduleBlock "qiskit.pulse.ScheduleBlock")  *or*[*list*](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.12)")) – An individual or a list of [`QuantumCircuit`](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit"), [`ScheduleBlock`](qiskit.pulse.ScheduleBlock "qiskit.pulse.ScheduleBlock"), or [`Schedule`](qiskit.pulse.Schedule "qiskit.pulse.Schedule") objects to run on the backend.
*   **options** – Any kwarg options to pass to the backend for running the config. If a key is also present in the options attribute/object then the expectation is that the value specified will be used instead of what’s set in the options object.

**Returns**

The job object for the run

**Return type**

[Job](qiskit.providers.Job "qiskit.providers.Job")

### set\_options

<span id="qiskit.providers.fake_provider.FakeMumbaiFractionalCX.set_options" />

`set_options(**fields)`

Set the options fields for the backend

This method is used to update the options of a backend. If you need to change any of the options prior to running just pass in the kwarg with the new value for the options.

**Parameters**

**fields** – The fields to update the options

**Raises**

[**AttributeError**](https://docs.python.org/3/library/exceptions.html#AttributeError "(in Python v3.12)") – If the field passed in is not part of the options

