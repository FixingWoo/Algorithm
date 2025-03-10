const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const nums = input[1].split(' ').map(Number);

function isPrime(num) {
  if (num < 2) return false;

  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }

  return true;
}

let count = 0;
for (let num of nums) {
  if (isPrime(num)) count++;
}

console.log(count);
