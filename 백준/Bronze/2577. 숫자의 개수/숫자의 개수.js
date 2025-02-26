const fs = require('fs');
const [a, b, c] = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const str = String(a * b * c);
const count = Array(10).fill(0);

str.split('').forEach((num) => count[num]++);
count.forEach((num) => console.log(num));
