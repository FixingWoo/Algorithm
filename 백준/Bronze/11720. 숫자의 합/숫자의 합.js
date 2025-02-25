const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const nums = input[1].split('').map(Number);
let sum = 0;

nums.forEach((num) => {
  sum += num;
});

console.log(sum);
