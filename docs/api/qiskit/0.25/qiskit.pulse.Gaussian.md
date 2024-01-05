---
title: Gaussian
description: API reference for qiskit.pulse.Gaussian
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.pulse.Gaussian
---

# qiskit.pulse.Gaussian

<span id="qiskit.pulse.Gaussian" />

`Gaussian(duration, amp, sigma, name=None)`

A truncated pulse envelope shaped according to the Gaussian function whose mean is centered at the center of the pulse (duration / 2):

$$
f(x) = amp * exp( -(1/2) * (x - duration/2)^2 / sigma^2) )  ,  0 <= x < duration
$$

Initialize the gaussian pulse.

**Parameters**

*   **duration** (`Union`\[`int`, `ParameterExpression`]) – Pulse length in terms of the the sampling period dt.
*   **amp** (`Union`\[`complex`, `ParameterExpression`]) – The amplitude of the Gaussian envelope.
*   **sigma** (`Union`\[`float`, `ParameterExpression`]) – A measure of how wide or narrow the Gaussian peak is; described mathematically in the class docstring.
*   **name** (`Optional`\[`str`]) – Display name for this pulse envelope.

### \_\_init\_\_

<span id="qiskit.pulse.Gaussian.__init__" />

`__init__(duration, amp, sigma, name=None)`

Initialize the gaussian pulse.

**Parameters**

*   **duration** (`Union`\[`int`, `ParameterExpression`]) – Pulse length in terms of the the sampling period dt.
*   **amp** (`Union`\[`complex`, `ParameterExpression`]) – The amplitude of the Gaussian envelope.
*   **sigma** (`Union`\[`float`, `ParameterExpression`]) – A measure of how wide or narrow the Gaussian peak is; described mathematically in the class docstring.
*   **name** (`Optional`\[`str`]) – Display name for this pulse envelope.

## Methods

## Attributes

### amp

<span id="qiskit.pulse.Gaussian.amp" />

`property amp`

The Gaussian amplitude.

**Return type**

`Union`\[`complex`, `ParameterExpression`]

### assign

<span id="qiskit.pulse.Gaussian.assign" />

`assign(parameter, value)`

Assign one parameter to a value, which can either be numeric or another parameter expression.

**Return type**

`ParametricPulse`

### assign\_parameters

<span id="qiskit.pulse.Gaussian.assign_parameters" />

`assign_parameters(value_dict)`

Return a new ParametricPulse with parameters assigned.

**Parameters**

**value\_dict** (`Dict`\[`ParameterExpression`, `Union`\[`ParameterExpression`, `float`, `int`]]) – A mapping from Parameters to either numeric values or another Parameter expression.

**Return type**

`ParametricPulse`

**Returns**

New pulse with updated parameters.

### draw

<span id="qiskit.pulse.Gaussian.draw" />

`draw(dt=None, style=None, filename=None, interp_method=None, scale=None, interactive=None, draw_title=None, backend=None, time_range=None, time_unit='dt', show_waveform_info=True, plotter='mpl2d', axis=None)`

Plot the interpolated envelope of pulse.

**Parameters**

*   **style** (`Optional`\[`Dict`\[`str`, `Any`]]) – Stylesheet options. This can be dictionary or preset stylesheet classes. See :py:class:\~\`qiskit.visualization.pulse\_v2.stylesheets.IQXStandard\`, :py:class:\~\`qiskit.visualization.pulse\_v2.stylesheets.IQXSimple\`, and :py:class:\~\`qiskit.visualization.pulse\_v2.stylesheets.IQXDebugging\` for details of preset stylesheets.

*   **backend** (*Optional\[*[*BaseBackend*](qiskit.providers.BaseBackend "qiskit.providers.BaseBackend")*]*) – Backend object to play the input pulse program. If provided, the plotter may use to make the visualization hardware aware.

*   **time\_range** (`Optional`\[`Tuple`\[`int`, `int`]]) – Set horizontal axis limit. Tuple `(tmin, tmax)`.

*   **time\_unit** (`str`) – The unit of specified time range either `dt` or `ns`. The unit of `ns` is available only when `backend` object is provided.

*   **show\_waveform\_info** (`bool`) – Show waveform annotations, i.e. name, of waveforms. Set `True` to show additional information about waveforms.

*   **plotter** (`str`) –

    Name of plotter API to generate an output image. One of following APIs should be specified:

    ```python
    mpl2d: Matplotlib API for 2D image generation.
        Matplotlib API to generate 2D image. Charts are placed along y axis with
        vertical offset. This API takes matplotlib.axes.Axes as `axis` input.
    ```

    axis and style kwargs may depend on the plotter.

*   **axis** (`Optional`\[`Any`]) – Arbitrary object passed to the plotter. If this object is provided, the plotters use a given `axis` instead of internally initializing a figure object. This object format depends on the plotter. See plotter argument for details.

*   **dt** (`Optional`\[`Any`]) – Deprecated. This argument is used by the legacy pulse drawer.

*   **filename** (`Optional`\[`Any`]) – Deprecated. This argument is used by the legacy pulse drawer. To save output image, you can call .savefig method with returned Matplotlib Figure object.

*   **interp\_method** (`Optional`\[`Any`]) – Deprecated. This argument is used by the legacy pulse drawer.

*   **scale** (`Optional`\[`Any`]) – Deprecated. This argument is used by the legacy pulse drawer.

*   **interactive** (`Optional`\[`Any`]) – Deprecated. This argument is used by the legacy pulse drawer.

*   **draw\_title** (`Optional`\[`Any`]) – Deprecated. This argument is used by the legacy pulse drawer.

**Returns**

Visualization output data. The returned data type depends on the `plotter`. If matplotlib family is specified, this will be a `matplotlib.pyplot.Figure` data.

### get\_waveform

<span id="qiskit.pulse.Gaussian.get_waveform" />

`get_waveform()`

Return a Waveform with samples filled according to the formula that the pulse represents and the parameter values it contains.

**Return type**

`Waveform`

### id

<span id="qiskit.pulse.Gaussian.id" />

`property id`

Unique identifier for this pulse.

**Return type**

`int`

### is\_parameterized

<span id="qiskit.pulse.Gaussian.is_parameterized" />

`is_parameterized()`

Return True iff the instruction is parameterized.

**Return type**

`bool`

### parameters

<span id="qiskit.pulse.Gaussian.parameters" />

`property parameters`

Return a dictionary containing the pulse’s parameters.

**Return type**

`Dict`\[`str`, `Any`]

### sigma

<span id="qiskit.pulse.Gaussian.sigma" />

`property sigma`

The Gaussian standard deviation of the pulse width.

**Return type**

`Union`\[`float`, `ParameterExpression`]

### validate\_parameters

<span id="qiskit.pulse.Gaussian.validate_parameters" />

`validate_parameters()`

Validate parameters.

**Raises**

[**PulseError**](qiskit.pulse.PulseError "qiskit.pulse.PulseError") – If the parameters passed are not valid.

**Return type**

`None`

