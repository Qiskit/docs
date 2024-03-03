---
title: BitArray
description: API reference for qiskit.primitives.BitArray
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.primitives.BitArray
---

# BitArray

<span id="qiskit.primitives.BitArray" />

`qiskit.primitives.BitArray(array, num_bits)` [GitHub](https://github.com/qiskit/qiskit/tree/main/qiskit/primitives/containers/bit_array.py "view source code")

Bases: `ShapedMixin`

Stores an array of bit values.

This object contains a single, contiguous block of data that represents an array of bitstrings. The last axis is over packed bits, the second last axis is over shots, and the preceding axes correspond to the shape of the pub that was executed to sample these bits.

**Parameters**

*   **array** – The `uint8` data array.
*   **num\_bits** – How many bit are in each outcome.

**Raises**

*   [**TypeError**](https://docs.python.org/3/library/exceptions.html#TypeError "(in Python v3.12)") – If the input is not a NumPy array with type `numpy.uint8`.
*   [**ValueError**](https://docs.python.org/3/library/exceptions.html#ValueError "(in Python v3.12)") – If the input array has fewer than two axes, or the size of the last axis is not the smallest number of bytes that can contain `num_bits`.

## Attributes

<span id="qiskit.primitives.BitArray.array" />

### array

The raw NumPy array of data.

<span id="qiskit.primitives.BitArray.ndim" />

### ndim

<span id="qiskit.primitives.BitArray.num_bits" />

### num\_bits

The number of bits in the register that this array stores data for.

For example, a `ClassicalRegister(5, "meas")` would result in `num_bits=5`.

<span id="qiskit.primitives.BitArray.num_shots" />

### num\_shots

The number of shots sampled from the register in each configuration.

More precisely, the length of the second last axis of [`array`](#qiskit.primitives.BitArray.array "qiskit.primitives.BitArray.array").

<span id="qiskit.primitives.BitArray.shape" />

### shape

<span id="qiskit.primitives.BitArray.size" />

### size

## Methods

### bitcount

<span id="qiskit.primitives.BitArray.bitcount" />

`bitcount()`

Compute the number of ones appearing in the binary representation of each shot.

**Returns**

A `numpy.uint64`-array with shape `(*shape, num_shots)`.

**Return type**

[*ndarray*](https://numpy.org/doc/stable/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v1.26)")\[[*Any*](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.12)"), [*dtype*](https://numpy.org/doc/stable/reference/generated/numpy.dtype.html#numpy.dtype "(in NumPy v1.26)")\[*uint64*]]

### from\_bool\_array

<span id="qiskit.primitives.BitArray.from_bool_array" />

`static from_bool_array(array, order='big')`

Construct a new bit array from an array of bools.

**Parameters**

*   **array** ([*ndarray*](https://numpy.org/doc/stable/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v1.26)")*\[*[*Any*](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.12)")*,* [*dtype*](https://numpy.org/doc/stable/reference/generated/numpy.dtype.html#numpy.dtype "(in NumPy v1.26)")*\[*[*bool\_*](https://numpy.org/doc/stable/reference/arrays.scalars.html#numpy.bool_ "(in NumPy v1.26)")*]]*) – The array to convert, with “bitstrings” along the last axis.
*   **order** ([*Literal*](https://docs.python.org/3/library/typing.html#typing.Literal "(in Python v3.12)")*\['big', 'little']*) – One of `"big"` or `"little"`, indicating whether `array[..., 0]` correspond to the most significant bits or the least significant bits of each bitstring, respectively.

**Returns**

A new bit array.

**Return type**

[BitArray](#qiskit.primitives.BitArray "qiskit.primitives.BitArray")

### from\_counts

<span id="qiskit.primitives.BitArray.from_counts" />

`static from_counts(counts, num_bits=None)`

Construct a new bit array from one or more `Counts`-like objects.

The `counts` can have keys that are (uniformly) integers, hexstrings, or bitstrings. Their values represent numbers of occurrences of that value.

**Parameters**

*   **counts** (*Mapping\[*[*str*](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.12)")  *|*[*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")*,* [*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")*] | Iterable\[Mapping\[*[*str*](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.12)")  *|*[*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")*,* [*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")*]]*) – One or more counts-like mappings with the same number of shots.
*   **num\_bits** ([*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)") *| None*) – The desired number of bits per shot. If unset, the biggest value found sets this value.

**Returns**

A new bit array with shape `()` for single input counts, or `(N,)` for an iterable of $N$ counts.

**Raises**

*   [**ValueError**](https://docs.python.org/3/library/exceptions.html#ValueError "(in Python v3.12)") – If different mappings have different numbers of shots.
*   [**ValueError**](https://docs.python.org/3/library/exceptions.html#ValueError "(in Python v3.12)") – If no counts dictionaries are supplied.

**Return type**

[BitArray](#qiskit.primitives.BitArray "qiskit.primitives.BitArray")

### from\_samples

<span id="qiskit.primitives.BitArray.from_samples" />

`static from_samples(samples, num_bits=None)`

Construct a new bit array from an iterable of bitstrings, hexstrings, or integers.

All samples are assumed to be integers if the first one is. Strings are all assumed to be bitstrings whenever the first string doesn’t start with `"0x"`.

Consider pairing this method with [`reshape()`](#qiskit.primitives.BitArray.reshape "qiskit.primitives.BitArray.reshape") if your samples represent nested data.

**Parameters**

*   **samples** (*Iterable\[*[*str*](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.12)")*] | Iterable\[*[*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")*]*) – A list of bitstrings, a list of integers, or a list of hexstrings.
*   **num\_bits** ([*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)") *| None*) – The desired number of bits per sample. If unset, the biggest sample provided is used to determine this value.

**Returns**

A new bit array.

**Raises**

[**ValueError**](https://docs.python.org/3/library/exceptions.html#ValueError "(in Python v3.12)") – If no strings are given.

**Return type**

[BitArray](#qiskit.primitives.BitArray "qiskit.primitives.BitArray")

### get\_bitstrings

<span id="qiskit.primitives.BitArray.get_bitstrings" />

`get_bitstrings(loc=None)`

Return a list of bitstrings.

**Parameters**

**loc** ([*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")  *|*[*tuple*](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.12)")*\[*[*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")*, ...] | None*) – Which entry of this array to return a dictionary for. If `None`, counts from all positions in this array are unioned together.

**Returns**

A list of bitstrings.

**Return type**

[list](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.12)")\[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.12)")]

### get\_counts

<span id="qiskit.primitives.BitArray.get_counts" />

`get_counts(loc=None)`

Return a counts dictionary with bitstring keys.

**Parameters**

**loc** ([*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")  *|*[*tuple*](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.12)")*\[*[*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")*, ...] | None*) – Which entry of this array to return a dictionary for. If `None`, counts from all positions in this array are unioned together.

**Returns**

A dictionary mapping bitstrings to the number of occurrences of that bitstring.

**Return type**

[dict](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.12)")\[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.12)"), [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")]

### get\_int\_counts

<span id="qiskit.primitives.BitArray.get_int_counts" />

`get_int_counts(loc=None)`

Return a counts dictionary, where bitstrings are stored as `int`s.

**Parameters**

**loc** ([*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")  *|*[*tuple*](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.12)")*\[*[*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")*, ...] | None*) – Which entry of this array to return a dictionary for. If `None`, counts from all positions in this array are unioned together.

**Returns**

A dictionary mapping `ints` to the number of occurrences of that `int`.

**Return type**

[dict](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.12)")\[[int](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)"), [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")]

### reshape

<span id="qiskit.primitives.BitArray.reshape" />

`reshape(*shape)`

Return a new reshaped bit array.

The [`num_shots`](#qiskit.primitives.BitArray.num_shots "qiskit.primitives.BitArray.num_shots") axis is either included or excluded from the reshaping procedure depending on which picture the new shape is compatible with. For example, for a bit array with shape `(20, 5)` and `64` shots, a reshape to `(100,)` would leave the number of shots intact, whereas a reshape to `(200, 32)` would change the number of shots to `32`.

**Parameters**

**\*shape** ([*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)") *| Iterable\[ShapeInput]*) – The new desired shape.

**Returns**

A new bit array.

**Raises**

[**ValueError**](https://docs.python.org/3/library/exceptions.html#ValueError "(in Python v3.12)") – If the size corresponding to your new shape is not equal to either [`size`](#qiskit.primitives.BitArray.size "qiskit.primitives.BitArray.size"), or the product of [`size`](#qiskit.primitives.BitArray.size "qiskit.primitives.BitArray.size") and [`num_shots`](#qiskit.primitives.BitArray.num_shots "qiskit.primitives.BitArray.num_shots").

**Return type**

[BitArray](#qiskit.primitives.BitArray "qiskit.primitives.BitArray")

