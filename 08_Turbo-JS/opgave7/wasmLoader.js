async function loadWasm() {
    const response = await fetch("queensAS.wasm");
    const buffer = await response.arrayBuffer();
    const wasmModule = await WebAssembly.instantiate(buffer);
    return wasmModule.instance.exports;
}

async function beregnPrimtal() {
    const wasm = await loadWasm();
    const primtal = wasm.findPrimtal(10000);
    
    document.getElementById("resultat").textContent =
        "Sidste primtal fundet: " + primtal[primtal.length - 1];
}
