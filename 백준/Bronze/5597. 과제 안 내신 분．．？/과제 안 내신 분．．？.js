const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const totalStudents = Array.from({ length: 30 }, (_, i) => `${i + 1}`);
const notSubmitted = totalStudents.filter((item) => !input.includes(item));

notSubmitted.forEach((element) => {
  console.log(element);
});

// filter + inclueds 활용하기
