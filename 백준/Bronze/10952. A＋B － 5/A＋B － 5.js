const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

input.forEach((item) => {
  const [a, b] = item.split(' ').map(Number);
  const sum = a + b;

  if (sum) {
    console.log(sum);
  }
});
