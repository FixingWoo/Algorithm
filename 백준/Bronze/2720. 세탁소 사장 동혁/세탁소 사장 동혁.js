const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = input[0];

for (let i = 1; i <= N; i++) {
  const quarter = Math.floor(input[i] / 25);
  const dime = Math.floor((input[i] % 25) / 10);
  const nickel = Math.floor(((input[i] % 25) % 10) / 5);
  const penny = Math.floor((((input[i] % 25) % 10) % 5) / 1);

  console.log(quarter, dime, nickel, penny);
}


1. 배열(coins)을 활용하여 중복 코드 제거
2. map()을 사용하여 동전 개수를 계산.
  Math.floor(change / coin) 후 change %= coin으로 남은 거스름돈 업데이트.
  result 문자열을 사용하여 출력 최적화
3. console.log()를 루프마다 실행하면 느리므로 한 번에 출력.

  
const T = parseInt(input[0]);
const coins = [25, 10, 5, 1];

let result = '';

for (let i = 1; i <= T; i++) {
  let change = parseInt(input[i]);

  let counts = coins.map((coin) => {
    let count = Math.floor(change / coin);
    change %= coin;
    return count;
  });

  result += counts.join(' ') + '\n';
}

console.log(result.trim());
