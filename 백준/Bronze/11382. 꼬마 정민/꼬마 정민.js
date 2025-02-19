const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// const input = fs.readFileSync('test.txt').toString().trim().split('\n');

function func(arr) {
  const [a, b, c] = arr[0].split(' ').map(Number);

  console.log(a + b + c);
}

func(input);