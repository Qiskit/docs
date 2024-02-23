---
title: FakeOurense
description: API reference for qiskit_ibm_runtime.fake_provider.FakeOurense
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit_ibm_runtime.fake_provider.FakeOurense
---

# FakeOurense

<span id="qiskit_ibm_runtime.fake_provider.FakeOurense" />

`FakeOurense`[GitHub](https://github.com/qiskit/qiskit-ibm-runtime/tree/stable/0.20/qiskit_ibm_runtime/fake_provider/backends/ourense/fake_ourense.py "view source code")

A fake 5 qubit backend.

```python
0 ↔ 1 ↔ 3 ↔ 4
    ↕
    2
```

FakeBackend initializer.

**Parameters**

*   **configuration** (*BackendConfiguration*) – backend configuration
*   **time\_alive** (*int*) – time to wait before returning result

## Attributes

<span id="qiskit_ibm_runtime.fake_provider.FakeOurense.backend_name" />

### backend\_name

`= 'fake_ourense'`

<span id="qiskit_ibm_runtime.fake_provider.FakeOurense.conf_filename" />

### conf\_filename

`= 'conf_ourense.json'`

<span id="qiskit_ibm_runtime.fake_provider.FakeOurense.dirname" />

### dirname

`= '/home/runner/work/qiskit-ibm-runtime/qiskit-ibm-runtime/qiskit_ibm_runtime/fake_provider/backends/ourense'`

<span id="qiskit_ibm_runtime.fake_provider.FakeOurense.options" />

### options

Return the options for the backend

The options of a backend are the dynamic parameters defining how the backend is used. These are used to control the [`run()`](#qiskit_ibm_runtime.fake_provider.FakeOurense.run "qiskit_ibm_runtime.fake_provider.FakeOurense.run") method.

<span id="qiskit_ibm_runtime.fake_provider.FakeOurense.props_filename" />

### props\_filename

`= 'props_ourense.json'`

<span id="qiskit_ibm_runtime.fake_provider.FakeOurense.version" />

### version

`= 1`

## Methods

### configuration

<span id="qiskit_ibm_runtime.fake_provider.FakeOurense.configuration" />

`configuration()`

Return the backend configuration.

**Returns**

the configuration for the backend.

**Return type**

BackendConfiguration

### name

<span id="qiskit_ibm_runtime.fake_provider.FakeOurense.name" />

`name()`

Return the backend name.

**Returns**

the name of the backend.

**Return type**

str

### properties

<span id="qiskit_ibm_runtime.fake_provider.FakeOurense.properties" />

`properties()`

Returns a snapshot of device properties

**Return type**

`BackendProperties`

### provider

<span id="qiskit_ibm_runtime.fake_provider.FakeOurense.provider" />

`provider()`

Return the backend Provider.

**Returns**

the Provider responsible for the backend.

**Return type**

Provider

### run

<span id="qiskit_ibm_runtime.fake_provider.FakeOurense.run" />

`run(run_input, **kwargs)`

Main job in simulator

### set\_options

<span id="qiskit_ibm_runtime.fake_provider.FakeOurense.set_options" />

`set_options(**fields)`

Set the options fields for the backend

This method is used to update the options of a backend. If you need to change any of the options prior to running just pass in the kwarg with the new value for the options.

**Parameters**

**fields** – The fields to update the options

**Raises**

**AttributeError** – If the field passed in is not part of the options

### status

<span id="qiskit_ibm_runtime.fake_provider.FakeOurense.status" />

`status()`

Return the backend status.

**Returns**

the status of the backend.

**Return type**

BackendStatus

