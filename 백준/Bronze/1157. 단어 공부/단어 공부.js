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


// 개선한 코드, reduce 활용하자...
const frequncy = input
  .toUpperCase()
  .split('')
  .reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
  }, {});

const max = Math.max(...Object.values(frequncy));
const arr = Object.keys(frequncy).filter((key) => frequncy[key] === max);

console.log(arr.length > 1 ? '?' : arr[0]);
