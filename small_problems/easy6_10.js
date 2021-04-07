// Problem
// => Write a function that takes a string, and returns a string with reversed
//    letters on words with five or more letters
// Input
//  A string consisting of only letters and spaces, words separated by single 
//  space
// Output
//  A string where any word with 5 or more letters is reversed
// Rules
//  Ignore capital letters
// Questions
//
// Examples/ Test Cases
console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"
// Data Structure
//
// Algorithm
//  1. Split the string into its containing words based on spaces
//  2. Check if the words length is 5 or more
//  3. If 2, reverse the word in place
//  4. when all words have been evaluated, join words together with a space
//  5. return string
// Code

function reverseWords(string) {
  return string.split(' ').map(word => (word.length >= 5 ? word.split('').reverse().join('') : word)).join(' ');
}