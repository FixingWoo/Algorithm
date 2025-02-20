const fs = require('fs');
const [a, b] = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map(Number);
// const [a, b] = fs
//   .readFileSync('test.txt')
//   .toString()
//   .trim()
//   .split(' ')
//   .map(Number);

function solution(a, b) {
  let h = a;
  let m = b;

  if (m < 45) {
    h = h == 0 ? 23 : (h -= 1);
    m = b - 45 + 60;
  } else {
    m = b - 45;
  }

  console.log(h, m);
}

solution(a, b);