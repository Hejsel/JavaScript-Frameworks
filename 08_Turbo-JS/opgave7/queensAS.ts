export function erPrimtal(n: i32): bool {
    if (n < 2) return false;
    for (let i: i32 = 2; i * i <= n; i++) {
      if (n % i == 0) return false;
    }
    return true;
  }
  
  export function findPrimtal(antal: i32): i32[] {
    let primtal = new Array<i32>(antal);
    let kandidat: i32 = 2;
    let fundet: i32 = 0;
  
    while (fundet < antal) {
      if (erPrimtal(kandidat)) {
        primtal[fundet] = kandidat;
        fundet++;
      }
      kandidat++;
    }
  
    return primtal;
  }
  