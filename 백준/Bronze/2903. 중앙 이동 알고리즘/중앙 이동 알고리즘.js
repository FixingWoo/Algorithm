const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const result = (2 ** input + 1) ** 2;
console.log(result);

// 한 변의 사각형 > 2의 제곱
// 한 변의 꼭짓점 > 한 변의 사각형 + 1
// 총 꼭짓점 > 한 변의 꼭짓점의 제곱
