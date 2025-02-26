const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim();

const result = input.split('').reduce((acc, char) => {
  if (char.charCodeAt() <= 90) {
    acc += char.toLowerCase();
  } else {
    acc += char.toUpperCase();
  }

  return acc;
}, '');

console.log(result);