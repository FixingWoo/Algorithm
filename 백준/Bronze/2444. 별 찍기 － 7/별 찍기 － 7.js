const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = input;

for (let i = 1; i <= N; i++) {
  console.log(' '.repeat(N - i) + '*'.repeat(2 * i - 1));
}

for (let i = N - 1; i >= 1; i--) {
  console.log(' '.repeat(N - i) + '*'.repeat(2 * i - 1));
}
