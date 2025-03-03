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
