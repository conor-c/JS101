let numbers = [1, 2, 3, 4, 5];

function reverse(array) {
  let reversedArray = array.slice().reverse();
  return reversedArray;
}

function sort(array) {
  let sortedArray = [...array].sort((num1, num2) => num2 - num1);
  return sortedArray;
}

function forEachReverse(array) {
  let reversedArray = [];

  array.forEach(num => {
    reversedArray.unshift(num); // adds 1 to the start, then 2 goes to the start, etc.
  });
  return reversedArray;
}

console.log(forEachReverse(numbers));
console.log(sort(numbers));
console.log(reverse(numbers));
console.log(numbers);
console.log(...numbers);