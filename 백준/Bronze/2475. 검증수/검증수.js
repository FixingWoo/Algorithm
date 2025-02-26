const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

const result = input.reduce((acc, value) => {
  acc += Math.pow(value, 2);
  return acc;
}, 0);

console.log(result % 10);
