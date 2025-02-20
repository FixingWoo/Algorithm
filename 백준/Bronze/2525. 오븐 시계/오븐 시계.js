const fs = require('fs');

const [current, cooktime] = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

let [h, m] = current.split(' ').map(Number);

m += parseInt(cooktime);

if (m >= 60) {
  h += Math.floor(m / 60);
  m = m % 60;
}

if (h >= 24) {
  h = h % 24;
}

console.log(h, m);
