---
title: StagedPassManager
description: API reference for qiskit.transpiler.StagedPassManager
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.transpiler.StagedPassManager
---

# StagedPassManager

<span id="qiskit.transpiler.StagedPassManager" />

`qiskit.transpiler.StagedPassManager(stages=None, **kwargs)`

Bases: [`PassManager`](qiskit.transpiler.PassManager "qiskit.transpiler.passmanager.PassManager")

A Pass manager pipeline built up of individual stages

This class enables building a compilation pipeline out of fixed stages. Each `StagedPassManager` defines a list of stages which are executed in a fixed order, and each stage is defined as a standalone [`PassManager`](qiskit.transpiler.PassManager "qiskit.transpiler.PassManager") instance. There are also `pre_` and `post_` stages for each defined stage. This enables easily composing and replacing different stages and also adding hook points to enable programmatic modifications to a pipeline. When using a staged pass manager you are not able to modify the individual passes and are only able to modify stages.

By default instances of `StagedPassManager` define a typical full compilation pipeline from an abstract virtual circuit to one that is optimized and capable of running on the specified backend. The default pre-defined stages are:

1.  `init` - any initial passes that are run before we start embedding the circuit to the backend
2.  `layout` - This stage runs layout and maps the virtual qubits in the circuit to the physical qubits on a backend
3.  `routing` - This stage runs after a layout has been run and will insert any necessary gates to move the qubit states around until it can be run on backend’s coupling map.
4.  `translation` - Perform the basis gate translation, in other words translate the gates in the circuit to the target backend’s basis set
5.  `optimization` - The main optimization loop, this will typically run in a loop trying to optimize the circuit until a condition (such as fixed depth) is reached.
6.  `scheduling` - Any hardware aware scheduling passes

<Admonition title="Note" type="note">
  For backwards compatibility the relative positioning of these default stages will remain stable moving forward. However, new stages may be added to the default stage list in between current stages. For example, in a future release a new phase, something like `logical_optimization`, could be added immediately after the existing `init` stage in the default stage list. This would preserve compatibility for pre-existing `StagedPassManager` users as the relative positions of the stage are preserved so the behavior will not change between releases.
</Admonition>

These stages will be executed in order and any stage set to `None` will be skipped. If a stage is provided multiple times (i.e. at diferent relative positions), the associated passes, including pre and post, will run once per declaration. If a [`PassManager`](qiskit.transpiler.PassManager "qiskit.transpiler.PassManager") input is being used for more than 1 stage here (for example in the case of a `Pass` that covers both Layout and Routing) you will want to set that to the earliest stage in sequence that it covers.

Initialize a new StagedPassManager object

**Parameters**

*   **stages** (*Iterable\[*[*str*](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.12)")*]*) – An optional list of stages to use for this instance. If this is not specified the default stages list `['init', 'layout', 'routing', 'translation', 'optimization', 'scheduling']` is used. After instantiation, the final list will be immutable and stored as tuple. If a stage is provided multiple times (i.e. at diferent relative positions), the associated passes, including pre and post, will run once per declaration.
*   **kwargs** – The initial [`PassManager`](qiskit.transpiler.PassManager "qiskit.transpiler.PassManager") values for any stages defined in `stages`. If a argument is not defined the stages will default to `None` indicating an empty/undefined stage.

**Raises**

*   [**AttributeError**](https://docs.python.org/3/library/exceptions.html#AttributeError "(in Python v3.12)") – If a stage in the input keyword arguments is not defined.
*   [**ValueError**](https://docs.python.org/3/library/exceptions.html#ValueError "(in Python v3.12)") – If an invalid stage name is specified.

## Attributes

<span id="qiskit.transpiler.StagedPassManager.expanded_stages" />

### expanded\_stages

Expanded Pass manager stages including `pre_` and `post_` phases.

<span id="qiskit.transpiler.StagedPassManager.invalid_stage_regex" />

### invalid\_stage\_regex = re.compile('\\\s|\\\\+|\\\\-|\\\\\*|\\\\/|\\\\\\\\|\\\\%|\\\\\<|\\\\>|\\\\@|\\\\!|\\\\\~|\\\\^|\\\\&|\\\\

`= re.compile('\\s|\\+|\\-|\\*|\\/|\\\\|\\%|\\<|\\>|\\@|\\!|\\~|\\^|\\&|\\:`

`= re.compile('\\s|\\+|\\-|\\*|\\/|\\\\|\\%|\\<|\\>|\\@|\\!|\\~|\\^|\\&|\\:|\\[|\\]|\\{|\\}|\\(|\\)')`

<span id="qiskit.transpiler.StagedPassManager.stages" />

### stages

Pass manager stages

## Methods

### append

<span id="qiskit.transpiler.StagedPassManager.append" />

`append(passes, max_iteration=None, **flow_controller_conditions)`

Append a Pass Set to the schedule of passes.

<Admonition title="Deprecated since version 0.25_pending" type="danger">
  `qiskit.transpiler.passmanager.PassManager.append()`’s argument `max_iteration` is pending deprecation as of qiskit-terra 0.25. It will be marked deprecated in a future release, and then removed no earlier than 3 months after the release date. ‘max\_iteration’ can be set in the constructor.
</Admonition>

**Parameters**

*   **passes** (*Task |* [*list*](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.12)")*\[Task]*) – A set of passes (a pass set) to be added to schedule. A pass set is a list of passes that are controlled by the same flow controller. If a single pass is provided, the pass set will only have that pass a single element. It is also possible to append a `BaseFlowController` instance and the rest of the parameter will be ignored.

*   **max\_iteration** ([*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")) – max number of iterations of passes.

*   **flow\_controller\_conditions** (*Any*) –

    Dictionary of control flow plugins. Following built-in controllers are available by default:

    *   do\_while: The passes repeat until the callable returns False. Corresponds to [`DoWhileController`](qiskit.passmanager.DoWhileController "qiskit.passmanager.DoWhileController").
    *   condition: The passes run only if the callable returns True. Corresponds to [`ConditionalController`](qiskit.passmanager.ConditionalController "qiskit.passmanager.ConditionalController").

    In general, you have more control simply by creating the controller you want and passing it to [`append()`](#qiskit.transpiler.StagedPassManager.append "qiskit.transpiler.StagedPassManager.append").

**Raises**

[**TranspilerError**](transpiler#qiskit.transpiler.TranspilerError "qiskit.transpiler.TranspilerError") – if a pass in passes is not a proper pass.

### draw

<span id="qiskit.transpiler.StagedPassManager.draw" />

`draw(filename=None, style=None, raw=False)`

Draw the staged pass manager.

### passes

<span id="qiskit.transpiler.StagedPassManager.passes" />

`passes()`

Return a list structure of the appended passes and its options.

**Returns**

A list of pass sets, as defined in `append()`.

**Return type**

[list](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.12)")\[[dict](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.12)")\[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.12)"), qiskit.transpiler.basepasses.BasePass]]

### remove

<span id="qiskit.transpiler.StagedPassManager.remove" />

`remove(index)`

Removes a particular pass in the scheduler.

**Parameters**

**index** ([*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")) – Pass index to remove, based on the position in [`passes()`](transpiler_passes#module-qiskit.transpiler.passes "qiskit.transpiler.passes").

**Raises**

[**PassManagerError**](passmanager#qiskit.passmanager.PassManagerError "qiskit.passmanager.PassManagerError") – If the index is not found.

### replace

<span id="qiskit.transpiler.StagedPassManager.replace" />

`replace(index, passes, max_iteration=None, **flow_controller_conditions)`

Replace a particular pass in the scheduler.

<Admonition title="Deprecated since version 0.25_pending" type="danger">
  `qiskit.transpiler.passmanager.PassManager.replace()`’s argument `max_iteration` is pending deprecation as of qiskit-terra 0.25. It will be marked deprecated in a future release, and then removed no earlier than 3 months after the release date. ‘max\_iteration’ can be set in the constructor.
</Admonition>

**Parameters**

*   **index** ([*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")) – Pass index to replace, based on the position in passes().
*   **passes** (*BasePass |* [*list*](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.12)")*\[BasePass]*) – A pass set to be added to the pass manager schedule.
*   **max\_iteration** ([*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")) – max number of iterations of passes.
*   **flow\_controller\_conditions** (*Any*) – Dictionary of control flow plugins. See [`qiskit.transpiler.PassManager.append()`](qiskit.transpiler.PassManager#append "qiskit.transpiler.PassManager.append") for details.

### run

<span id="qiskit.transpiler.StagedPassManager.run" />

`run(circuits, output_name=None, callback=None)`

Run all the passes on the specified `circuits`.

**Parameters**

*   **circuits** (*\_CircuitsT*) – Circuit(s) to transform via all the registered passes.

*   **output\_name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.12)") *| None*) – The output circuit name. If `None`, it will be set to the same as the input circuit name.

*   **callback** (*Callable | None*) –

    A callback function that will be called after each pass execution. The function will be called with 5 keyword arguments:

    ```python
    pass_ (Pass): the pass being run
    dag (DAGCircuit): the dag output of the pass
    time (float): the time to execute the pass
    property_set (PropertySet): the property set
    count (int): the index for the pass execution
    ```

    <Admonition title="Note" type="note">
      Beware that the keyword arguments here are different to those used by the generic [`BasePassManager`](qiskit.passmanager.BasePassManager "qiskit.passmanager.BasePassManager"). This pass manager will translate those arguments into the form described above.
    </Admonition>

    The exact arguments pass expose the internals of the pass manager and are subject to change as the pass manager internals change. If you intend to reuse a callback function over multiple releases be sure to check that the arguments being passed are the same.

    To use the callback feature you define a function that will take in kwargs dict and access the variables. For example:

    ```python
    def callback_func(**kwargs):
        pass_ = kwargs['pass_']
        dag = kwargs['dag']
        time = kwargs['time']
        property_set = kwargs['property_set']
        count = kwargs['count']
        ...
    ```

**Returns**

The transformed circuit(s).

**Return type**

\_CircuitsT

### to\_flow\_controller

<span id="qiskit.transpiler.StagedPassManager.to_flow_controller" />

`to_flow_controller()`

Linearize this manager into a single [`FlowControllerLinear`](qiskit.passmanager.FlowControllerLinear "qiskit.passmanager.FlowControllerLinear"), so that it can be nested inside another pass manager.

**Returns**

A linearized pass manager.

**Return type**

*RunningPassManager*

