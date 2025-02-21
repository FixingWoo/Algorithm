const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [a, b] = input;
const [_, value] = a.split(' ');
const numbers = b.split(' ').map(Number);

const result = numbers.filter((number) => number < value).join(' ');

console.log(result);
