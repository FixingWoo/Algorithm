const fs = require('fs');

const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const originPieces = [1, 1, 2, 2, 2, 8];
const result = originPieces.map((piece, i) => piece - input[i]);
console.log(result.join(' '));
