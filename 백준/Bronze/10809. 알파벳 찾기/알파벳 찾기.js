const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// let result = Array.from({ length: 26 }, (_) => -1);
const result = Array(26).fill(-1);
const str = input[0];

for (let i = 0; i < str.length; i++) {
  const char = str[i];
  const index = char.charCodeAt(0) - 'a'.charCodeAt(0);

  if (result[index] === -1) {
    result[index] = i;
  }
}

console.log(result.join(' '));
