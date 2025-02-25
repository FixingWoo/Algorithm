const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
for (let i = 1; i < input.length; i++) {
  const word = input[i];
  console.log(word[0] + word[word.length - 1]);
}
