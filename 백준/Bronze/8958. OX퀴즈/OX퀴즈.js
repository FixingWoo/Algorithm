const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const strs = input.slice(1);

strs.forEach((str) => {
  let count = 0;
  let total = 0;

  for (let char of str) {
    if (char === 'O') {
      count++;
      total += count;
    } else {
      count = 0;
    }
  }

  console.log(total);
});
