---
title: BaseJob
description: API reference for qiskit.providers.BaseJob
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.providers.BaseJob
---

# qiskit.providers.BaseJob

<span id="qiskit.providers.BaseJob" />

`BaseJob(backend, job_id)`

Legacy Class to handle asynchronous jobs

Initializes the asynchronous job.

**Parameters**

*   **backend** (`BaseBackend`) – the backend used to run the job.
*   **job\_id** (`str`) – a unique id in the context of the backend used to run the job.

### \_\_init\_\_

<span id="qiskit.providers.BaseJob.__init__" />

`__init__(backend, job_id)`

Initializes the asynchronous job.

**Parameters**

*   **backend** (`BaseBackend`) – the backend used to run the job.
*   **job\_id** (`str`) – a unique id in the context of the backend used to run the job.

## Methods

### backend

<span id="qiskit.providers.BaseJob.backend" />

`backend()`

Return the backend where this job was executed.

**Return type**

`BaseBackend`

### cancel

<span id="qiskit.providers.BaseJob.cancel" />

`abstract cancel()`

Attempt to cancel the job.

### cancelled

<span id="qiskit.providers.BaseJob.cancelled" />

`cancelled()`

Return whether the job has been cancelled.

**Return type**

`bool`

### done

<span id="qiskit.providers.BaseJob.done" />

`done()`

Return whether the job has successfully run.

**Return type**

`bool`

### in\_final\_state

<span id="qiskit.providers.BaseJob.in_final_state" />

`in_final_state()`

Return whether the job is in a final job state.

**Return type**

`bool`

### job\_id

<span id="qiskit.providers.BaseJob.job_id" />

`job_id()`

Return a unique id identifying the job.

**Return type**

`str`

### result

<span id="qiskit.providers.BaseJob.result" />

`abstract result()`

Return the results of the job.

### running

<span id="qiskit.providers.BaseJob.running" />

`running()`

Return whether the job is actively running.

**Return type**

`bool`

### status

<span id="qiskit.providers.BaseJob.status" />

`abstract status()`

Return the status of the job, among the values of `JobStatus`.

### submit

<span id="qiskit.providers.BaseJob.submit" />

`abstract submit()`

Submit the job to the backend for execution.

### wait\_for\_final\_state

<span id="qiskit.providers.BaseJob.wait_for_final_state" />

`wait_for_final_state(timeout=None, wait=5, callback=None)`

Poll the job status until it progresses to a final state such as `DONE` or `ERROR`.

**Parameters**

*   **timeout** (`Optional`\[`float`]) – Seconds to wait for the job. If `None`, wait indefinitely.

*   **wait** (`float`) – Seconds between queries.

*   **callback** (`Optional`\[`Callable`]) –

    Callback function invoked after each query. The following positional arguments are provided to the callback function:

    *   job\_id: Job ID
    *   job\_status: Status of the job from the last query
    *   job: This BaseJob instance

    Note: different subclass might provide different arguments to the callback function.

**Raises**

[**JobTimeoutError**](qiskit.providers.JobTimeoutError "qiskit.providers.JobTimeoutError") – If the job does not reach a final state before the specified timeout.

**Return type**

`None`

