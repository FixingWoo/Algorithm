const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// const input = fs.readFileSync('test.txt').toString().trim().split('\n');

function func(arr) {
  const [a, b] = arr[0].split(' ').map(Number);

  if (a > b) {
    console.log('>');
  } else if (a < b) {
    console.log('<');
  } else if (a == b) {
    console.log('==');
  }
}

func(input);