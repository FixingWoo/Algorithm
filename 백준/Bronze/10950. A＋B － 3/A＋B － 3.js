const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

input.forEach((item) => {
  const [a, b] = item.split(' ').map(Number);
  const sum = a + b;

  if (!Number.isNaN(sum)) {
    console.log(a + b);
  }
});

// Nan의 데이터 타입은 Number...
