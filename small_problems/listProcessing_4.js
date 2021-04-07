// Problem
// => Implement a feature that takes a string and returns a list of
//  comprehensive substrings from shortest to longest
// Input
// Output
// Rules
// Questions
//
// Examples/ Test Cases
// console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
// console.log(leadingSubstrings('a'));        // ["a"]
// console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]
// Data Structure
//
// Algorithm
//  1. starting at the first character
//  2. push each character + one more
// Code

// function leadingSubstrings(string) {
//   let subStringArr = [];

//   for (let idx = 0; idx < string.length; idx++) {
//     if (idx === 0) {
//       subStringArr.push(string[idx]);
//       continue;
//     }
//     subStringArr.push(subStringArr[idx - 1] + string[idx]);
//   }

//   return subStringArr;
// }

function leadingSubstrings(string) {
  return string.split('').map((_char, idx) => string.slice(0, idx + 1));
}

