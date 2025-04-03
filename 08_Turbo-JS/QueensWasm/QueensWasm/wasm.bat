call emcc QueensC++.cpp -o QueensC++.wasm -O3 -flto -s DISABLE_EXCEPTION_CATCHING=1 -s STANDALONE_WASM=1 -s ALLOW_MEMORY_GROWTH=0 --no-entry
rem -s EXPORTED_FUNCTIONS="['_fasterPositionQueens']"