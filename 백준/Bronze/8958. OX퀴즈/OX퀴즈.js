const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const strs = input.slice(1);

strs.forEach((str) => {
  let count = 0;
  let total = 0;

  for (let char of str) {
    if (char === 'O') {
      count++;
      total += count;
    } else {
      count = 0;
    }
  }

  console.log(total);
});

포인트

1. forEach => map

✔ forEach는 값을 반환하지 않고 단순히 반복 수행
✔ 점수를 배열로 한 번에 계산하여 최적화된 출력 가능

2. for of > for

✔ for...of는 이터레이터 객체를 생성하고 .next() 호출 → 성능 저하 가능
✔ for 루프는 인덱스 접근으로 O(1) 속도 → 더 빠르게 최적화됨
✔ V8 엔진에서도 for 루프 최적화가 더 잘 이루어짐

💡 따라서, 문자열을 반복할 때는 for 루프가 for...of보다 성능이 더 좋다! 🚀

const result = input.slice(1).map((str) => {
  let count = 0;
  let sum = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'O') {
      count++;
      sum += count;
    } else {
      count = 0;
    }
  }

  return sum;
});

console.log(result.join('\n'));
