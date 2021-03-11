/*
You're given an array of integers.  You must return the number of 'arithmetic 
progressions' of size 3 that are possible from that list.

In each progression, the differences between the elements must be the same.
find the smallest integer

Example:
[1, 2, 3, 5, 7, 9] ==> 5
The above has 5 progressions, seen below:
// [1, 2, 3], [1, 3, 5], [1, 5, 9], [3, 5, 7], and [5, 7, 9]

All array elements will be unique and the array will be sorted.
*/

// Test Cases
console.log(progressions([1, 2, 3, 5, 7, 9])); // 5
// console.log(progressions([1, 2, 3, 4, 5]));    // 4
// console.log(progressions([0, 5, 8, 9, 11, 13, 14, 16, 17, 19])); // 10


