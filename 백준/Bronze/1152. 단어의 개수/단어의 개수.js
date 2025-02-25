const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim();

const result = input ? input.split(' ').length : 0;
console.log(result);
