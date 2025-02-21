const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const a = input[1].split(' ').map(Number);

let max = a[0];
let min = a[0];

for (let i = 1; i < a.length; i++) {
  if (max < a[i]) {
    max = a[i];
  }

  if (min > a[i]) {
    min = a[i];
  }
}

console.log(min, max);
