// Problem
//  Take an array of integers as input, multiple them together
//  divide the result by the number of entries in the array
//  return as a string with the value rounded to the third decimal

// Reduce, .length property, .toFixed(3)
console.log(multiplicativeAverage([3, 5]));                   // "7.500"
console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"

function multiplicativeAverage(arrayOfIntegers) {
  return ((arrayOfIntegers.reduce((a, b) => a * b)) /
    arrayOfIntegers.length)
    .toFixed(3);
}