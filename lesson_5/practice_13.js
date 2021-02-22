let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];
arr.sort((subArrA, subArrB) => {
  let oddSumsA = subArrA.reduce((total, currentNum) => {
    if (currentNum % 2 !== 0) {
      return total + currentNum;
    } else {
      return total + 0;
    }
  });
  let oddSumsB = subArrB.reduce((total, currentNum) => {
    if (currentNum % 2 !== 0) {
      return total + currentNum;
    } else {
      return total + 0;
    }
  });

  return oddSumsA - oddSumsB;
});

console.log(arr);

// The provided solution is much cleaner.
// It utilizes .filter to create an array of only odd numbers
// then calls reduce on that without needed if/else statements
// Shown below:

// arr.sort((a, b) => {
//   let oddSumA = a.filter(num => num % 2 === 1)
//                  .reduce((sum, next) => sum + next);
//   let oddSumB = b.filter(num => num % 2 === 1)
//                  .reduce((sum, next) => sum + next);

//   return oddSumA - oddSumB;
// });