// Problem
//  Write a function that returns the inputArg num multiplied by 2
//  If the number is a double number, return it

// Points
//  A 'double number' is a number that is repeated
//    an even length number
// Thoughts
//  If we take the number, we can easily check if it's a double number by
//  converting it into a string, and spliting it in the middle
//  then seeing if one side includes the other

console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676

function twice(num) {
  let middle = Math.floor((String(num).length / 2));
  let firstHalf = String(num).substring(0, middle);
  let secondHalf = String(num).substring(middle);

  return (firstHalf.includes(secondHalf)) ? num : num * 2;
}