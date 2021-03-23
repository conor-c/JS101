// Problem
//  split an argument array into an array of two arrays
//  have the first half of the argument array in the first array
//  the second in the second
// if the arg array has odd number of elements
// put the middle on in the first array

// // Test Cases
halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
halvsies([5]);                // [[5], []]
halvsies([]);                 // [[], []]

// Algorithm
//  1. Create a resultArray = [[], []]
//  2. Find the length of the array argument
//  3. If the length is even, split the array in half
//  4. If the length is odd, find the middle element


function halvsies(array) {
  let resultArray = [[], []];

  if (array.length % 2 === 0) {
    resultArray[0] = array.slice(0, (array.length / 2));
    resultArray[1] = array.slice((array.length / 2));
  }

  if (array.length % 2 !== 0) {
    resultArray[0] = array.slice(0, (array.length / 2) + 1);
    resultArray[1] = array.slice((array.length / 2) + 1);
  }

  console.log(resultArray);
}