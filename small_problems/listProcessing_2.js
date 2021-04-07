// Problem
// => Take an array of integers between 0-19
//    return an array of those integers sorted based on english word
// Input
// Output
// Rules
// zero, one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen
// Questions
//
// Examples/ Test Cases
// alphabeticNumberSort(
//   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);
//   [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]
// Data Structure
//
// Algorithm
//  associate the number values with their word counterparts
//  sort alphabetically
//  replace words back with numbers
// Code
const WORD_EQUIVALENT = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  ten: 10,
  eleven: 11,
  twelve: 12,
  thirteen: 13,
  fourteen: 14,
  fifteen: 15,
  sixteen: 16,
  seventeen: 17,
  eighteen: 18,
  nineteen: 19,
};

function alphabeticNumberSort(intArr) {
  return intArr.map(int => flipNameAndNum(int))
    .sort((a, b) => a.localeCompare(b))
    .map(word => flipNameAndNum(word));
}

function flipNameAndNum(nameOrNum) {
  if (Number.isInteger(nameOrNum)) {
    return Object.keys(WORD_EQUIVALENT)
      .find(wordKey => WORD_EQUIVALENT[wordKey] === nameOrNum);
  }
  return WORD_EQUIVALENT[nameOrNum];
}

console.log(alphabeticNumberSort(
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
));
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]