const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const scores = input[1].split(' ').map(Number);
const M = Math.max(...scores);

const manipulatedScores = scores.map((score) => (score / M) * 100);

let sum = 0;

manipulatedScores.forEach((score) => {
  sum += score;
});

console.log(sum / input[0]);
