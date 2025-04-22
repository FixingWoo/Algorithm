const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const board = input.slice(1);

let min = Infinity;

for (let i = 0; i <= N - 8; i++) {
  for (let j = 0; j <= M - 8; j++) {
    let wStart = 0;
    let bStart = 0;

    for (let x = 0; x < 8; x++) {
      for (let y = 0; y < 8; y++) {
        const cur = board[i + x][j + y];
        const shouldBeWhite = (x + y) % 2 === 0;

        if (shouldBeWhite) {
          if (cur !== 'W') wStart++;
          if (cur !== 'B') bStart++;
        } else {
          if (cur !== 'B') wStart++;
          if (cur !== 'W') bStart++;
        }
      }
    }

    min = Math.min(min, wStart, bStart);
  }
}

console.log(min);
