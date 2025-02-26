const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0]);
let count = N;

for (let i = 1; i <= N; i++) {
  const word = input[i];
  const seen = new Set();
  let prev = '';

  for (let char of word) {
    if (seen.has(char) && prev !== char) {
      count--;
      break;
    }

    seen.add(char);
    prev = char;
  }
}

console.log(count);
