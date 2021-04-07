// PROBLEM
//  => Implement a feature that swaps upper and lowercase letters
// Input
//  => A string
// Output
//  => A string with letter casing swapped
// Rules
//  => Leave all non letter characters unchanged
// Questions
//  => None

// EXAMPLES/ TEST CASES

console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"


// DATA STRUCTURE
//  => Transformation methods

// ALGORITHM
//  1. Split the string up into an array of characters
//  2. If the character is a letter, swap the casing
//  3. If the character is not a letter, advance to next char
//  4. Once all characters have been evaluated, rejoin
//  5. Return string

// CODE

function swapCase(string) {
  return string
    .split('')
    .map(char => {
      if (char.toUpperCase() !== char.toLowerCase()) {
        if ('a' <= char && char <= 'z') {
          return char.toUpperCase();
        } else if ('A' <= char && char <= 'Z') {
          return char.toLowerCase();
        }
      }
      return char;
    }).join('');
}