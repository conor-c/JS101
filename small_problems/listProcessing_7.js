// Problem
// => Implement a feature that takes an array of numbers and returns the sum
//    of each leading subsequence for the array
// Input
//  An array of numbers: [1, 2, 3]
// Output
//  the sum of each leading subsequence 1 + (1+2) + (1+2+3) // 10
// Rules
//  the input will always contain at least one number
// Questions
//
// Examples/ Test Cases
console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35

// Data Structure
//
// Algorithm
// Filter
// prev = prev + next
// Code

function sumOfSums(intArr) {
  let sumArr = [intArr[0]];
  for (let idx = 1; idx < intArr.length; idx++) {
    sumArr.push(intArr[idx] + sumArr[idx - 1]);
  }
  return sumArr.reduce((prev, next) => prev + next);
}
