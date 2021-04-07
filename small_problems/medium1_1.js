// PROBLEM
/*
Write a function that rotates an array by moving the first element
to the end of the array, do not mutate original array
*/

// Input
/*
An array
*/

// Output
/*
an array with the first element in the last spot
*/

// Rules
/*
do not modify original array
if the input isn't an array, return undefined
if the input is an empty array, return an empty array
*/

// Questions
/*
Will the elements always be primitive values, or will there also be
functions/other arrays/ objects as elements
*/

// EXAMPLES/ TEST CASES
console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
console.log(rotateArray(['a']));                    // ["a"]
console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
console.log(rotateArray([]));                       // []

// return `undefined` if the argument is not an array
console.log(rotateArray());                         // undefined
console.log(rotateArray(1));                        // undefined


// // the input array is not mutated
let array = [1, 2, 3, 4];
console.log(rotateArray(array));                    // [2, 3, 4, 1]
console.log(array);                                 // [1, 2, 3, 4]

// DATA STRUCTURE
/*
arrays
*/

// ALGORITHM
/*
1. if the argument is not an array, return undefined
2. if the argument is an empty array, return an empty array
3. initialize an empty rotatedArray
4. starting from end of the given array, copy the last element
5. unshift (place at beginning) element from 4 to the rotatedArray.
6. when at first element of given array, push instead of unshift
*/

// CODE

function rotateArray(array) {
  if (!Array.isArray(array)) return undefined;
  if (array.length === 0) return [];

  let rotatedArray = [];

  for (let idx = array.length - 1; idx > 0; idx--) {
    rotatedArray.unshift(array[idx]);
  }
  rotatedArray.push(array[0]);

  return rotatedArray;
}

// function rotateArray(array) {
//   if (!Array.isArray(array)) return undefined;
//   if (array.length === 0) return [];

//   return array.slice(1).concat(array[0]);
// }

// function rotateArray(arr) {
//   if (!Array.isArray(arr)) return undefined;
//   const newArr = [...arr];
//   if (newArr.length > 0) newArr.push(newArr.shift());
//   return newArr;
// }

// the reason we don't use a .push instead of .concat is because .push would
// result in returning the length of the new array instead of the array
