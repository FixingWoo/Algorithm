const fs = require('fs');
const input = fs.readFileSync('test.txt').toString().trim().split('\n');

console.log(input);

input.map((item) => {
  const [A, B] = item.split(' ').map(Number);

  if (A === 0 && B === 0) return;

  const isFactor = B % A === 0;
  const isMultiple = A % B === 0;

  if (isMultiple) {
    console.log('multiple');
  } else if (isFactor) {
    console.log('factor');
  } else {
    console.log('neither');
  }
});
