---
title: QasmQobjExperimentConfig
description: API reference for qiskit.qobj.QasmQobjExperimentConfig
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.qobj.QasmQobjExperimentConfig
---

# qiskit.qobj.QasmQobjExperimentConfig

<span id="qiskit.qobj.QasmQobjExperimentConfig" />

`QasmQobjExperimentConfig(calibrations=None, **kwargs)`

Configuration for a single QASM experiment in the qobj.

**Parameters**

*   **calibrations** ([*QasmExperimentCalibrations*](qiskit.qobj.QasmExperimentCalibrations "qiskit.qobj.QasmExperimentCalibrations")) – Information required for Pulse gates.
*   **kwargs** – Additional free form key value fields to add to the configuration.

### \_\_init\_\_

<span id="qiskit.qobj.QasmQobjExperimentConfig.__init__" />

`__init__(calibrations=None, **kwargs)`

**Parameters**

*   **calibrations** ([*QasmExperimentCalibrations*](qiskit.qobj.QasmExperimentCalibrations "qiskit.qobj.QasmExperimentCalibrations")) – Information required for Pulse gates.
*   **kwargs** – Additional free form key value fields to add to the configuration.

## Methods

### from\_dict

<span id="qiskit.qobj.QasmQobjExperimentConfig.from_dict" />

`classmethod from_dict(data)`

Create a new QobjHeader object from a dictionary.

**Parameters**

**data** (*dict*) – A dictionary representing the QobjHeader to create. It will be in the same format as output by [`to_dict()`](#qiskit.qobj.QasmQobjExperimentConfig.to_dict "qiskit.qobj.QasmQobjExperimentConfig.to_dict").

**Returns**

The QobjDictField from the input dictionary.

**Return type**

QobjDictFieldr

### to\_dict

<span id="qiskit.qobj.QasmQobjExperimentConfig.to_dict" />

`to_dict()`

Return a dictionary format representation of the QASM Qobj.

**Returns**

The dictionary form of the QobjHeader.

**Return type**

dict

