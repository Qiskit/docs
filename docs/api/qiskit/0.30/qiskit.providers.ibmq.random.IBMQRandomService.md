---
title: IBMQRandomService
description: API reference for qiskit.providers.ibmq.random.IBMQRandomService
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.providers.ibmq.random.IBMQRandomService
---

# IBMQRandomService

<span id="qiskit.providers.ibmq.random.IBMQRandomService" />

`IBMQRandomService(provider)`[GitHub](https://github.com/qiskit/qiskit-ibmq-provider/tree/stable/0.16/qiskit/providers/ibmq/random/ibmqrandomservice.py "view source code")

Bases: `object`

Random number services for an IBM Quantum Experience account provider.

Represent a namespace for random number services available to this provider. An instance of this class is used as an attribute to the [`AccountProvider`](qiskit.providers.ibmq.AccountProvider "qiskit.providers.ibmq.AccountProvider") class. This allows a convenient way to query for all services or to access a specific one:

```python
random_services = provider.random.services()
extractor = provider.random.get_extractor('cqc_extractor')
extractor = provider.random.cqc_extractor  # Short hand for above.
```

IBMQRandomService constructor.

**Parameters**

**provider** (`AccountProvider`) – IBM Quantum Experience account provider.

## Methods

### get\_service

<span id="qiskit.providers.ibmq.random.IBMQRandomService.get_service" />

`IBMQRandomService.get_service(name)`[GitHub](https://github.com/qiskit/qiskit-ibmq-provider/tree/stable/0.16/qiskit/providers/ibmq/random/ibmqrandomservice.py "view source code")

Return the random number service with the given name.

**Parameters**

**name** (`str`) – Name of the service.

**Return type**

`BaseRandomService`

**Returns**

Service with the given name.

**Raises**

[**IBMQError**](qiskit.providers.ibmq.IBMQError "qiskit.providers.ibmq.IBMQError") – If the service cannot be found.

### services

<span id="qiskit.providers.ibmq.random.IBMQRandomService.services" />

`IBMQRandomService.services()`[GitHub](https://github.com/qiskit/qiskit-ibmq-provider/tree/stable/0.16/qiskit/providers/ibmq/random/ibmqrandomservice.py "view source code")

Return all random number services available to this account.

**Return type**

`List`\[`BaseRandomService`]

