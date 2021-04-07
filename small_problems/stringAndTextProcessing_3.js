// Problem
// => implement a feature that returns an object from a string

// Input
//  string
// Output
//  object with lowercase, uppercase, and none letters count
// Rules
//  space counts as a character, empty string should return an object
//  with all 3 at count zero
// Questions
//
// Examples/ Test Cases
console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }

// Data Structure
//
// Algorithm
//  Initialize an empty object with 'lowercase' 'uppercase' & 'neither'
//  properties all set to the value of 0.
//  Split the string into an array of characters
//  check if the character is a lowercase, uppercase or neither
//  when above is determined, push += 1 into the value of the property
//  on the object
//  when out of characters, return the object.

// Code
function letterCaseCount(string) {
  let charObject = {lowercase: 0, uppercase: 0, neither: 0};

  string.split('').forEach(char => {
    if ('a' <= char && char <= 'z') {
      charObject.lowercase += 1;
    } else if ('A' <= char && char <= 'Z') {
      charObject.uppercase += 1;
    } else {
      charObject.neither += 1;
    }
  });
  return charObject;
}