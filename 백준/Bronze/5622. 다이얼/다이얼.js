const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim();

const dial = {
  ABC: 3,
  DEF: 4,
  GHI: 5,
  JKL: 6,
  MNO: 7,
  PQRS: 8,
  TUV: 9,
  WXYZ: 10,
};

let sum = 0;

for (let i = 0; i < input.length; i++) {
  for (let key in dial) {
    if (key.includes(input[i])) {
      sum += dial[key];
    }
  }
}

console.log(sum);
