const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const points = input.slice(1).map((line) => line.split(' ').map(Number));

let minX = Infinity;
let maxX = -Infinity;
let minY = Infinity;
let maxY = -Infinity;

for (const [x, y] of points) {
  if (x < minX) minX = x;
  if (x > maxX) maxX = x;
  if (y < minY) minY = y;
  if (y > maxY) maxY = y;
}

console.log((maxX - minX) * (maxY - minY));
