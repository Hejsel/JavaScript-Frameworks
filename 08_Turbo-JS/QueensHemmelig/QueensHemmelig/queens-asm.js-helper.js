import { asmBenchmark } from './Queens-Asm.js';
document.getElementById("start").addEventListener("click",løs);
function løs() {
  const queens = Number(document.getElementById("dronninger").value || 14);
  let iterationer = Number(document.getElementById("iterationer").value || 7);
  const output = document.getElementById("output");
  let minima = [];
  output.innerHTML += `Beregner ${queens}<br>`;
  setTimeout(() => requestAnimationFrame(mål), 50);
  function mål() {
    let tid = performance.now();
    var asmModule = asmBenchmark(window, { q: queens }, new ArrayBuffer(16 * 1024 * 1024));
    let løsninger = asmModule.queens();
    tid = (performance.now() - tid);
    output.innerHTML += `${iterationer}. ${løsninger} på ${tid / 1000}<br>`;
    minima.push(tid);
    if (!(--iterationer)) {
      minima.sort((a, b) => Number(a) - Number(b));
      let avg = (minima[0] + minima[1] + minima[2]) / 3000;
      output.innerHTML += `Gennemsnittet af de tre hurtigste er ${avg}<br>`;
    } else requestAnimationFrame(mål);
  }
}