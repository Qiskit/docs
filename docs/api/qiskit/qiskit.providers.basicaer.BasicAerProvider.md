---
title: BasicAerProvider
description: API reference for qiskit.providers.basicaer.BasicAerProvider
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.providers.basicaer.BasicAerProvider
---

# BasicAerProvider

<span id="qiskit.providers.basicaer.BasicAerProvider" />

`qiskit.providers.basicaer.BasicAerProvider`

Bases: [`ProviderV1`](qiskit.providers.ProviderV1 "qiskit.providers.provider.ProviderV1")

Provider for Basic Aer backends.

## Attributes

<span id="qiskit.providers.basicaer.BasicAerProvider.version" />

### version

`= 1`

## Methods

### backends

<span id="qiskit.providers.basicaer.BasicAerProvider.backends" />

`backends(name=None, filters=None, **kwargs)`

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

<span id="qiskit.providers.basicaer.BasicAerProvider.get_backend" />

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

