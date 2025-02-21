const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let anwser = '';

for (let i = 1; i < input.length; i++) {
  const [a, b] = input[i].split(' ').map(Number);
  anwser += a + b + '\n';
}

console.log(anwser);
