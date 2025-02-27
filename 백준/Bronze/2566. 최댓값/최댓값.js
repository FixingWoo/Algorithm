const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const max = Math.max(...input.map((el) => Math.max(...el.split(' '))));
const array = input.map((el) => el).map((item) => item.split(' '));

for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array[i].length; j++) {
    if (array[i][j] == max) {
      console.log(max);
      console.log(i + 1, j + 1);
    }
  }
}
