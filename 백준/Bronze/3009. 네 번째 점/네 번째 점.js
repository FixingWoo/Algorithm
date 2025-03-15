const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const xCoords = {};
const yCoords = {};

for (let i = 0; i < input.length; i++) {
  const [x, y] = input[i].split(' ').map(Number);

  xCoords[x] = (xCoords[x] || 0) + 1;
  yCoords[y] = (yCoords[y] || 0) + 1;
}

const x4 = Object.keys(xCoords).find((key) => xCoords[key] === 1);
const y4 = Object.keys(yCoords).find((key) => yCoords[key] === 1);

console.log(x4, y4);
