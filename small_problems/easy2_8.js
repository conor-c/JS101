// Write a function that returns an array with every other element of an array
// that is passed into the function as an argument.
// Input: An Array
// Output: An Array with every other element, 1st, 3rd, 5th, etc.
// Questions:
// Test Cases:
console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []

function oddities(array) {
  let oddArray = array.filter((_element, index) => {
    if (index % 2 === 0) return true;
    return false;
  });
  return oddArray;
}

function evensOnly(array) {
  let evenArray = [];
  for (let idx = 1; idx < array.length; idx += 2) {
    evenArray.push(array[idx]);
  }
  return evenArray;
}

console.log(evensOnly([2, 3, 4, 5, 6])); // logs [3, 5]
console.log(evensOnly([1, 2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(evensOnly(["abc", "def"])); // logs ['def']
console.log(evensOnly([123])); // logs []
console.log(evensOnly([])); // logs []