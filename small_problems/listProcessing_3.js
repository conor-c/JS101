// Problem
// => Create a function that takes two arrays as arguments
//    each array contains a list of numbers
//    return the result of all the product of all the number pairs that exist
//    between the two arrays
// Input
//  Two arrays of numbers
// Output
//  The sum of every product between the pairs of numbers from each
//  array
// Rules
//  Neither argument will be an empty array
// Questions
//  Will the elements always been numbers?
// Examples/ Test Cases
console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]

// Data Structure
//
// Algorithm
//  1. Take the first element of the first argument
//  2. Create an array with the result of 1. multiplied by
//      every element in argument 2
//  3. Do 1 / 2 until there is nothing left
// Code

function multiplyAllPairs(arrayOne, arrayTwo) {
  let productArr = [];
  for (let idx = 0; idx < arrayOne.length; idx++) {
    let currentNum = arrayOne[idx];
    productArr.push(...arrayTwo.map(num => num * currentNum));
  }
  return productArr.sort((a, b) => a - b);
}