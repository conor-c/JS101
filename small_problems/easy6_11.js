// Problem
// => Write a function that takes an array and reverses its elements in place
// Input
//  An array
// Output
//  The SAME array, but with elements in reversed order
// Rules
//  Must MUTATE the array
// Questions
//
// Examples/ Test Cases
let list = [1, 2, 3, 4];
let result = reverse(list);
console.log(result); // logs [4,3,2,1]
console.log(list === result); // logs true

let list1 = ["a", "b", "c", "d", "e"];
let result1 = reverse(list1);
console.log(result1); // logs  ["e", "d", "c", "b", "a"]
console.log(list1 === result1); // logs true

let list2 = ["abc"];
let result2 = reverse(list2);
console.log(result2); // logs  ["abc"]
console.log(list2 === result2); // logs true

let list3 = [];
let result3 = reverse(list3);
console.log(result3); // logs []
console.log(list3 === result3); // logs true
// Data Structure
//
// Algorithm
//  Loop through the array, while counter is less than starting length of array,
//   shift and push
//
// Code

function reverse(array) {
  for (let leftIdx = 0, rightIdx = array.length - 1; leftIdx < array.length / 2; leftIdx++, rightIdx--) {
    [array[leftIdx], array[rightIdx]] = [array[rightIdx], array[leftIdx]];
  }

  return array;
}

// This problem is much better suited for a while loop due to clarity
//  As seen below

// function reverse(array) {
//   let leftIndex = 0;
//   let rightIndex = array.length - 1;

//   while (leftIndex < array.length / 2) {
//     [array[leftIndex], array[rightIndex]] =
//       [array[rightIndex], array[leftIndex]];
//     leftIndex += 1;
//     rightIndex -= 1;
//   }
//   return array;
// }