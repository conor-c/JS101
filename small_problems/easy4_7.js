// Problem
//  Given an array of integers
//  return a new array with the same number of elements
//  where each element is the new running total of adding the previous elements

// .map .reduce
// Algorithm
// for each element in the starting array, push an element to the new array

// function runningTotal(arrayOfIntegers) {
//   let totalArray = [];
//   let currentSum = 0;

//   for (let idx = 0; idx < arrayOfIntegers.length; idx++) {
//     currentSum += arrayOfIntegers[idx];
//     totalArray.push(currentSum);
//   }

//   console.log(totalArray);
// }


function runningTotal(arrayOfIntegers) {
  let currentSum = 0;
  let totalArray = arrayOfIntegers.map(int => {
    currentSum += int;
    return currentSum;
  });

  console.log(totalArray);
}


runningTotal([2, 5, 13]);             // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
runningTotal([3]);                    // [3]
runningTotal([]);                     // []