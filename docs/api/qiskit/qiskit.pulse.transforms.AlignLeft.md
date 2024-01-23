---
title: AlignLeft
description: API reference for qiskit.pulse.transforms.AlignLeft
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.pulse.transforms.AlignLeft
---

# AlignLeft

<span id="qiskit.pulse.transforms.AlignLeft" />

`qiskit.pulse.transforms.AlignLeft`

Bases: [`AlignmentKind`](pulse#qiskit.pulse.transforms.AlignmentKind "qiskit.pulse.transforms.alignments.AlignmentKind")

Align instructions in as-soon-as-possible manner.

Instructions are placed at earliest available timeslots.

Create new left-justified context.

## Attributes

<span id="qiskit.pulse.transforms.AlignLeft.is_sequential" />

### is\_sequential

## Methods

### align

<span id="qiskit.pulse.transforms.AlignLeft.align" />

`align(schedule)`

Reallocate instructions according to the policy.

Only top-level sub-schedules are aligned. If sub-schedules are nested, nested schedules are not recursively aligned.

**Parameters**

**schedule** ([*Schedule*](qiskit.pulse.Schedule "qiskit.pulse.schedule.Schedule")) – Schedule to align.

**Returns**

Schedule with reallocated instructions.

**Return type**

[*Schedule*](qiskit.pulse.Schedule "qiskit.pulse.schedule.Schedule")

