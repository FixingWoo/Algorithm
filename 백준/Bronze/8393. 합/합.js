const fs = require('fs');

const [a] = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

let sum = 0;

for (let i = 1; i <= a; i++) {
  sum += i;
}

console.log(sum);
