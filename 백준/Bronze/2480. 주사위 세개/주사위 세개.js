const fs = require('fs');

const [a, b, c] = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

let price = 0;

if (a == b && b == c) {
  price = 10000 + a * 1000;
} else if (a == b || b == c || a == c) {
  if (a == b) {
    price = 1000 + a * 100;
  } else if (b == c) {
    price = 1000 + b * 100;
  } else {
    price = 1000 + c * 100;
  }
} else if (a != b && b != c && a != c) {
  if (a > b && a > c) {
    price = a * 100;
  } else if (b > a && b > c) {
    price = b * 100;
  } else {
    price = c * 100;
  }
}

console.log(price);
