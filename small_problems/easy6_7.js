/*
Problem
  Switch order of first/last name
Input: String of "firstName, lastName"
Output: String of "lastName, firstName"
Rules: The input string will always be a first name and last name space
delimitated.
Questions:
  1. Will the names always be properly capitalized?
  2. Do we need to deal with edge cases or will we always be given
      a proper name.

Examples/ Test Cases
swapName('Joe Roberts');    // "Roberts, Joe"
Data Structure
  Arrays
Algorithm
  Split the string at the space
  Reverse the order of the names
  rejoin with comma space
Code
*/
function swapName(name) {
  let nameArr = name.split(' ');
  nameArr.unshift(nameArr.pop() + ',');
  return nameArr.join(' ');
}

console.log(swapName("Joe Roberts"));
console.log(swapName('Karl Oskar Henriksson Ragvals') ===  "Ragvals, Karl Oskar Henriksson");    // "Ragvals, Karl Oskar Henriksson"


