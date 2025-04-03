const fs = require('fs');
const wasmBuffer = fs.readFileSync('QueensC++.wasm');
console.log(wasmBuffer.length);
const importObject ={}/* {
  env: {
    abort: function (arg1, arg2, arg3, arg4) {
      console.error(`Abort med args: ${arg1}, ${arg2}, ${arg3}, ${arg4}`);
      throw new Error("fra WebAssembly");
    }
  }
}*/;
WebAssembly.instantiate(wasmBuffer,importObject)
  .then(wasmModule => {
    const { fasterPositionQueens } = wasmModule.instance.exports;
    const queens = process.argv[2] || 14, iterationer = process.argv[3] || 7;
    let minima = [];
    console.log(`Beregner ${queens}`);
    for (let i = 1; i <= iterationer; i++) {
      let tid = performance.now();
      let løsninger = fasterPositionQueens(queens);
      tid = (performance.now() - tid);
      console.log(`${i}. ${løsninger} på ${tid/1000}`);
      minima.push(tid);
    }
    minima.sort((a,b)=>Number(a)-Number(b));
    let avg = (minima[0] + minima[1] + minima[2]) / 3000;
    console.log(`Gennemsnittet af de tre hurtigste er `, avg);
  })
  .catch(err => {
    console.error('Error loading WebAssembly module:', err);
  });