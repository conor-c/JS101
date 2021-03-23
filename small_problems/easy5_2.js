// Problem
//  Create a function called union, that takes two array arguments as inputs
//  Return an array with the culmination of both arrays elements into one array
//    With no duplication of element values

// Test Case
console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]
console.log(union(['a', 'b', 2], ['a', '2']));
console.log(union([],[]));
// Algorithm
//  1. Create resultArray with the values of the input arrays combined
//  2. For Each value in the array, check and see if the value is equal
//     To any other element in the array
//  3. If it is not equal, advance to the next element
//  4. If it is equal, remove the current element
//  5. Continue until all elements have been tested
//  6. Return resultingArray

function union(arrayOne, arrayTwo) {
  return arrayOne.concat(arrayTwo)
    .sort()
    .filter((val, idx, arr) => val !== arr[idx + 1]);
}