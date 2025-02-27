const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

for (let i = 1; i <= input[0]; i++) {
  const [H, _, N] = input[i].split(' ').map(Number);

  const Y = N % H === 0 ? H : N % H;
  const X = Math.ceil(N / H);

  console.log(`${Y}${X.toString().padStart(2, '0')}`);
}
