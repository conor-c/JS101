// Problem
//  - Write a function 'penultimate('string')' that logs the second to last word
//    in the given string.
// Input: a string with at least two words
// Output: the second to last word in a given string.
// Explicit Rules:
//  - Words are any sequence of non-blank characters
//  - the Input string will always contain at least two words
// Implicit Rules:
//  - The words may be directly provided as a string argument in the program
// Questions:
//  - What is the definition of a character in this context, is it letters?
//    Do numbers count? Symbols?

// // Examples/ Test Cases
// console.log(penultimate("last word") === "last"); // logs true
// console.log(penultimate("Launch School is great!") === "is"); // logs true
// console.log(penultimate('super frozen blue'));

// Data Structure
// Algorithm
// Split the given string into an array substrings that denote each word
// return the element of array.length - 2
// Code

// function penultimate(string) {
//   let arrOfWords = string.split(' ');
//   return arrOfWords[arrOfWords.length - 2];
// }
const NUMBERS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
function findMiddleWord(string) {
  let wordsArray = string.split(' ');
  let wordsFiltered = wordsArray.filter(word => {
    let anyNum = NUMBERS.filter(num => word.includes(num));
    if (anyNum.length !== 0) return false;
    return true;
  });

  if (wordsFiltered.length < 3) {
    return 'Sorry, you need at least 3 words to have a "middle" word.';
  } else if (wordsFiltered.length % 2 === 0) {
    return 'Sorry, you need an odd number of words to have a "middle" word.';
  } else {
    return wordsFiltered[Math.floor(wordsFiltered.length / 2)];
  }
}

console.log(findMiddleWord('1 2 3 blue two three'));
