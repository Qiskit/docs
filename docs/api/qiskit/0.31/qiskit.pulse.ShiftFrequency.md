---
title: ShiftFrequency
description: API reference for qiskit.pulse.ShiftFrequency
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.pulse.ShiftFrequency
---

# ShiftFrequency

<span id="qiskit.pulse.ShiftFrequency" />

`ShiftFrequency(frequency, channel, name=None)`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.18/qiskit/pulse/instructions/frequency.py "view source code")

Bases: `qiskit.pulse.instructions.instruction.Instruction`

Shift the channel frequency away from the current frequency.

Creates a new shift frequency instruction.

**Parameters**

*   **frequency** (`Union`\[`float`, `ParameterExpression`]) – Frequency shift of the channel in Hz.
*   **channel** (`PulseChannel`) – The channel this instruction operates on.
*   **name** (`Optional`\[`str`]) – Name of this set channel frequency instruction.

## Methods

### append

<span id="qiskit.pulse.ShiftFrequency.append" />

`ShiftFrequency.append(schedule, name=None)`

Return a new [`Schedule`](qiskit.pulse.Schedule "qiskit.pulse.Schedule") with `schedule` inserted at the maximum time over all channels shared between `self` and `schedule`.

**Parameters**

*   **schedule** (*Union\['Schedule', 'Instruction']*) – Schedule or instruction to be appended
*   **name** (`Optional`\[`str`]) – Name of the new schedule. Defaults to name of self

**Returns**

A new schedule with `schedule` a this instruction at t=0.

**Return type**

[Schedule](qiskit.pulse.Schedule "qiskit.pulse.Schedule")

### assign\_parameters

<span id="qiskit.pulse.ShiftFrequency.assign_parameters" />

`ShiftFrequency.assign_parameters(value_dict)`

Modify and return self with parameters assigned according to the input.

**Parameters**

**value\_dict** (`Dict`\[`ParameterExpression`, `Union`\[`ParameterExpression`, `float`]]) – A mapping from Parameters to either numeric values or another Parameter expression.

**Return type**

`Instruction`

**Returns**

Self with updated parameters.

### ch\_duration

<span id="qiskit.pulse.ShiftFrequency.ch_duration" />

`ShiftFrequency.ch_duration(*channels)`

Return duration of the supplied channels in this Instruction.

**Parameters**

**\*channels** – Supplied channels

**Return type**

`int`

### ch\_start\_time

<span id="qiskit.pulse.ShiftFrequency.ch_start_time" />

`ShiftFrequency.ch_start_time(*channels)`

Return minimum start time for supplied channels.

**Parameters**

**\*channels** – Supplied channels

**Return type**

`int`

### ch\_stop\_time

<span id="qiskit.pulse.ShiftFrequency.ch_stop_time" />

`ShiftFrequency.ch_stop_time(*channels)`

Return maximum start time for supplied channels.

**Parameters**

**\*channels** – Supplied channels

**Return type**

`int`

### draw

<span id="qiskit.pulse.ShiftFrequency.draw" />

`ShiftFrequency.draw(dt=1, style=None, filename=None, interp_method=None, scale=1, plot_all=False, plot_range=None, interactive=False, table=True, label=False, framechange=True, channels=None)`

Plot the instruction.

**Parameters**

*   **dt** (`float`) – Time interval of samples
*   **style** (*Optional\[SchedStyle]*) – A style sheet to configure plot appearance
*   **filename** (`Optional`\[`str`]) – Name required to save pulse image
*   **interp\_method** (`Optional`\[`Callable`]) – A function for interpolation
*   **scale** (`float`) – Relative visual scaling of waveform amplitudes
*   **plot\_all** (`bool`) – Plot empty channels
*   **plot\_range** (`Optional`\[`Tuple`\[`float`]]) – A tuple of time range to plot
*   **interactive** (`bool`) – When set true show the circuit in a new window (this depends on the matplotlib backend being used supporting this)
*   **table** (`bool`) – Draw event table for supported instructions
*   **label** (`bool`) – Label individual instructions
*   **framechange** (`bool`) – Add framechange indicators
*   **channels** (`Optional`\[`List`\[`Channel`]]) – A list of channel names to plot

**Returns**

A matplotlib figure object of the pulse schedule

**Return type**

matplotlib.figure

### flatten

<span id="qiskit.pulse.ShiftFrequency.flatten" />

`ShiftFrequency.flatten()`

Return itself as already single instruction.

**Return type**

`Instruction`

### insert

<span id="qiskit.pulse.ShiftFrequency.insert" />

`ShiftFrequency.insert(start_time, schedule, name=None)`

Return a new [`Schedule`](qiskit.pulse.Schedule "qiskit.pulse.Schedule") with `schedule` inserted within `self` at `start_time`.

**Parameters**

*   **start\_time** (`int`) – Time to insert the schedule schedule
*   **schedule** (*Union\['Schedule', 'Instruction']*) – Schedule or instruction to insert
*   **name** (`Optional`\[`str`]) – Name of the new schedule. Defaults to name of self

**Returns**

A new schedule with `schedule` inserted with this instruction at t=0.

**Return type**

[Schedule](qiskit.pulse.Schedule "qiskit.pulse.Schedule")

### is\_parameterized

<span id="qiskit.pulse.ShiftFrequency.is_parameterized" />

`ShiftFrequency.is_parameterized()`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.18/qiskit/pulse/instructions/frequency.py "view source code")

Return True iff the instruction is parameterized.

**Return type**

`bool`

### shift

<span id="qiskit.pulse.ShiftFrequency.shift" />

`ShiftFrequency.shift(time, name=None)`

Return a new schedule shifted forward by time.

**Parameters**

*   **time** (`int`) – Time to shift by
*   **name** (`Optional`\[`str`]) – Name of the new schedule. Defaults to name of self

**Returns**

The shifted schedule.

**Return type**

[Schedule](qiskit.pulse.Schedule "qiskit.pulse.Schedule")

## Attributes

<span id="qiskit.pulse.ShiftFrequency.channel" />

### channel

Return the `Channel` that this instruction is scheduled on.

**Return type**

`PulseChannel`

<span id="qiskit.pulse.ShiftFrequency.channels" />

### channels

Returns the channels that this schedule uses.

**Return type**

`Tuple`\[`PulseChannel`]

<span id="qiskit.pulse.ShiftFrequency.duration" />

### duration

Duration of this instruction.

**Return type**

`int`

<span id="qiskit.pulse.ShiftFrequency.frequency" />

### frequency

Frequency shift from the set frequency.

**Return type**

`Union`\[`float`, `ParameterExpression`]

<span id="qiskit.pulse.ShiftFrequency.id" />

### id

Unique identifier for this instruction.

**Return type**

`int`

<span id="qiskit.pulse.ShiftFrequency.instructions" />

### instructions

Iterable for getting instructions from Schedule tree.

**Return type**

`Tuple`\[`Tuple`\[`int`, `Instruction`]]

<span id="qiskit.pulse.ShiftFrequency.name" />

### name

Name of this instruction.

**Return type**

`str`

<span id="qiskit.pulse.ShiftFrequency.operands" />

### operands

Return instruction operands.

**Return type**

`Tuple`

<span id="qiskit.pulse.ShiftFrequency.parameters" />

### parameters

Parameters which determine the instruction behavior.

**Return type**

`Set`

<span id="qiskit.pulse.ShiftFrequency.start_time" />

### start\_time

Relative begin time of this instruction.

**Return type**

`int`

<span id="qiskit.pulse.ShiftFrequency.stop_time" />

### stop\_time

Relative end time of this instruction.

**Return type**

`int`

