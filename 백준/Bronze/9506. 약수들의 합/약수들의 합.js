const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

function getDivisor(num) {
  const divisors = [];

  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      divisors.push(i);
    }
  }

  return divisors;
}

for (let i = 0; i < input.length; i++) {
  const num = input[i];

  if (num < 0) break;

  const divisors = getDivisor(num);
  const sum = divisors.reduce((acc, divisor) => acc + divisor, 0);

  if (num === sum) {
    console.log(`${num} = ${divisors.join(' + ')}`);
  } else {
    console.log(`${num} is NOT perfect.`);
  }
}
