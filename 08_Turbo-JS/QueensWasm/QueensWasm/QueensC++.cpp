#include <cstdint>
#include <cstdlib>
#include <algorithm>
#include <iostream>
#include <emscripten.h>

extern "C"
{
  EMSCRIPTEN_KEEPALIVE

  int fasterPositionQueens(int32_t noOfQueens)
  {
    int32_t queens[32] = {};
    bool columnOccupied[32] = {};
    bool venstreDiagonalOccupied[64] = {};
    bool hojreDiagonalOccupied[64] = {};
    int32_t row = 0;
    int32_t minus1 = noOfQueens - 1;
    int32_t col = 0;
    unsigned int noOfSolutions = 0;
    do
    {
      do
      {
        if (columnOccupied[col] || venstreDiagonalOccupied[row + col] || hojreDiagonalOccupied[row + minus1 - col])
        {
          col++;
        }
        else
        {
          if (row >= minus1)
          {
            ++noOfSolutions;
            break;
          }
          else
          {
            columnOccupied[col] = true;
            venstreDiagonalOccupied[row + col] = true;
            hojreDiagonalOccupied[row + minus1 - col] = true;
            queens[row++] = col;
            col = 0;
          }
        }
      } while (col < noOfQueens);
      if (--row < 0)
        return noOfSolutions;
      while (true)
      {
        columnOccupied[col = queens[row]] = false;
        venstreDiagonalOccupied[row + col] = false;
        hojreDiagonalOccupied[row + minus1 - col] = false;
        if (++col == noOfQueens)
        {
          if (--row < 0)
            return noOfSolutions;
        }
        else
          break;
      }
    } while (true);
  }
}