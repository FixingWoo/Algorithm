const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const sum = input[1]
  .split('')
  .map(Number)
  .reduce((c, v) => c + v);

console.log(sum);
