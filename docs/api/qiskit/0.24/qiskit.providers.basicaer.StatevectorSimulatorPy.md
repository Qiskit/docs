---
title: StatevectorSimulatorPy
description: API reference for qiskit.providers.basicaer.StatevectorSimulatorPy
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.providers.basicaer.StatevectorSimulatorPy
---

<span id="qiskit-providers-basicaer-statevectorsimulatorpy" />

# qiskit.providers.basicaer.StatevectorSimulatorPy

<span id="qiskit.providers.basicaer.StatevectorSimulatorPy" />

`StatevectorSimulatorPy(configuration=None, provider=None)`

Python statevector simulator.

Base class for backends.

This method should initialize the module and its configuration, and raise an exception if a component of the module is not available.

**Parameters**

*   **configuration** ([*BackendConfiguration*](qiskit.providers.models.BackendConfiguration "qiskit.providers.models.BackendConfiguration")) – backend configuration
*   **provider** ([*BaseProvider*](qiskit.providers.BaseProvider "qiskit.providers.BaseProvider")) – provider responsible for this backend

**Raises**

**QiskitError** – if an error occurred when instantiating the backend.

### \_\_init\_\_

<span id="qiskit.providers.basicaer.StatevectorSimulatorPy.__init__" />

`__init__(configuration=None, provider=None)`

Base class for backends.

This method should initialize the module and its configuration, and raise an exception if a component of the module is not available.

**Parameters**

*   **configuration** ([*BackendConfiguration*](qiskit.providers.models.BackendConfiguration "qiskit.providers.models.BackendConfiguration")) – backend configuration
*   **provider** ([*BaseProvider*](qiskit.providers.BaseProvider "qiskit.providers.BaseProvider")) – provider responsible for this backend

**Raises**

**QiskitError** – if an error occurred when instantiating the backend.

## Methods

## Attributes

### configuration

<span id="qiskit.providers.basicaer.StatevectorSimulatorPy.configuration" />

`configuration()`

Return the backend configuration.

**Returns**

the configuration for the backend.

**Return type**

[BackendConfiguration](qiskit.providers.models.BackendConfiguration "qiskit.providers.models.BackendConfiguration")

### name

<span id="qiskit.providers.basicaer.StatevectorSimulatorPy.name" />

`name()`

Return the backend name.

**Returns**

the name of the backend.

**Return type**

str

### properties

<span id="qiskit.providers.basicaer.StatevectorSimulatorPy.properties" />

`properties()`

Return the backend properties.

**Returns**

the configuration for the backend. If the backend does not support properties, it returns `None`.

**Return type**

[BackendProperties](qiskit.providers.models.BackendProperties "qiskit.providers.models.BackendProperties")

### provider

<span id="qiskit.providers.basicaer.StatevectorSimulatorPy.provider" />

`provider()`

Return the backend Provider.

**Returns**

the Provider responsible for the backend.

**Return type**

[BaseProvider](qiskit.providers.BaseProvider "qiskit.providers.BaseProvider")

### run

<span id="qiskit.providers.basicaer.StatevectorSimulatorPy.run" />

`run(qobj, backend_options=None)`

Run qobj asynchronously.

**Parameters**

*   **qobj** ([*Qobj*](qiskit.qobj.Qobj "qiskit.qobj.Qobj")) – payload of the experiment
*   **backend\_options** (*dict*) – backend options

**Returns**

derived from BaseJob

**Return type**

[BasicAerJob](qiskit.providers.basicaer.BasicAerJob "qiskit.providers.basicaer.BasicAerJob")

Additional Information:

```python
backend_options: Is a dict of options for the backend. It may contain
    * "initial_statevector": vector_like
    * "chop_threshold": double

The "initial_statevector" option specifies a custom initial
initial statevector for the simulator to be used instead of the all
zero state. This size of this vector must be correct for the number
of qubits in all experiments in the qobj.

The "chop_threshold" option specifies a truncation value for
setting small values to zero in the output statevector. The default
value is 1e-15.

Example::

    backend_options = {
        "initial_statevector": np.array([1, 0, 0, 1j]) / np.sqrt(2),
        "chop_threshold": 1e-15
    }
```

### run\_experiment

<span id="qiskit.providers.basicaer.StatevectorSimulatorPy.run_experiment" />

`run_experiment(experiment)`

Run an experiment (circuit) and return a single experiment result.

**Parameters**

**experiment** (*QobjExperiment*) – experiment from qobj experiments list

**Returns**

A result dictionary which looks something like:

```python
{
"name": name of this experiment (obtained from qobj.experiment header)
"seed": random seed used for simulation
"shots": number of shots used in the simulation
"data":
    {
    "counts": {'0x9: 5, ...},
    "memory": ['0x9', '0xF', '0x1D', ..., '0x9']
    },
"status": status string for the simulation
"success": boolean
"time_taken": simulation time of this single experiment
}
```

**Return type**

dict

**Raises**

[**BasicAerError**](qiskit.providers.basicaer.BasicAerError "qiskit.providers.basicaer.BasicAerError") – if an error occurred.

### status

<span id="qiskit.providers.basicaer.StatevectorSimulatorPy.status" />

`status()`

Return the backend status.

**Returns**

the status of the backend.

**Return type**

[BackendStatus](qiskit.providers.models.BackendStatus "qiskit.providers.models.BackendStatus")

### version

<span id="qiskit.providers.basicaer.StatevectorSimulatorPy.version" />

`version()`

Return the backend version.

**Returns**

the X.X.X version of the backend.

**Return type**

str

