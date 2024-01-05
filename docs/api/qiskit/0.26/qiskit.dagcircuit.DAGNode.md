---
title: DAGNode
description: API reference for qiskit.dagcircuit.DAGNode
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.dagcircuit.DAGNode
---

# qiskit.dagcircuit.DAGNode

<span id="qiskit.dagcircuit.DAGNode" />

`DAGNode(type=None, op=None, name=None, qargs=None, cargs=None, wire=None, nid=- 1)`

Object to represent the information at a node in the DAGCircuit.

It is used as the return value from \*\_nodes() functions and can be supplied to functions that take a node.

Create a node

### \_\_init\_\_

<span id="qiskit.dagcircuit.DAGNode.__init__" />

`__init__(type=None, op=None, name=None, qargs=None, cargs=None, wire=None, nid=- 1)`

Create a node

## Methods

## Attributes

### condition

<span id="qiskit.dagcircuit.DAGNode.condition" />

`property condition`

Returns the condition of the node.op

### op

<span id="qiskit.dagcircuit.DAGNode.op" />

`property op`

Returns the Instruction object corresponding to the op for the node, else None

### qargs

<span id="qiskit.dagcircuit.DAGNode.qargs" />

`property qargs`

Returns list of Qubit, else an empty list.

### semantic\_eq

<span id="qiskit.dagcircuit.DAGNode.semantic_eq" />

`static semantic_eq(node1, node2, bit_indices1=None, bit_indices2=None)`

Check if DAG nodes are considered equivalent, e.g., as a node\_match for nx.is\_isomorphic.

**Parameters**

*   **node1** ([*DAGNode*](#qiskit.dagcircuit.DAGNode "qiskit.dagcircuit.DAGNode")) – A node to compare.
*   **node2** ([*DAGNode*](#qiskit.dagcircuit.DAGNode "qiskit.dagcircuit.DAGNode")) – The other node to compare.
*   **bit\_indices1** (*dict*) – Dictionary mapping Bit instances to their index within the circuit containing node1
*   **bit\_indices2** (*dict*) – Dictionary mapping Bit instances to their index within the circuit containing node2

**Returns**

If node1 == node2

**Return type**

Bool

### wire

<span id="qiskit.dagcircuit.DAGNode.wire" />

`property wire`

Returns the Bit object, else None.

