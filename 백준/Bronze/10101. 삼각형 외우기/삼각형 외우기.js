const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [a, b, c] = input.map(Number);
const sum = a + b + c;

if (sum !== 180) {
  console.log('Error');
} else if (a === b && b === c) {
  console.log('Equilateral');
} else if (a === b || b === c || a === c) {
  console.log('Isosceles');
} else {
  console.log('Scalene');
}
