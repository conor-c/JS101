// Problem
// => Implement a feature that takes a string and capitalizes
//    each word, while lowercaseing subsequent letters
// Input
//  A string
// Output
//  A string with every word capitalized and the rest lowercase
// Rules
//  A string is any sequence of non-whitespace characters
// Questions
//
// Examples/ Test Cases
console.log(wordCap('four score and seven'));       // "Four Score And Seven"
console.log(wordCap('the javaScript language'));    // "The Javascript Language"
console.log(wordCap('this is a "quoted" word'));    // 'This Is A "quoted" Word'

// Data Structure
//
// Algorithm
//  1. Split the string into an array of words based on a space character
//     as the delimiter.
//  2. For the first character in the word, attempt to change it to uppercase.
//     Note: .toUpperCase on a non letter will not cause an error
//  3. For the remainder of the characters, change each to lowercase.
//  4. Once out of words, rejoin the string together and return

// Code

function wordCap(string) {
  return string.split(' ').map(word => {
    return word.split('').map((char, idx) => {
      if (idx === 0) return char.toUpperCase();
      return char.toLowerCase();
    }).join('');
  }).join(' ');
}