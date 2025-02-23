const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const remainders = input.map((item) => item % 42);
const frequency = {};

remainders.forEach((item) => {
  if (frequency[item]) {
    frequency[item]++;
  } else {
    frequency[item] = 1;
  }
});

const count = Object.keys(frequency).length;

console.log(count);

// after > 빈도수로 접근하지 않고 Set으로 하면 더 간단할것을...
