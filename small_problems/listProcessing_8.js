// Problem
// => Implement a feature that takes a grocery list (2 dimensional array)
//    and returns a one dimensional array of fruits where each fruit name is 
//    repeated the number of times found in the array
// Input
//  Two dimensional array, each array ele looks like ['fruit', 2]
// Output
//  return a one dimensional array where the fruit elements are repeated
//  according to the number element
// Rules
// Questions
//
// Examples/ Test Cases
//
 console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]
// Data Structure
//
// Algorithm
// for each array element, repeat the string type as many times as the number
//  type indicates
// Code

function buyFruit(groceryList) {
  let newList = [];

  for (let idx = 0; idx < groceryList.length; idx++) {
    let amountOfFruit = groceryList[idx][1];
    while (amountOfFruit > 0) {
      newList.push(groceryList[idx][0]);
      amountOfFruit--;
    }
  }

  return newList;
}