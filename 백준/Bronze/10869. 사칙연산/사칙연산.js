const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// const input = fs.readFileSync('test.txt').toString().trim().split('\n');

function func(arr) {
  const [a, b] = arr[0].split(' ');

  console.log(Number(a) + Number(b));
  console.log(Number(a) - Number(b));
  console.log(Number(a) * Number(b));
  console.log(parseInt(Number(a) / Number(b)));
  console.log(Number(a) % Number(b));
}

func(input);
