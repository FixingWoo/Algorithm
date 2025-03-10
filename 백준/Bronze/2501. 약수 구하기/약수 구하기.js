const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const [N, K] = input.split(' ').map(Number);
const divisors = [];

for (let i = 1; i <= N; i++) {
  if (N % i === 0) {
    divisors.push(i);
  }
}

divisors[K - 1] ? console.log(divisors[K - 1]) : console.log(0);
