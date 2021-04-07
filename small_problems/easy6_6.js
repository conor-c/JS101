// Problem
//  Given a positive integer, return an array of all integers between
//  1 and the input integer, inclusive

// Algorithm
//  1. SET resultArr to []
//  2. WHILE resultArr.length <= input Integer
//  3. Push integers starting from 1

function sequence(int) {
  let resultArr = [];
  while (resultArr.length < int) {
    resultArr.push(resultArr.length + 1);
  }
  return resultArr;
}
sequence(5);    // [1, 2, 3, 4, 5]
sequence(3);    // [1, 2, 3]
sequence(1);    // [1]