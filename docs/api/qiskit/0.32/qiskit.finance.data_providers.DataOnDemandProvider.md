---
title: DataOnDemandProvider
description: API reference for qiskit.finance.data_providers.DataOnDemandProvider
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.finance.data_providers.DataOnDemandProvider
---

# DataOnDemandProvider

<span id="qiskit.finance.data_providers.DataOnDemandProvider" />

`DataOnDemandProvider(token, tickers, start=datetime.datetime(2016, 1, 1, 0, 0), end=datetime.datetime(2016, 1, 30, 0, 0), verify=None)`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.18/qiskit/finance/data_providers/data_on_demand_provider.py "view source code")

Bases: `qiskit.finance.data_providers._base_data_provider.BaseDataProvider`

NASDAQ Data on Demand data provider.

Please see: [https://github.com/Qiskit/qiskit-tutorials/blob/master/tutorials/finance/11\_time\_series.ipynb](https://github.com/Qiskit/qiskit-tutorials/blob/master/tutorials/finance/11_time_series.ipynb) for instructions on use, which involve obtaining a NASDAQ DOD access token.

**Parameters**

*   **token** (`str`) – data on demand access token
*   **tickers** (`Union`\[`str`, `List`\[`str`]]) – tickers
*   **start** (`datetime`) – first data point
*   **end** (`datetime`) – last data point precedes this date
*   **verify** (`Union`\[`str`, `bool`, `None`]) – if verify is None, certify certificates will be used (default); if this is False, no certificates will be checked; if this is a string, it should be pointing to a certificate for the HTTPS connection to NASDAQ (dataondemand.nasdaq.com), either in the form of a CA\_BUNDLE file or a directory wherein to look.

## Methods

### get\_coordinates

<span id="qiskit.finance.data_providers.DataOnDemandProvider.get_coordinates" />

`DataOnDemandProvider.get_coordinates()`

Returns random coordinates for visualisation purposes.

**Return type**

`Tuple`\[`ndarray`, `ndarray`]

### get\_covariance\_matrix

<span id="qiskit.finance.data_providers.DataOnDemandProvider.get_covariance_matrix" />

`DataOnDemandProvider.get_covariance_matrix()`

Returns the covariance matrix.

**Return type**

`ndarray`

**Returns**

an asset-to-asset covariance matrix.

**Raises**

[**QiskitFinanceError**](qiskit.finance.QiskitFinanceError "qiskit.finance.QiskitFinanceError") – no data loaded

### get\_mean\_vector

<span id="qiskit.finance.data_providers.DataOnDemandProvider.get_mean_vector" />

`DataOnDemandProvider.get_mean_vector()`

Returns a vector containing the mean value of each asset.

**Return type**

`ndarray`

**Returns**

a per-asset mean vector.

**Raises**

[**QiskitFinanceError**](qiskit.finance.QiskitFinanceError "qiskit.finance.QiskitFinanceError") – no data loaded

### get\_period\_return\_covariance\_matrix

<span id="qiskit.finance.data_providers.DataOnDemandProvider.get_period_return_covariance_matrix" />

`DataOnDemandProvider.get_period_return_covariance_matrix()`

Returns a vector containing the mean value of each asset.

**Return type**

`ndarray`

**Returns**

a per-asset mean vector.

**Raises**

[**QiskitFinanceError**](qiskit.finance.QiskitFinanceError "qiskit.finance.QiskitFinanceError") – no data loaded

### get\_period\_return\_mean\_vector

<span id="qiskit.finance.data_providers.DataOnDemandProvider.get_period_return_mean_vector" />

`DataOnDemandProvider.get_period_return_mean_vector()`

Returns a vector containing the mean value of each asset.

**Return type**

`ndarray`

**Returns**

a per-asset mean vector.

**Raises**

[**QiskitFinanceError**](qiskit.finance.QiskitFinanceError "qiskit.finance.QiskitFinanceError") – no data loaded

### get\_similarity\_matrix

<span id="qiskit.finance.data_providers.DataOnDemandProvider.get_similarity_matrix" />

`DataOnDemandProvider.get_similarity_matrix()`

Returns time-series similarity matrix computed using dynamic time warping.

**Return type**

`ndarray`

**Returns**

an asset-to-asset similarity matrix.

**Raises**

[**QiskitFinanceError**](qiskit.finance.QiskitFinanceError "qiskit.finance.QiskitFinanceError") – no data loaded

### run

<span id="qiskit.finance.data_providers.DataOnDemandProvider.run" />

`DataOnDemandProvider.run()`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.18/qiskit/finance/data_providers/data_on_demand_provider.py "view source code")

Loads data, thus enabling get\_similarity\_matrix and get\_covariance\_matrix methods in the base class.

**Return type**

`None`

