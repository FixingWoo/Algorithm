const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './test.txt')
  .toString()
  .trim();

const N = Number(input);
console.log(Math.pow(2, N));
