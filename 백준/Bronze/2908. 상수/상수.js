const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [a, b] = input[0]
  .split(' ')
  .map((num) => num.split('').reverse().join(''));

console.log(Math.max(a, b));
