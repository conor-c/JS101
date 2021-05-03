/*
find the last digit and compare it to the second last digit, if the last is
bigger than the one to the left, swap numbers and return that number, otherwise
second last is new last, and find hte one to the left, if the last is bigger..
*/
function nextBiggerNum(num) {
  let nextBigNum = String(num).split('').map(num => Number(num));

  for (let idx = nextBigNum.length - 1; idx > 0; idx -= 1) {
    let lastNum = nextBigNum[idx];
    let secondLastNum = nextBigNum[idx - 1];

    if (lastNum > secondLastNum) {
      [nextBigNum[idx], nextBigNum[idx - 1]] = [secondLastNum, lastNum];
      return Number(nextBigNum.join(''));
    }
  }

  return -1;
}

console.log(nextBiggerNum(123456789));
console.log(nextBiggerNum(12));
console.log(nextBiggerNum(513));
console.log(nextBiggerNum(2122));