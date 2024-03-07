---
title: FakeYorktown
description: API reference for qiskit_ibm_runtime.fake_provider.FakeYorktown
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit_ibm_runtime.fake_provider.FakeYorktown
---

# FakeYorktown

<span id="qiskit_ibm_runtime.fake_provider.FakeYorktown" />

`FakeYorktown` [GitHub](https://github.com/Qiskit/qiskit-ibm-runtime/tree/testing/qiskit_ibm_runtime/fake_provider/backends/yorktown/fake_yorktown.py#L39-L54 "view source code")

A fake 5 qubit backend.

```python
    1
  / |
0 - 2 - 3
    | /
    4
```

FakeBackend initializer.

**Parameters**

*   **configuration** (*BackendConfiguration*) – backend configuration
*   **time\_alive** (*int*) – time to wait before returning result

## Attributes

<span id="qiskit_ibm_runtime.fake_provider.FakeYorktown.backend_name" />

### backend\_name

`= 'fake_yorktown'`

<span id="qiskit_ibm_runtime.fake_provider.FakeYorktown.conf_filename" />

### conf\_filename

`= 'conf_yorktown.json'`

<span id="qiskit_ibm_runtime.fake_provider.FakeYorktown.dirname" />

### dirname

`= '/home/runner/work/qiskit-ibm-runtime/qiskit-ibm-runtime/qiskit_ibm_runtime/fake_provider/backends/yorktown'`

<span id="qiskit_ibm_runtime.fake_provider.FakeYorktown.options" />

### options

Return the options for the backend

The options of a backend are the dynamic parameters defining how the backend is used. These are used to control the [`run()`](#qiskit_ibm_runtime.fake_provider.FakeYorktown.run "qiskit_ibm_runtime.fake_provider.FakeYorktown.run") method.

<span id="qiskit_ibm_runtime.fake_provider.FakeYorktown.props_filename" />

### props\_filename

`= 'props_yorktown.json'`

<span id="qiskit_ibm_runtime.fake_provider.FakeYorktown.version" />

### version

`= 1`

## Methods

### configuration

<span id="qiskit_ibm_runtime.fake_provider.FakeYorktown.configuration" />

`configuration()`

Return the backend configuration.

**Returns**

the configuration for the backend.

**Return type**

BackendConfiguration

### name

<span id="qiskit_ibm_runtime.fake_provider.FakeYorktown.name" />

`name()`

Return the backend name.

**Returns**

the name of the backend.

**Return type**

str

### properties

<span id="qiskit_ibm_runtime.fake_provider.FakeYorktown.properties" />

`properties()` [GitHub](https://github.com/Qiskit/qiskit-ibm-runtime/tree/testing/qiskit_ibm_runtime/fake_provider/fake_qasm_backend.py#L44-L48 "view source code")

Returns a snapshot of device properties

**Return type**

`BackendProperties`

### provider

<span id="qiskit_ibm_runtime.fake_provider.FakeYorktown.provider" />

`provider()`

Return the backend Provider.

**Returns**

the Provider responsible for the backend.

**Return type**

Provider

### run

<span id="qiskit_ibm_runtime.fake_provider.FakeYorktown.run" />

`run(run_input, **kwargs)` [GitHub](https://github.com/Qiskit/qiskit-ibm-runtime/tree/testing/qiskit_ibm_runtime/fake_provider/fake_backend.py#L545-L574 "view source code")

Main job in simulator

### set\_options

<span id="qiskit_ibm_runtime.fake_provider.FakeYorktown.set_options" />

`set_options(**fields)`

Set the options fields for the backend

This method is used to update the options of a backend. If you need to change any of the options prior to running just pass in the kwarg with the new value for the options.

**Parameters**

**fields** – The fields to update the options

**Raises**

**AttributeError** – If the field passed in is not part of the options

### status

<span id="qiskit_ibm_runtime.fake_provider.FakeYorktown.status" />

`status()`

Return the backend status.

**Returns**

the status of the backend.

**Return type**

BackendStatus

