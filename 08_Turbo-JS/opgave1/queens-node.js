function fasterPositionQueens(noOfQueens) {
  var queens = new Uint32Array(noOfQueens), columnOccupied = new Uint32Array(noOfQueens);
  var venstreDiagonalOccupied = new Uint32Array(noOfQueens * 2), højreDiagonalOccupied = new Uint32Array(noOfQueens * 2);
  var row = 0, minus1 = noOfQueens - 1, col = 0, noOfSolutions = 0;
  do {
    do {
      if (columnOccupied[col] || venstreDiagonalOccupied[row + col] || højreDiagonalOccupied[row + minus1 - col]) {
        ++col;
      } else {
        if (row >= minus1) {
          ++noOfSolutions; break;
        } else {
          columnOccupied[col] = 1;
          venstreDiagonalOccupied[row + col] = 1;
          højreDiagonalOccupied[row + minus1 - col] = 1;
          queens[row++] = col;              
          col = 0;
        }
      }
    } while (col < noOfQueens);
    if (--row < 0) return noOfSolutions;
    while (1) {
      columnOccupied[col = queens[row]] = 0;
      venstreDiagonalOccupied[row + col] = 0;
      højreDiagonalOccupied[row + minus1 - col] = 0;
      if (++col === noOfQueens) {
        if (--row < 0) return noOfSolutions;
      } else break;
    }
  } while (1);
}
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