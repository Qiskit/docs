---
title: FakeProviderForBackendV2
description: API reference for qiskit_ibm_runtime.fake_provider.FakeProviderForBackendV2
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit_ibm_runtime.fake_provider.FakeProviderForBackendV2
---

# FakeProviderForBackendV2

<span id="qiskit_ibm_runtime.fake_provider.FakeProviderForBackendV2" />

`FakeProviderForBackendV2` [GitHub](https://github.com/qiskit/qiskit-ibm-runtime/tree/main/qiskit_ibm_runtime/fake_provider/fake_provider.py "view source code")

Fake provider containing fake V2 backends.

Only filtering backends by name is implemented. This class contains all fake V2 backends available in the [`qiskit_ibm_runtime.fake_provider`](fake_provider#module-qiskit_ibm_runtime.fake_provider "qiskit_ibm_runtime.fake_provider").

## Attributes

<span id="qiskit_ibm_runtime.fake_provider.FakeProviderForBackendV2.version" />

### version

`= 1`

## Methods

### backend

<span id="qiskit_ibm_runtime.fake_provider.FakeProviderForBackendV2.backend" />

`backend(name=None, **kwargs)`

Filter backends in provider by name.

### backends

<span id="qiskit_ibm_runtime.fake_provider.FakeProviderForBackendV2.backends" />

`backends(name=None, **kwargs)`

Return a list of backends matching the specified filtering.

**Parameters**

*   **name** (*str*) – name of the backend.
*   **\*\*kwargs** – dict used for filtering.

**Returns**

**a list of Backends that match the filtering**

criteria.

**Return type**

list\[Backend]

### get\_backend

<span id="qiskit_ibm_runtime.fake_provider.FakeProviderForBackendV2.get_backend" />

`get_backend(name=None, **kwargs)`

Return a single backend matching the specified filtering.

**Parameters**

*   **name** (*str*) – name of the backend.
*   **\*\*kwargs** – dict used for filtering.

**Returns**

a backend matching the filtering.

**Return type**

Backend

**Raises**

**QiskitBackendNotFoundError** – if no backend could be found or more than one backend matches the filtering criteria.

