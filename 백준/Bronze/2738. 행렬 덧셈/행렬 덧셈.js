const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);

const A = input.slice(1, N + 1).map((row) => row.split(' ').map(Number));
const B = input.slice(-N).map((row) => row.split(' ').map(Number));

const result = A.map((row, i) => row.map((val, j) => val + B[i][j]));

console.log(result.map((row) => row.join(' ')).join('\n'));