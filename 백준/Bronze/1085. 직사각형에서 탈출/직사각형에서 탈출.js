const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const [X, Y, W, H] = input;
console.log(Math.min(W - X, H - Y, X, Y));
