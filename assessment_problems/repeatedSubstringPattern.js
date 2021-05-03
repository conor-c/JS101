// Given a non-empty string, check if it can be constructed by taking
// a substring of it and appending multiple copies of the substring together.
// You may assume the given string consists of lowercase English letters only.

const { setBufferSize } = require("readline-sync");

// Example 1:
// Input: "abab"
// Output: True
// Explanation: It's the substring "ab" twice.

// Input: "aba"
// Output: False

// Select the substring (of 1 character), see if the next substring is equal
// If equal, continue checking same length substrings, if always equal
// return true
// If not equal, start over with new substring grouping (first and second char)
console.log(repeatedSubstringPattern("aa") === true); // true;
console.log(repeatedSubstringPattern("aba") === false); // true;
console.log(repeatedSubstringPattern("aabaaba") === false); // true;
console.log(repeatedSubstringPattern("abaababaab") === true); // true;
console.log(repeatedSubstringPattern("abcabcabcabc") === true); // true;
// console.log(repeatedSubstringPattern("abaababaab"))

// function repeatedSubstringPattern(string) {
//   let substring = '';

//   for (let idx = 1; idx < string.length; idx += 1) {
//     substring = string.slice(0, idx);

//     while (substring.length < string.length) {
//       substring += string.slice(0, idx);
//       if (substring === string) return true;
//     }
//   }

//   return false;
// }

function repeatedSubstringPattern(string) {
  let substring = '';
  let maxLength = Math.ceil(string.length / 2);

  for (let length = 1; length <= maxLength; length += 1) {
    substring = string.slice(0, length);
    if (substring.repeat(string.length / length) === string) return true;
  }
  return false;
}