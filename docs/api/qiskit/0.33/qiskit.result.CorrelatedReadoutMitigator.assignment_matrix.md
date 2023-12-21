# qiskit.result.CorrelatedReadoutMitigator.assignment\_matrix

`CorrelatedReadoutMitigator.assignment_matrix(qubits=None)`

Return the readout assignment matrix for specified qubits.

The assignment matrix is the stochastic matrix $A$ which assigns a noisy readout probability distribution to an ideal input readout distribution: $P(i|j) = \langle i | A | j \rangle$.

**Parameters**

**qubits** (`Optional`\[`List`\[`int`]]) – Optional, qubits being measured.

**Returns**

the assignment matrix A.

**Return type**

np.ndarray
