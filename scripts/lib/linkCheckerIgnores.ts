// This code is a Qiskit project.
//
// (C) Copyright IBM 2023.
//
// This code is licensed under the Apache License, Version 2.0. You may
// obtain a copy of this license in the LICENSE file in the root directory
// of this source tree or at http://www.apache.org/licenses/LICENSE-2.0.
//
// Any modifications or derivative works of this code must retain this
// copyright notice, and modified files need to carry a notice indicating
// that they have been altered from the originals.

// The links in the files are not searched to see if they are valid.
// The files need a list of links to be ignored.
//
// If all links in the file should be ignored, then modify GLOBS_TO_CHECK in checkLinks.ts, such
// as adding '!docs/my_file.md` to the list. If other files link to the file,
// then you may need to add it to GLOBS_TO_LOAD in checkLinks.ts.
const FILES_TO_IGNORES: { [id: string]: string[] } = {
  "docs/api/qiskit-ibm-provider/ibm-provider.md": ["ibm_provider"],
  "docs/api/qiskit-ibm-runtime/ibm-runtime.md": ["runtime_service"],
  "docs/api/qiskit/pulse.md": [
    "qiskit.pulse.library.Constant_class.rst#qiskit.pulse.library.Constant",
    "qiskit.pulse.library.Drag_class.rst#qiskit.pulse.library.Drag",
    "qiskit.pulse.library.Drag_class.rst#qiskit.pulse.library.Drag",
    "qiskit.pulse.library.Gaussian_class.rst#qiskit.pulse.library.Gaussian",
    "qiskit.pulse.library.Gaussian_class.rst#qiskit.pulse.library.Gaussian",
    "qiskit.pulse.library.Sin_class.rst#qiskit.pulse.library.Sin",
    "qiskit.pulse.library.Cos_class.rst#qiskit.pulse.library.Cos",
    "qiskit.pulse.library.Sawtooth_class.rst#qiskit.pulse.library.Sawtooth",
    "qiskit.pulse.library.Triangle_class.rst#qiskit.pulse.library.Triangle",
    "qiskit.pulse.library.Square_fun.rst#qiskit.pulse.library.Square",
    "qiskit.pulse.library.Sech_fun.rst#qiskit.pulse.library.Sech",
  ],
  "docs/api/qiskit/qiskit.algorithms.optimizers.NFT.md": ["#id2", "#id1"],
  "docs/api/qiskit/qpy.md": [
    "circuit#qiskit.circuit.CASE_DEFAULT",
    "#id8",
    "#id2",
    "#f8",
    "#id6",
    "#id4",
    "#f3",
    "#f2",
    "#f1",
    "/api/qiskit/circuit#qiskit.circuit.CircuitError",
    "id2",
    "/api/qiskit/qpy#id1",
    "/api/qiskit/circuit#qiskit.circuit.CircuitError'",
  ],
  "docs/api/qiskit/qiskit.circuit.QuantumCircuit.md": [
    "qiskit.org/documentation/tutorials/circuits/3_summary_of_quantum_operations",
    "circuit#qiskit.circuit.CASE_DEFAULT",
  ],
  "docs/api/qiskit/qiskit.circuit.SwitchCaseOp.md": [
    "circuit#qiskit.circuit.CASE_DEFAULT",
  ],
  "docs/api/qiskit/qiskit.pulse.library.GaussianSquareDrag.md": [
    "qiskit.pulse.library.Drag_class.rst#qiskit.pulse.library.Drag",
    "qiskit.pulse.library.Gaussian_class.rst#qiskit.pulse.library.Gaussian",
  ],
  "docs/api/qiskit/utils.md": [
    "https://github.com/python-constraint/python-constraint%3E__",
    "#qiskit.utils.optionals.HAS_TESTTOOLS",
    "#qiskit.utils.optionals.HAS_GRAPHVIZ",
    "#qiskit.utils.optionals.HAS_PYDOT",
  ],
  "docs/api/qiskit-ibm-provider/qiskit_ibm_provider.IBMProvider.md": [
    "https://auth.quantum.ibm.com/api",
  ],
  "docs/api/qiskit-ibm-runtime/qiskit_ibm_runtime.QiskitRuntimeService.md": [
    "https://auth.quantum.ibm.com/api",
  ],
  "docs/api/qiskit/algorithms.md": ["https://www.qiskit.org/terra"],
  "docs/api/qiskit/qiskit.algorithms.Grover.md": [
    "https://qiskit.org/textbook/ch-algorithms/grover.html",
  ],
  "docs/api/qiskit/qiskit.algorithms.optimizers.ISRES.md": [
    "https://notendur.hi.is/tpr/software/sres/Tec311r.pdf",
  ],
  "docs/api/qiskit/qiskit.algorithms.optimizers.SPSA.md": [
    "https://ieeexplore.ieee.org/document/657661",
  ],
};

export default FILES_TO_IGNORES;
