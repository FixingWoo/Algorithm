const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './test.txt')
  .toString()
  .trim();

let n = input;
let count = 0;

while (n >= 0) {
  if (n % 5 === 0) {
    count += n / 5;
    console.log(count);
    return;
  }
  n -= 3;
  count += 1;
}

console.log(-1);
