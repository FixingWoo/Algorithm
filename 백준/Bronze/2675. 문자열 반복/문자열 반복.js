const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

for (let i = 1; i < input.length; i++) {
  const [N, S] = input[i].split(' ');
  const str = S.split('');

  let count = N;
  let result = '';

  for (let j = 0; j < str.length; j++) {
    while (count) {
      result += str[j];
      count--;
    }

    count = N;
  }

  console.log(result);
}
