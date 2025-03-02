const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

let N = parseInt(input[0]);
const B = parseInt(input[1]);

if (!N) return;

let result = '';
const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';

while (N > 0) {
  result = digits[N % B] + result;
  N = Math.floor(N / B);
}

console.log(result);
