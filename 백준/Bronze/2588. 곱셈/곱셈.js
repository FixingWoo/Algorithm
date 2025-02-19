const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// const input = fs.readFileSync('test.txt').toString().trim().split('\n');

function func(arr) {
  // const [a, b, c] = arr[0].split(' ').map(Number);
  const number = arr[0];
  const number2 = arr[1];

  const [a, b, c] = number2.split('');

  const first = number * c;
  const second = number * b;
  const third = number * a;

  console.log(first);
  console.log(second);
  console.log(third);
  console.log(first + second * 10 + third * 100);
}

func(input);
