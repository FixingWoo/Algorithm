const fs = require('fs');
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
// const input = fs.readFileSync('test.txt').toString().trim().split('\n');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function add(arr) {
  const [a, b] = arr[0].split(' ');

  console.log(Number(a) + Number(b));
}

add(input);
