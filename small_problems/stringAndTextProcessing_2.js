// Problem
// => Implement a feature that returns an array of strings with its vowels
//    removed
// Input
// Output
// Rules
// Questions
//
// // Examples/ Test Cases
console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]
//
// Data Structure
//
// Algorithm
//  1. For every element in the array, create a new array that contains each
//     an array of all the characters in that element.
//  2. From that array, return a new array that filters out all vowels,
//     join that array back together, and return it to the overall array
//
// Code

function removeVowels(stringArr) {
  return stringArr.map(string => string.split('').filter(
    char => !('aeiou'.includes(
      char.toLowerCase()))
  ).join(''));
}