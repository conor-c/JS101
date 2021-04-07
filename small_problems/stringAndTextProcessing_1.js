// Problem
// => Implement a feature that returns true when given a string when
//    all alphabetic characters are uppercase
// Input
// Output
// Rules
//  ignore characters that are not alphabetic
//  if string is empty, return true
// Questions
//
// Examples/ Test Cases
//
console.log(isUppercase('t'));               // false
console.log(isUppercase('T'));               // true
console.log(isUppercase('Four Score'));      // false
console.log(isUppercase('FOUR SCORE'));      // true
console.log(isUppercase('4SCORE!'));         // true
console.log(isUppercase(''));                // true
// Data Structure
//
// Algorithm
//  covert the string to an array of characters
//  check if each character is equal to the uppercase equiv
//
// Code

function isUppercase(string) {
  return string.split('').filter(char => (char.toUpperCase() !== char.toLowerCase())).every(char => {
    return char === char.toUpperCase();
  });
}

// First we split our string argument into an array of characters

// Then we make sure that every character is a letter with:
//  (char.toUpperCase() !== char.toLowerCase()), this works because only letters
//  have upper case and lowercase, and would be DIFFERENT given this expression.
//  For example, '1'.toUpperCase() === '1'
//               '1'.toLowerCase() === '1'

// Finally we check that every letter is equal to its upper case version of
// itself with the .every method.
// NOTE: Using the .every method ultimately works for our problem because when
//       called on an empty array, it will return true for any condition.