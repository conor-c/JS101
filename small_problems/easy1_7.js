// Problem
// - Create a function that takes two strings as arguments
// returns a concatenating of the short string, the longer string,
// then the short string again.
// Input:
// - Two strings of different lengths
// Output:
// - short string + long string + short string
// Explicit Rules:
// - the strings are passed as arguements, are are of different values
// Questions:
// - Should edge cases be account for?
// - Should spaces be ignored?

// Example/ Test Cases
console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
console.log(shortLongShort('', 'xyz'));         // "xyz"

// Data Structure
// - Two parameters that will be compared against eachother

// Algorithm
// 1. Set first string to stringOne
// 2. Set second string to stringTwo
// 3. Check if stringOne.length is less than stringTwo
// 4. If 3 is true, return stringOne+stringTwo+stringOne
// 5. Else return stringTwo+stringOne+stringTwo

// Code

function shortLongShort(stringOne, stringTwo) {
  if (stringOne.length < stringTwo.length) {
    return stringOne + stringTwo + stringOne;
  }
  return stringTwo + stringOne + stringTwo;
}