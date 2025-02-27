const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const max = Math.max(...input.map((el) => Math.max(...el.split(' '))));
const array = input.map((el) => el).map((item) => item.split(' '));

for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array[i].length; j++) {
    if (array[i][j] == max) {
      console.log(max);
      console.log(i + 1, j + 1);
    }
  }
}


/🔹 개선된 점
Math.max 대신 단순 비교 (if(value > max))

기존 코드에서 Math.max(...arr)를 사용하면 배열을 한 번 더 펼쳐야 함 → 비효율적
단순 비교로 if (value > max)를 사용하여 최대값을 즉시 갱신.
입력 값을 파싱하면서 동시에 최대값 찾기 (map() 내부에서 비교)

기존: map() → split() → 이중 for문
개선: map() 안에서 동시에 최대값 비교
즉, 별도의 이중 루프 없이, 한 번의 map()으로 처리 → 속도 향상.
불필요한 배열 변환 제거

기존 코드에서 array = input.map((el) => el).map(...) → 불필요한 map()
개선 코드에서는 한 번의 map() 안에서 처리./

let max = -Infinity;
let row = 0,
  col = 0;

const array = input.map((line, i) =>
  line.split(' ').map((num, j) => {
    const value = Number(num);

    if (value > max) {
      max = value;
      row = i + 1;
      col = j + 1;
    }

    return value;
  })
);

console.log(max);
console.log(row, col);
