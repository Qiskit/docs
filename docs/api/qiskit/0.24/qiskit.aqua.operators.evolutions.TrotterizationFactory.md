---
title: TrotterizationFactory
description: API reference for qiskit.aqua.operators.evolutions.TrotterizationFactory
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.operators.evolutions.TrotterizationFactory
---

<span id="qiskit-aqua-operators-evolutions-trotterizationfactory" />

# qiskit.aqua.operators.evolutions.TrotterizationFactory

<span id="qiskit.aqua.operators.evolutions.TrotterizationFactory" />

`TrotterizationFactory`[GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.8/qiskit/aqua/operators/evolutions/trotterizations/trotterization_factory.py "view source code")

A factory for conveniently creating TrotterizationBase instances.

### \_\_init\_\_

<span id="qiskit.aqua.operators.evolutions.TrotterizationFactory.__init__" />

`__init__()`

Initialize self. See help(type(self)) for accurate signature.

## Methods

|                                                                                                                                                        |                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------- |
| [`__init__`](#qiskit.aqua.operators.evolutions.TrotterizationFactory.__init__ "qiskit.aqua.operators.evolutions.TrotterizationFactory.__init__")()     | Initialize self.                                                  |
| [`build`](#qiskit.aqua.operators.evolutions.TrotterizationFactory.build "qiskit.aqua.operators.evolutions.TrotterizationFactory.build")(\[mode, reps]) | A factory for conveniently creating TrotterizationBase instances. |

### build

<span id="qiskit.aqua.operators.evolutions.TrotterizationFactory.build" />

`static build(mode='trotter', reps=1)`

A factory for conveniently creating TrotterizationBase instances.

**Parameters**

*   **mode** (`str`) – One of ‘trotter’, ‘suzuki’, ‘qdrift’
*   **reps** (`int`) – The number of times to repeat the Trotterization circuit.

**Return type**

`TrotterizationBase`

**Returns**

The desired TrotterizationBase instance.

**Raises**

**ValueError** – A string not in \[‘trotter’, ‘suzuki’, ‘qdrift’] is given for mode.

