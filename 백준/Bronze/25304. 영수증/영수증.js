const fs = require('fs');

const [total, , ...items] = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

let sum = 0;

items.forEach((item) => {
  const [price, amount] = item.split(' ');
  sum += price * amount;
});

total == sum ? console.log('Yes') : console.log('No');
