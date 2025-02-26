const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const scores = {
  'A+': 4.5,
  A0: 4.0,
  'B+': 3.5,
  B0: 3.0,
  'C+': 2.5,
  C0: 2.0,
  'D+': 1.5,
  D0: 1.0,
  F: 0.0,
};

let sum = 0;
let gradeTotal = 0;

for (let i = 0; i < input.length; i++) {
  const [_, credit, grade] = input[i].split(' ');

  if (grade !== 'P') {
    gradeTotal += Number(credit);
    sum += scores[grade] * credit;
  }
}

console.log((sum / gradeTotal).toFixed(6));
