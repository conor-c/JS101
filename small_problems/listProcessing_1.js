// Problem
// => Write a function that takes a positive integer and returns the sum of
//    its digits
// Input
//  Positive integer
// Output
//  Sum of the inputs digits
// Rules
//  Do not use for, while, or do...while loops, use a combo of method calls
// Questions
//
// Examples/ Test Cases
console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45
//
// Data Structure
//
// Algorithm
//
// Code

function sum(int) {
  return int.toString().split('').map(digit => Number(digit)).reduce((acc, num) => acc + num);
}