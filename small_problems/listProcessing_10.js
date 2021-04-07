// Problem
// => Implement a feature on our inventory management system, that
//    returns true or false based on available inventory of specified
//    inventory item.
// Input
// Output
// Rules
// Questions
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

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(103, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true
// Data Structure
//
// Algorithm
//  GET every transaction of specified inventoryItem using the
//  transactionsFor function
//  count the amount of inventory starting with first transaction
//  if 'in' + quantity
//  if 'out' - quantity
//  when out of transactions, return result of in/out
//  if positive, return true
// Code
function transactionsFor(inventoryItem, transactions) {
  return transactions.filter(entry => {
    return entry.id === inventoryItem;
  });
}

// function isItemAvailable(inventoryItem, transactions) {
//   let totalInventoryOfItem = 0;

//   transactionsFor(inventoryItem, transactions).forEach(transaction => {
//     if (transaction.movement === 'in') {
//       totalInventoryOfItem += transaction.quantity;
//     }
//     if (transaction.movement === 'out') {
//       totalInventoryOfItem -= transaction.quantity;
//     }
//   });

//   return totalInventoryOfItem > 0;
// }

function isItemAvailable(inventoryItem, transaction) {
  let quantity = transactionsFor(inventoryItem, transaction).reduce(
    (inventoryAmount, transaction) => {
      if (transaction.movement === 'in') {
        return inventoryAmount + transaction.quantity;
      } else if (transaction.movement === 'out') {
        return inventoryAmount - transaction.quantity;
      }
    },
    0
  );
  return quantity > 0;
}