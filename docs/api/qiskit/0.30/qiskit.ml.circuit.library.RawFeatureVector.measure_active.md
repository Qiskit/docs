# qiskit.ml.circuit.library.RawFeatureVector.measure\_active

`RawFeatureVector.measure_active(inplace=True)`

Adds measurement to all non-idle qubits. Creates a new ClassicalRegister with a size equal to the number of non-idle qubits being measured.

Returns a new circuit with measurements if inplace=False.

**Parameters**

**inplace** (*bool*) – All measurements inplace or return new circuit.

**Returns**

Returns circuit with measurements when inplace = False.

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")
