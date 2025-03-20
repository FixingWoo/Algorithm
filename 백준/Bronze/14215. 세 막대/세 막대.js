const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const [a, b, c] = input.sort((a, b) => a - b);

if (a + b <= c) {
  console.log(2 * a + 2 * b - 1);
} else {
  console.log(a + b + c);
}
