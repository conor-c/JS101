// Problem: Create a function that takes one integer argument, which can
// positive, negative, or zero. Return true if the number's absolute value is
// odd.
//
// Input:
// - A valid integer value.
// Output:
// - A boolean, true or false.
//
// Explicit Rules:
// - It can be assumed that the argument is a valid integer value.
// Implicit Rules:
// - If the input is 0, return false.
//
// Questions:
// - What is an absolute value? A: The distance in integers from 0.
// -- How do we find a numbers absolute value?
// --- Absolute values are always positive, if given only valid integer values
// --- Any positive input would be the absolute value.


// Examples / Test Cases
console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true

// Data Structure
// Likely just a conditional with a return.

// Algorithm
// 1. Get integer
// 2. If integer is 0, return false (also get from 0 % 2)
// 3. Divide the integer by 2.
// 4. Return true if the integer is anything other than 0 or -0
// 5. Return False otherwise
// Code

function isOdd(integer) {
  if (integer % 2 === 0) {
    return false;
  }
  return true;
}