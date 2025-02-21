const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const num = input[0];

for (let i = 1; i <= num; i++) {
  let row = '';

  for (let j = 0; j < num - i; j++) {
    row += ' ';
  }

  for (let k = 0; k < i; k++) {
    row += '*';
  }

  console.log(row);
}
