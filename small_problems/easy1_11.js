// Problem
// - Write a function that determines and returns the ASCII value of a string
// Input:
// - A string passed as an argument
// Output:
// - the sum of the ASCII values of every character in the string
// Explicit Rules:
// - add each ASCII value of a character in a string, and return the sum
// Implicit Rules:
// - an empty string should return 0
// Questions:
// - Will numbers ever be included in the string?
// - Should the character values be saved and added as a key/value pair to
//   an object?

// Examples/ Test Cases
asciiValue('Four score');         // 984
asciiValue('Launch School');      // 1251
asciiValue('a');                  // 97
asciiValue('');                   // 0

// Data Structure
// - Likely just a for loop

// Algorithm
// 1. Set a sum to 0
// 2. For each index position that is less than string length:
//    sum += ASCII code of that character

// Code

function asciiValue(string) {
  let sum = 0;
  for (let index = 0; index < string.length; index += 1) {
    sum += string.charCodeAt(index);
  }
  return sum;
}