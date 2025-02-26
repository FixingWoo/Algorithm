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


/**
* 1. Number > parseFloat
* - 소수점도 포함하여 안전하게 변환
*
* 2. reduce
* - 가독성 향상, 코드 길이 감소
*/
const { sum, gradeTotal } = input.reduce(
  (acc, row) => {
    const [_, credit, grage] = row.split(' ');

    console.log(credit, grage);

    if (grage !== 'P') {
      const parsedCredit = parseFloat(credit);
      acc.gradeTotal += parsedCredit;
      acc.sum += scores[grage] * parsedCredit;
    }

    return acc;
  },
  { sum: 0, gradeTotal: 0 }
);

console.log((sum / gradeTotal).toFixed(6));
