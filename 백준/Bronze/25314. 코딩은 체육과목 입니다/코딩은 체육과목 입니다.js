const fs = require('fs');

const [number] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const quotient = number / 4;

let result = '';

for (let i = 0; i < quotient; i++) {
  result += 'long ';
}

console.log((result += 'int'));
