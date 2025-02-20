const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// const input = fs.readFileSync('test.txt').toString().trim().split('\n');

function func(arr) {
  const year = Number(arr[0]);
  const isLeap = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

  isLeap ? console.log(1) : console.log(0);
}

func(input);