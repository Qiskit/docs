---
title: ZneOptions
description: API reference for qiskit_ibm_runtime.options.ZneOptions
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit_ibm_runtime.options.ZneOptions
---

# ZneOptions

<span id="qiskit_ibm_runtime.options.ZneOptions" />

`ZneOptions(*args, **kwargs)` [GitHub](https://github.com/Qiskit/qiskit-ibm-runtime/tree/testing/qiskit_ibm_runtime/options/zne_options.py#L35-L88 "view source code")

Zero noise extrapolation mitigation options.

**Parameters**

*   **noise\_factors** – Noise factors to use for noise amplification. Default: (1, 3, 5).

*   **extrapolator** –

    Extrapolator(s) to try (in order) for extrapolating to zero noise. One or more of:

    *   ”linear”
    *   ”exponential”
    *   ”double\_exponential”
    *   ”polynomial\_degree\_(1 \<= k \<= 7)”

    Default: (“exponential”, “linear”).

## Attributes

<span id="qiskit_ibm_runtime.options.ZneOptions.extrapolator" />

### extrapolator

`UnsetType | Literal['linear', 'exponential', 'double_exponential', 'polynomial_degree_1', 'polynomial_degree_2', 'polynomial_degree_3', 'polynomial_degree_4', 'polynomial_degree_5', 'polynomial_degree_6', 'polynomial_degree_7'] | Sequence[Literal['linear', 'exponential', 'double_exponential', 'polynomial_degree_1', 'polynomial_degree_2', 'polynomial_degree_3', 'polynomial_degree_4', 'polynomial_degree_5', 'polynomial_degree_6', 'polynomial_degree_7']]`

`= Unset`

<span id="qiskit_ibm_runtime.options.ZneOptions.noise_factors" />

### noise\_factors

`UnsetType | Sequence[float]`

`= Unset`

## Methods

