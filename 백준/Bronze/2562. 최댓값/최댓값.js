const fs = require('fs');

const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(Number);
console.log(Math.max(...input));
console.log(input.findIndex((item) => item === Math.max(...input)) + 1);
