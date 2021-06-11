/*  PROBLEM
Write a function that rotates an array by moving the first element to the end of the array. Do not modify the original array.

    If the input is not an array, return undefined.
    If the input is an empty array, return an empty array.

Review the test cases below, then implement the solution accordingly.
*/

/* INPUT
An array, but handle edge cases of non arrays or empty arrays
*/

/* Output
an array with the first element at the end of the array
*/

/*  Rules
dont modify the original array
*/

/* Questions

*/

// EXAMPLES/ TEST CASES
// console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
// console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
// console.log(rotateArray(['a']));                    // ["a"]
// console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
// console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
// console.log(rotateArray([]));                       // []

// // // return `undefined` if the argument is not an array
// console.log(rotateArray());                         // undefined
// console.log(rotateArray(1));                        // undefined


// // the input array is not mutated
let array = [1, 2, 3, 4];
console.log(rotateArray(array));                    // [2, 3, 4, 1]
console.log(array);                                 // [1, 2, 3, 4]

/* DATA STRUCTURE

*/

/* ALGORITHM
1. check if the argument passed is an array, perhaps Array.isArray(array)
2. Check if the array is empty, if so, return empty array
3. Check if the array length is 1, if so, simply return that array
4. Create a rotatedArray as an empty array
5. copy the argument array data into the rotated array
6. splice the first element, and push it to the end
7. return the array
*/

// CODE

function rotateArray(array) {
  if (!Array.isArray(array)) return undefined;
  if (array.length === 1 || array.length === 0) return array;

  let rotatedArray = JSON.parse(JSON.stringify(array));
  let firstElement = rotatedArray.shift();
  rotatedArray.push(firstElement);
  return rotatedArray;
}