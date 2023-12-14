<span id="qiskit-aqua-algorithms-bernsteinvazirani" />

# qiskit.aqua.algorithms.BernsteinVazirani



`BernsteinVazirani(oracle, quantum_instance=None)`

The Bernstein-Vazirani algorithm.

The Bernstein-Vazirani algorithm is an extension / restriction of the Deutsch-Jozsa algorithm. The goal of the algorithm is to determine a secret string $s \in \{0,1\}^n$, given a black box oracle function, that maps $f:\{0,1\}^n \rightarrow \{0,1\}$ such that $f(x)=s \cdot x (\bmod 2)$.

**Parameters**

*   **oracle** (`Oracle`) – The oracle component
*   **quantum\_instance** (`Union`\[`QuantumInstance`, `Backend`, `BaseBackend`, `None`]) – Quantum Instance or Backend



`__init__(oracle, quantum_instance=None)`

**Parameters**

*   **oracle** (`Oracle`) – The oracle component
*   **quantum\_instance** (`Union`\[`QuantumInstance`, `Backend`, `BaseBackend`, `None`]) – Quantum Instance or Backend

## Methods

|                                                                                                                                                                 |                                              |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| [`__init__`](#qiskit.aqua.algorithms.BernsteinVazirani.__init__ "qiskit.aqua.algorithms.BernsteinVazirani.__init__")(oracle\[, quantum\_instance])              | **type oracle**`Oracle`                      |
| [`construct_circuit`](#qiskit.aqua.algorithms.BernsteinVazirani.construct_circuit "qiskit.aqua.algorithms.BernsteinVazirani.construct_circuit")(\[measurement]) | Construct the quantum circuit                |
| [`run`](#qiskit.aqua.algorithms.BernsteinVazirani.run "qiskit.aqua.algorithms.BernsteinVazirani.run")(\[quantum\_instance])                                     | Execute the algorithm with selected backend. |
| [`set_backend`](#qiskit.aqua.algorithms.BernsteinVazirani.set_backend "qiskit.aqua.algorithms.BernsteinVazirani.set_backend")(backend, \*\*kwargs)              | Sets backend with configuration.             |

## Attributes

|                                                                                                                                              |                           |
| -------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------- |
| [`backend`](#qiskit.aqua.algorithms.BernsteinVazirani.backend "qiskit.aqua.algorithms.BernsteinVazirani.backend")                            | Returns backend.          |
| [`quantum_instance`](#qiskit.aqua.algorithms.BernsteinVazirani.quantum_instance "qiskit.aqua.algorithms.BernsteinVazirani.quantum_instance") | Returns quantum instance. |
| [`random`](#qiskit.aqua.algorithms.BernsteinVazirani.random "qiskit.aqua.algorithms.BernsteinVazirani.random")                               | Return a numpy random.    |



`property backend`

Returns backend.

**Return type**

`Union`\[`Backend`, `BaseBackend`]



`construct_circuit(measurement=False)`

Construct the quantum circuit

**Parameters**

**measurement** (*bool*) – Boolean flag to indicate if measurement should be included in the circuit.

**Returns**

the QuantumCircuit object for the constructed circuit

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")



`property quantum_instance`

Returns quantum instance.

**Return type**

`Optional`\[`QuantumInstance`]



`property random`

Return a numpy random.



`run(quantum_instance=None, **kwargs)`

Execute the algorithm with selected backend.

**Parameters**

*   **quantum\_instance** (`Union`\[`QuantumInstance`, `Backend`, `BaseBackend`, `None`]) – the experimental setting.
*   **kwargs** (*dict*) – kwargs

**Returns**

results of an algorithm.

**Return type**

dict

**Raises**

[**AquaError**](qiskit.aqua.AquaError#qiskit.aqua.AquaError "qiskit.aqua.AquaError") – If a quantum instance or backend has not been provided



`set_backend(backend, **kwargs)`

Sets backend with configuration.

**Return type**

`None`
