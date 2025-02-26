const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim();

let alphabets = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];
let str = input;

for (let alphabet of alphabets) {
  str = str.split(alphabet).join('C');
}

console.log(str.length);