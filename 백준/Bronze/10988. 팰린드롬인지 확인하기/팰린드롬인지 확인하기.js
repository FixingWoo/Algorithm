const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim();

const reverseInput = input.split('').reverse().join('');
input === reverseInput ? console.log(1) : console.log(0);
