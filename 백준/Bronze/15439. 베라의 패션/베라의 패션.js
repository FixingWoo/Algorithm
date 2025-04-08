const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './test.txt')
  .toString()
  .trim();

const N = Number(input);
const n = N - 1;

if (N === 1) {
  console.log(0);
} else {
  console.log(N * n);
}
