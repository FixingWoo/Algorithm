const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const basket = Array.from({ length: N + 1 }, (_, i) => i);

for (let n = 1; n <= M; n++) {
  const [i, j] = input[n].split(' ').map(Number);
  [basket[i], basket[j]] = [basket[j], basket[i]];
}

console.log(basket.slice(1).join(' '));
