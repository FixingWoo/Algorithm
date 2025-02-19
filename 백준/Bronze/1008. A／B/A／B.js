const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function divide(arr) {
  const [a, b] = arr[0].split(' ');

  console.log(Number(a) / Number(b));
}

divide(input);
