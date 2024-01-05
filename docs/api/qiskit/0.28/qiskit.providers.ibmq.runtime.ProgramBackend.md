---
title: ProgramBackend
description: API reference for qiskit.providers.ibmq.runtime.ProgramBackend
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.providers.ibmq.runtime.ProgramBackend
---

# qiskit.providers.ibmq.runtime.ProgramBackend

<span id="qiskit.providers.ibmq.runtime.ProgramBackend" />

`ProgramBackend(configuration, provider=None, **fields)`

Base class for a program backend.

This is a [`Backend`](qiskit.providers.Backend "qiskit.providers.Backend") class for runtime programs to submit circuits.

Initialize a backend class

**Parameters**

*   **configuration** ([*BackendConfiguration*](qiskit.providers.models.BackendConfiguration "qiskit.providers.models.BackendConfiguration")) – A backend configuration object for the backend object.
*   **provider** ([*qiskit.providers.Provider*](qiskit.providers.Provider "qiskit.providers.Provider")) – Optionally, the provider object that this Backend comes from.
*   **fields** – kwargs for the values to use to override the default options.

**Raises**

**AttributeError** – if input field not a valid options

### \_\_init\_\_

<span id="qiskit.providers.ibmq.runtime.ProgramBackend.__init__" />

`__init__(configuration, provider=None, **fields)`

Initialize a backend class

**Parameters**

*   **configuration** ([*BackendConfiguration*](qiskit.providers.models.BackendConfiguration "qiskit.providers.models.BackendConfiguration")) – A backend configuration object for the backend object.
*   **provider** ([*qiskit.providers.Provider*](qiskit.providers.Provider "qiskit.providers.Provider")) – Optionally, the provider object that this Backend comes from.
*   **fields** – kwargs for the values to use to override the default options.

**Raises**

**AttributeError** – if input field not a valid options

## Methods

## Attributes

### configuration

<span id="qiskit.providers.ibmq.runtime.ProgramBackend.configuration" />

`configuration()`

Return the backend configuration.

**Returns**

the configuration for the backend.

**Return type**

[BackendConfiguration](qiskit.providers.models.BackendConfiguration "qiskit.providers.models.BackendConfiguration")

### name

<span id="qiskit.providers.ibmq.runtime.ProgramBackend.name" />

`name()`

Return the backend name.

**Returns**

the name of the backend.

**Return type**

str

### options

<span id="qiskit.providers.ibmq.runtime.ProgramBackend.options" />

`property options`

Return the options for the backend

The options of a backend are the dynamic parameters defining how the backend is used. These are used to control the [`run()`](#qiskit.providers.ibmq.runtime.ProgramBackend.run "qiskit.providers.ibmq.runtime.ProgramBackend.run") method.

### properties

<span id="qiskit.providers.ibmq.runtime.ProgramBackend.properties" />

`properties()`

Return the backend properties.

**Returns**

the configuration for the backend. If the backend does not support properties, it returns `None`.

**Return type**

[BackendProperties](qiskit.providers.models.BackendProperties "qiskit.providers.models.BackendProperties")

### provider

<span id="qiskit.providers.ibmq.runtime.ProgramBackend.provider" />

`provider()`

Return the backend Provider.

**Returns**

the Provider responsible for the backend.

**Return type**

[Provider](qiskit.providers.Provider "qiskit.providers.Provider")

### run

<span id="qiskit.providers.ibmq.runtime.ProgramBackend.run" />

`abstract run(circuits, timeout=None, **run_config)`

Run on the backend.

Runtime circuit execution is synchronous, and control will not go back until the execution finishes. You can use the timeout parameter to set a timeout value to wait for the execution to finish. Note that if the execution times out, circuit execution results will not be available.

**Parameters**

*   **circuits** (`Union`\[`QasmQobj`, `PulseQobj`, `QuantumCircuit`, `Schedule`, `List`\[`Union`\[`QuantumCircuit`, `Schedule`]]]) – An individual or a list of `QuantumCircuit` or [`Schedule`](qiskit.pulse.Schedule "qiskit.pulse.Schedule") objects to run on the backend. A [`QasmQobj`](qiskit.qobj.QasmQobj "qiskit.qobj.QasmQobj") or a [`PulseQobj`](qiskit.qobj.PulseQobj "qiskit.qobj.PulseQobj") object is also supported but is deprecated.
*   **timeout** (`Optional`\[`int`]) – Seconds to wait for circuit execution to finish.
*   **\*\*run\_config** – Extra arguments used to configure the run.

**Return type**

`JobV1`

**Returns**

The job to be executed.

**Raises**

*   [**IBMQBackendApiError**](qiskit.providers.ibmq.IBMQBackendApiError "qiskit.providers.ibmq.IBMQBackendApiError") – If an unexpected error occurred while submitting the job.
*   [**IBMQBackendApiProtocolError**](qiskit.providers.ibmq.IBMQBackendApiProtocolError "qiskit.providers.ibmq.IBMQBackendApiProtocolError") – If an unexpected value received from the server.
*   [**IBMQBackendValueError**](qiskit.providers.ibmq.IBMQBackendValueError "qiskit.providers.ibmq.IBMQBackendValueError") – If an input parameter value is not valid.

### set\_options

<span id="qiskit.providers.ibmq.runtime.ProgramBackend.set_options" />

`set_options(**fields)`

Set the options fields for the backend

This method is used to update the options of a backend. If you need to change any of the options prior to running just pass in the kwarg with the new value for the options.

**Parameters**

**fields** – The fields to update the options

**Raises**

**AttributeError** – If the field passed in is not part of the options

### status

<span id="qiskit.providers.ibmq.runtime.ProgramBackend.status" />

`status()`

Return the backend status.

**Returns**

the status of the backend.

**Return type**

[BackendStatus](qiskit.providers.models.BackendStatus "qiskit.providers.models.BackendStatus")

