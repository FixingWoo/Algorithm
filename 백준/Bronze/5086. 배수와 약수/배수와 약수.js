const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

input.map((item) => {
  const [A, B] = item.split(' ').map(Number);
  const isFactor = A % B === A;
  const isMultiple = A % B === 0;

  if (isMultiple) {
    console.log('multiple');
  }

  if (isFactor) {
    console.log('factor');
  }

  if (isNaN(A / B) || isNaN(A % B)) return;

  if (!(isMultiple || isFactor)) {
    console.log('neither');
  }
});
