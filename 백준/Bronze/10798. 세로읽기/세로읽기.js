const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const maxLen = Math.max(...input.map((line) => line.length));
let result = '';

for (let i = 0; i < maxLen; i++) {
  for (let j = 0; j < input.length; j++) {
    if (input[j][i] && input[j][i] !== ' ') {
      result += input[j][i];
    }
  }
}

console.log(result);
