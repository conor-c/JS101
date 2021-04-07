// Problem
// => Implement a feature that returns an array containing only the transactions
//  for the specified inventoryItem
// Input
//  inventory item, array of objects
// Output
//  array of only transactions with the appropriate ID
// Rules
// Questions
//  Will it always be an array of objects for the transactions?
//
// Examples/ Test Cases
//
let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 20 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];

console.log(transactionsFor(101, transactions));
// returns
// [ { id: 101, movement: "in",  quantity:  5 },
//   { id: 101, movement: "in",  quantity: 12 },
//   { id: 101, movement: "out", quantity: 18 }, ]
// Data Structure
//
// Algorithm
//  loop through each array element that is an object
//  find the id property, if the id properties value matches the inventoryItem
//  push the object entry to the results array
//  when out of object elements
//  return resulting array
// Code

function transactionsFor(inventoryItem, transactions) {
  return transactions.filter(entry => {
    return entry.id === inventoryItem;
  });
}