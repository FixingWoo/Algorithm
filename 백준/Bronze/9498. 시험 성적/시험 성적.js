const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// const input = fs.readFileSync('test.txt').toString().trim().split('\n');

function func(arr) {
  const score = Number(arr[0]);

  switch (true) {
    case score >= 90 && score <= 100:
      console.log('A');
      break;

    case score >= 80 && score <= 89:
      console.log('B');
      break;

    case score >= 70 && score <= 79:
      console.log('C');
      break;

    case score >= 60 && score <= 69:
      console.log('D');
      break;

    default:
      console.log('F');
      break;
  }
}

func(input);