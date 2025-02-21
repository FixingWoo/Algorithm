const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const basket = Array.from({ length: N }, (_) => 0);

for (let n = 1; n <= M; n++) {
  const [i, j, k] = input[n].split(' ').map(Number);
  basket.fill(k, i - 1, j);
}

console.log(basket.join(' '));
