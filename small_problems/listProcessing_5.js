// Problem
// => Implement a feature that returns a list of all substrings of a string
//    ordered by where in the string the substring begins, followed by the
//    the length of the substring
// Input
// Output
// Rules
// Questions
//
// Examples/ Test Cases
console.log(substrings('abcde'));
// Data Structure
//
// Algorithm
//  1. Run through leadingSubstrings full length
//  2. remove the first character and re run
//  3. Each time push to new array
//
// Code

function leadingSubstrings(string) {
  return string.split('').map((_char, idx) => string.slice(0, idx + 1));
}

// function substrings(string) {
//   return string.split('').map((_char, idx) => leadingSubstrings(string.slice(idx))).flat();

//   // for (let idx = 0; idx < string.length; idx++) {
//   //   substringsArr.push(...leadingSubstrings(string.slice(idx)));
//   // }
// }

function substrings(string) {
  return string.split('').reduce((prev, _next, idx) => {
    return prev.concat(leadingSubstrings(string.slice(idx)));
  }, []);
}
