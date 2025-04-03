export function JSqueens(q:i32):i32 {
  var noOfQueens:i32 = q, row:i32 = 0, minus1:i32 = noOfQueens - 1, col:i32 = 0;
  var queens: StaticArray<i32> = new StaticArray<i32>(32), noOfSolutions:i32 = 0;
  var columnOccupied: StaticArray<i32> = new StaticArray<i32>(32);
  var venstreDiagonalOccupied: StaticArray<i32> = new StaticArray<i32>(32);
  var højreDiagonalOccupied: StaticArray<i32> = new StaticArray<i32>(32);
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
    while (true) {
      columnOccupied[col = queens[row]] = 0;
      venstreDiagonalOccupied[row + col] = 0;
      højreDiagonalOccupied[row + minus1 - col] = 0;
      if (++col === noOfQueens) {
        if (--row < 0) return noOfSolutions;
      } else break;
    }
  } while (true);
}