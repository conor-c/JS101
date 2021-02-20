let arr = ['10', '11', '9', '7', '8'];
// order by largest value to smallest
let sortedArr = [...arr].sort((a, b) => Number(b) - Number(a));

console.log(sortedArr);