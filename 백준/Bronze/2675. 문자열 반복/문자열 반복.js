const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

for (let i = 1; i < input.length; i++) {
  const [N, S] = input[i].split(' ');
  const result = [...S].map((char) => char.repeat(Number(N))).join('');

  console.log(result);
}

// repeat() 메서드는 문자열을 주어진 횟수만큼 반복해 붙인 새로운 문자열을 반환합니다.
