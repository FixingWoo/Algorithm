const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

let N = Number(input);

if (N === 1) return;

for (let i = 2; i * i <= N; i++) {
  while (N % i === 0) {
    console.log(i);
    N /= i;
  }
}

if (N > 1) console.log(N);
