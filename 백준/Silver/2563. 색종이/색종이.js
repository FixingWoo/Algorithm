const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = parseInt(input[0]);
const paper = Array.from({ length: 100 }, () => Array(100).fill(0));

for (let i = 1; i <= N; i++) {
  const [x, y] = input[i].split(' ').map(Number);

  for (let row = x; row < x + 10; row++) {
    for (let col = y; col < y + 10; col++) {
      paper[row][col] = 1;
    }
  }
}

let result = 0;
for (let i = 0; i < 100; i++) {
  for (let j = 0; j < 100; j++) {
    if (paper[i][j] === 1) result++;
  }
}

console.log(result);
