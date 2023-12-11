# DriveChannel



`DriveChannel(index)`

Bases: `qiskit.pulse.channels.PulseChannel`

Drive channels transmit signals to qubits which enact gate operations.

Channel class.

**Parameters**

**index** (`int`) – Index of channel.

## Methods

|                                                                                                                                                                                     |                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- |
| [`is_parameterized`](qiskit.pulse.channels.DriveChannel.is_parameterized#qiskit.pulse.channels.DriveChannel.is_parameterized "qiskit.pulse.channels.DriveChannel.is_parameterized") | Return True iff the channel is parameterized. |

## Attributes



### index

Return the index of this channel. The index is a label for a control signal line typically mapped trivially to a qubit index. For instance, `DriveChannel(0)` labels the signal line driving the qubit labeled with index 0.

**Return type**

`Union`\[`int`, `ParameterExpression`]



### name

Return the shorthand alias for this channel, which is based on its type and index.

**Return type**

`str`



### parameters

Parameters which determine the channel index.

**Return type**

`Set`



### prefix

`= 'd'`
