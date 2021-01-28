// PROBLEM:

// Given a string, write a function `palindromeSubstrings` which returns
// all the substrings from a given string which are palindromes. Consider
// palindrome words case sensitive.

// Test cases:

// console.log(palindromeSubstrings("supercalifragilisticexpialidocious"))
// should return: ["ili"]
//
// console.log(palindromeSubstrings("abcddcbA"))
// should return: ["bcddcb", "cddc", "dd"]
//
// console.log(palindromeSubstrings("palindrome"))
// should log: []
//
// console.log(palindromeSubstrings(""))
// should log: []


// Questions:
//  1. Can I expect only strings as inputs?
//  2. Should I account for the possibility of numbers being present?
//    2a. Should I also return Palindromic Numbers, or ignore them?
//  3. Should punctuation be removed, or included?
//    3a. Would ex: 'm.om' still be considered a palindrome?
//  4. How should I deal with spaces seperating letters?

// Input: String
// Output: Array of Substrings

// Explicit Rules:
//  1. Return all substrings from a given string that are palindromes.
//    1a. Palindromes are case sensitive.
// Implicit Rules:
//  1. A large palindrome can contain multiple smaller palindromes inside
//    1. of it, and those should be returned aswell.
//  2. If a string contains no palindromes, it should return an empty array.
//  3. If given an empty string, it should return an empty array.

function palindromeSubstrings(str) {
  let substringsArray = findSubstrings(str);
  let result = []; //array to be returned

  substringsArray.forEach(substring => {
    if (isPalindrome(substring)) {
      result.push(substring);
    }
  });

  return result;
}

function findSubstrings(str) {
  let result = [];
  let startIndex = 0;

  while (startIndex < str.length - 1) {
    let substringLength = 2;
    while (substringLength <= str.length - startIndex) {
      let substring = str.slice(startIndex, startIndex + substringLength);
      result.push(substring);
      substringLength += 1;
    }

    startIndex += 1;
  }
  // start with first letter of the string
  //  return a substring of 2 characters minimum
  //  return the next substring of 1 more character if still possible
  //  until final substring = str.length (account for the starting index)

  //  start with second letter of the string
  //  return a substring of 2 min characters
  //  return the next substring of1 more character if still possible
  //  continue until final substring = str.length

  // no need to search for substrings when on last character (str.length - 1)
  return result;
}

function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}


console.log(palindromeSubstrings("supercalifragilisticexpialidocious")); // ["ili"]
console.log(palindromeSubstrings("abcddcbA"));   // ["bcddcb", "cddc", "dd"]
console.log(palindromeSubstrings("palindrome")); // []
console.log(palindromeSubstrings(""));