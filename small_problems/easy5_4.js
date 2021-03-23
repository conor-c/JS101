// Problem
//  Input an array
//  Output the element that occurs twice
// Explicit Rules
//  exactly one value will occur twice, every other value
//  will occur once

// // Test Cases
console.log(findDup([1, 5, 3, 1]));                                // 1
console.log(findDup([18,  9, 36, 96, 31, 19, 54, 75, 42, 15,
  38, 25, 97, 92, 46, 69, 91, 59, 53, 27,
  14, 61, 90, 81,  8, 63, 95, 99, 30, 65,
  78, 76, 48, 16, 93, 77, 52, 49, 37, 29,
  89, 10, 84,  1, 47, 68, 12, 33, 86, 60,
  41, 44, 83, 35, 94, 73, 98,  3, 64, 82,
  55, 79, 80, 21, 39, 72, 13, 50,  6, 70,
  85, 87, 51, 17, 66, 20, 28, 26,  2, 22,
  40, 23, 71, 62, 73, 32, 43, 24,  4, 56,
  7, 34, 57, 74, 45, 11, 88, 67,  5, 58]));    // 73

// Algorithm
//  For each value, check and see if the value occurs
//  If we remove the value, we can then see if the value occurs still

function findDup(array) {
  for (let idx = 0; idx <= array.length; idx++) {
    let val = array[idx];
    if (array.indexOf(val) !== array.lastIndexOf(val)) {
      return val;
    }
  }
  return undefined;
}
