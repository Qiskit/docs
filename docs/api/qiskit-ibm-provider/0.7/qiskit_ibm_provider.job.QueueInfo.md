---
title: QueueInfo
description: API reference for qiskit_ibm_provider.job.QueueInfo
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit_ibm_provider.job.QueueInfo
---

# QueueInfo

<span id="qiskit_ibm_provider.job.QueueInfo" />

`QueueInfo(position_in_queue=None, status=None, estimated_start_time=None, estimated_completion_time=None, hub_priority=None, group_priority=None, project_priority=None, job_id=None, **kwargs)` [GitHub](https://github.com/qiskit/qiskit-ibm-provider/tree/stable/0.7/qiskit_ibm_provider/job/queueinfo.py "view source code")

Queue information for a job.

QueueInfo constructor.

**Parameters**

*   **position** – Position in the queue.
*   **status** (`Optional`\[`str`]) – Job status.
*   **estimated\_start\_time** (`Union`\[`str`, `datetime`, `None`]) – Estimated start time for the job, in UTC.
*   **estimated\_complete\_time** – Estimated complete time for the job, in UTC.
*   **hub\_priority** (`Optional`\[`float`]) – Dynamic priority for the hub.
*   **group\_priority** (`Optional`\[`float`]) – Dynamic priority for the group.
*   **project\_priority** (`Optional`\[`float`]) – Dynamic priority for the project.
*   **job\_id** (`Optional`\[`str`]) – Job ID.
*   **kwargs** (`Any`) – Additional attributes.

## Attributes

<span id="queueinfo-estimated-complete-time" />

### estimated\_complete\_time

<span id="qiskit_ibm_provider.job.QueueInfo.estimated_complete_time" />

`datetime | None`

Return estimated complete time in local time.

**Return type**

`Optional`\[`datetime`]

<span id="queueinfo-estimated-start-time" />

### estimated\_start\_time

<span id="qiskit_ibm_provider.job.QueueInfo.estimated_start_time" />

`datetime | None`

Return estimated start time in local time.

**Return type**

`Optional`\[`datetime`]

## Methods

<span id="queueinfo-format" />

### format

<span id="qiskit_ibm_provider.job.QueueInfo.format" />

`QueueInfo.format()` [GitHub](https://github.com/qiskit/qiskit-ibm-provider/tree/stable/0.7/qiskit_ibm_provider/job/queueinfo.py "view source code")

Build a user-friendly report for the job queue information.

**Return type**

`str`

**Returns**

The job queue information report.

