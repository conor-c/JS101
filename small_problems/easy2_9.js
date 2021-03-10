// Problem
//  Create a function that takes a string of numbers, and coverts it to the
//  corresponding digits
// Input
//  A string of numbers '123'
// Output
//  The corresponding sequence of numbers 123
// Explicit Rules
//  Cannot use parseInt(), Number(), or String()
//  Don't have to worry about input validation, all strings will be numeric
//  Must calculate the result by analyzing the characters in the string
// Examples/ Test Cases
// console.log(stringToInteger("4321") === 4321); // logs true
// console.log(stringToInteger("570") === 570); // logs true
// Data Structure
//  a constant array of all numbers
// Algorithm
//  Split the string into an array, each element corresponding to a character
//  Check if an element matches any number (implicit type coercion? ==)
//  push that found number to a new array
// Code

// const NUMBERS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// function stringToInteger(string) {
//   let numArray = string.split('').map(stringNum => {
//     for (let num = 0; num <= 9; num++) {
//       if (stringNum == num) {
//         return num;
//       }
//     }
//     return undefined; // will never happen if given a single string of number
//   });
//   return numArray; //.join('');
// }


console.log(stringToInteger("4321"));
// This solution is imprecise because it relies on the loose equality operator.
// It's also not good for anything other than these numbers. A relational
// object {'0': 0} would of been much better to implement.
function stringToInteger(string) {
  let resultingNum = 0;
  for (let idx = 0; idx < string.length; idx++) { // iterates over each digit in string
    for (let num = 0; num <= 9; num++) {
      // eslint-disable-next-line eqeqeq
      if (string[idx] == num) {
        resultingNum = (resultingNum * 10) + num;
      }
    }
  }
  return resultingNum;
}


const HEX_TO_DECIMAL = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  a: 10,
  b: 11,
  c: 12,
  d: 13,
  e: 14,
  f: 15,
};

function hexadecimalToInteger(hexString) {

  let hexArray = hexString.split('').map(character => {
    if (['A', 'B', 'C', 'D', 'E', 'F'].includes(character)) {
      return HEX_TO_DECIMAL[character.toLowerCase()];
    }
    return HEX_TO_DECIMAL[character];
  });

  let sum = 0;
  hexArray.forEach(num => (sum = ((sum * 16) + num)));
  return sum;
}

console.log(hexadecimalToInteger('4D9f')); // === 19871;

