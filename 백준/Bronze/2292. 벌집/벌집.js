const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

let layer = 1;
let maxNumber = 1;

while (input > maxNumber) {
  maxNumber += 6 * layer;
  layer++;
}

console.log(layer);
