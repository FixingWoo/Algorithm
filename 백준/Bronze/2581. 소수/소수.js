const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const [M, N] = input;
const nums = [];

function isPrime(num) {
  if (num < 2) return false;

  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }

  return true;
}

for (let i = M; i <= N; i++) {
  if (isPrime(i)) nums.push(i);
}

if (nums.length > 0) {
  console.log(
    nums.reduce((acc, value) => {
      acc += value;
      return acc;
    })
  );

  console.log(Math.min(...nums));
} else {
  console.log(-1);
}
