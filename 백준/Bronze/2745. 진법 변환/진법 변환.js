const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

const B = parseInt(input[1]);
const S = input[0].split('').reverse();
let result = 0;

S.forEach((char, index) => {
  const digit = char >= 'A' ? char.charCodeAt(0) - 55 : parseInt(char);
  result += digit * Math.pow(B, index);
});

console.log(result);
