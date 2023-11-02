---
title: QobjMeasurementOption
description: API reference for qiskit.qobj.QobjMeasurementOption
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.qobj.QobjMeasurementOption
---

# QobjMeasurementOption

<span id="qiskit.qobj.QobjMeasurementOption" />

`qiskit.qobj.QobjMeasurementOption(name, params=None)`

Bases: [`object`](https://docs.python.org/3/library/functions.html#object "(in Python v3.12)")

An individual measurement option.

Instantiate a new QobjMeasurementOption object.

**Parameters**

*   **name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.12)")) – The name of the measurement option
*   **params** ([*list*](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.12)")) – The parameters of the measurement option.

## Methods

### from\_dict

<span id="qiskit.qobj.QobjMeasurementOption.from_dict" />

`classmethod from_dict(data)`

Create a new QobjMeasurementOption object from a dictionary.

**Parameters**

**data** ([*dict*](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.12)")) – A dictionary for the experiment config

**Returns**

The object from the input dictionary.

**Return type**

[QobjMeasurementOption](#qiskit.qobj.QobjMeasurementOption "qiskit.qobj.QobjMeasurementOption")

### to\_dict

<span id="qiskit.qobj.QobjMeasurementOption.to_dict" />

`to_dict()`

Return a dict format representation of the QobjMeasurementOption.

**Returns**

The dictionary form of the QasmMeasurementOption.

**Return type**

[dict](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.12)")

