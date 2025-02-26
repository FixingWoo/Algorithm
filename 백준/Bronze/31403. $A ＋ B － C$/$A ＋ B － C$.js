const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [a, b, c] = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const [A, B, C] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

console.log(a + b - c);
console.log(A + B - C);
