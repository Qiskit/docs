---
title: kraus_error
description: API reference for qiskit_aer.noise.kraus_error
in_page_toc_min_heading_level: 1
python_api_type: function
python_api_name: qiskit_aer.noise.kraus_error
---

# qiskit\_aer.noise.kraus\_error

<span id="qiskit_aer.noise.kraus_error" />

`kraus_error(noise_ops, canonical_kraus=False)`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.42/qiskit_aer/noise/errors/standard_errors.py "view source code")

Return a Kraus quantum error channel.

**Parameters**

*   **noise\_ops** (*list\[matrix]*) – Kraus matrices.
*   **canonical\_kraus** (*bool*) – Convert input Kraus matrices into the canonical Kraus representation (default: False)

**Returns**

The quantum error object.

**Return type**

[QuantumError](qiskit_aer.noise.QuantumError "qiskit_aer.noise.QuantumError")

**Raises**

**NoiseError** – if error parameters are invalid.

