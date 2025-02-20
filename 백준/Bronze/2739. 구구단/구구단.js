const fs = require('fs');

const [a] = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

let price = 0;

for (let i = 1; i <= 9; i++) {
  console.log(`${a} * ${i} = ${a * i}`);
}
