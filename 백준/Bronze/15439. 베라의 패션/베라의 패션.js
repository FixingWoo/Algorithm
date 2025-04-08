const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './test.txt')
  .toString()
  .trim();

const N = parseInt(input);
console.log(N * (N - 1));
