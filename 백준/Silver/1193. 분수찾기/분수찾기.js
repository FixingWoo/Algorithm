const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const X = Number(input);
let n = 1; // 대각선 번호

while ((n * (n + 1)) / 2 < X) {
  n++;
}

const prevSum = (n * (n - 1)) / 2;
const k = X - prevSum;

const numerator = n % 2 === 0 ? k : n - k + 1;
const denominator = n % 2 === 0 ? n - k + 1 : k;

console.log(`${numerator}/${denominator}`);
