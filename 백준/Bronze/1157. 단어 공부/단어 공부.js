const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim();

const frequncy = {};

input
  .toUpperCase()
  .split('')
  .forEach((element) => {
    if (frequncy[element]) {
      frequncy[element] += 1;
    } else {
      frequncy[element] = 1;
    }
  });

const values = Object.values(frequncy);
const max = Math.max(...values);

let arr = [];

for (let key in frequncy) {
  if (frequncy[key] === max) {
    arr.push(key);
  }
}

console.log(arr.length > 1 ? '?' : arr[0]);
