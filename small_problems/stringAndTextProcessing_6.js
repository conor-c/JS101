// PROBLEM
/*
Implement a feature that takes a string as an argument
and returns that same string but with a staggered capitalization scheme
*/

// Input
/*
A String
*/

// Output
/*
the same string but with staggered capitalization
*/

// Rules
/*
non-letters should not be changed
but they should be counted as characters for determining
when to switch between lower and upper case
*/

// Questions
/*

*/

// EXAMPLES/ TEST CASES

console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 4444 numbers'));   // "IgNoRe 77 ThE 4444 nUmBeRs"


// DATA STRUCTURE
/*
maybe a .map with an if conditional based on index
to determine when its even or odd
*/

// ALGORITHM
/*
1. set the first character in the string to uppercase
2. skip one character
3. set the character to uppercase
4. repeat until out of characters
*/

// CODE

function staggeredCase(string) {
  let stringArr = string.split('');

  for (let idx = 0; idx < stringArr.length; idx += 1) {
    (idx % 2 === 0) ? stringArr[idx] = stringArr[idx].toUpperCase()
                    : stringArr[idx] = stringArr[idx].toLowerCase();
  }

  return stringArr.join('');
}