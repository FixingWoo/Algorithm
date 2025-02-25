const fs = require('fs');

const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const originPieces = [1, 1, 2, 2, 2, 8];
const pieces = input;

const result = originPieces.map((piece, i) => {
  return piece - pieces[i];
});

console.log(result.join(' '));
