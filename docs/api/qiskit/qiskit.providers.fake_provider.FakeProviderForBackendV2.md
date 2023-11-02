---
title: FakeProviderForBackendV2
description: API reference for qiskit.providers.fake_provider.FakeProviderForBackendV2
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.providers.fake_provider.FakeProviderForBackendV2
---

# FakeProviderForBackendV2

<span id="qiskit.providers.fake_provider.FakeProviderForBackendV2" />

`qiskit.providers.fake_provider.FakeProviderForBackendV2`

Bases: [`ProviderV1`](qiskit.providers.ProviderV1 "qiskit.providers.provider.ProviderV1")

Fake provider containing fake V2 backends.

Only filtering backends by name is implemented. This class contains all fake V2 backends available in the [`qiskit.providers.fake_provider`](providers_fake_provider#module-qiskit.providers.fake_provider "qiskit.providers.fake_provider").

## Attributes

<span id="qiskit.providers.fake_provider.FakeProviderForBackendV2.version" />

### version

`= 1`

## Methods

### backends

<span id="qiskit.providers.fake_provider.FakeProviderForBackendV2.backends" />

`backends(name=None, **kwargs)`

Return a list of backends matching the specified filtering.

**Parameters**

*   **name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.12)")) – name of the backend.
*   **\*\*kwargs** – dict used for filtering.

**Returns**

**a list of Backends that match the filtering**

criteria.

**Return type**

[list](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.12)")\[[Backend](qiskit.providers.Backend "qiskit.providers.Backend")]

### get\_backend

<span id="qiskit.providers.fake_provider.FakeProviderForBackendV2.get_backend" />

`get_backend(name=None, **kwargs)`

Return a single backend matching the specified filtering.

**Parameters**

*   **name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.12)")) – name of the backend.
*   **\*\*kwargs** – dict used for filtering.

**Returns**

a backend matching the filtering.

**Return type**

[Backend](qiskit.providers.Backend "qiskit.providers.Backend")

**Raises**

[**QiskitBackendNotFoundError**](providers#qiskit.providers.QiskitBackendNotFoundError "qiskit.providers.QiskitBackendNotFoundError") – if no backend could be found or more than one backend matches the filtering criteria.

