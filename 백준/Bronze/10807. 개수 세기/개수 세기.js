const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [_, str, target] = input;
const numbers = str.split(' ');

let result = 0;

numbers.forEach((number) => {
  if (number === target) {
    result += 1;
  }
});

console.log(result);
