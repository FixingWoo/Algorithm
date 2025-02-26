const today = new Date();
const year = today.getFullYear();
const month = today.getMonth() + 1;
const day = today.getDate();

console.log(
  `${year}-${('00' + month.toString()).slice(-2)}-${(
    '00' + day.toString()
  ).slice(-2)}`
);
