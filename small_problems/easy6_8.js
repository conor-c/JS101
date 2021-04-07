// Problem
// => Given a count and a number, return an array of of count length where each
//    element is a multiple of the number
// Input
//  Two integers, first integer is 'count', which determines the length of the
//  array. Second integer is the starting number, which can be any integer
// Output
//  An array of count length, where each element is a multiple of the starting
//  integer
// Rules
//  If the count is 0, the output should be an empty array
// Questions
//
// Examples/ Test Cases
// //
sequence(5, 1);          // [1, 2, 3, 4, 5]
sequence(4, -7);         // [-7, -14, -21, -28]
sequence(3, 0);          // [0, 0, 0]
sequence(0, 1000000);    // []
// Data Structure
//
// Algorithm
//  1. Set resultArr = []
//  2. Set resultArr length to count argument
//  3. cycle through each item and set the element to the result of
//      the starting number times the index
// Code

function sequence(count, startingNum) {
  let resultArr = [];
  for (let idx = 1; idx <= count; idx++) {
    resultArr.push(startingNum * idx);
  }
  return resultArr;
}