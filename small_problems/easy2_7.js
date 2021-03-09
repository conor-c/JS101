// Create a function 'xor' which returns true if only 1 of the arguments
// is truthy.
// Input: two arguments that are either truthy or falsy
// Output: a true boolean if only one is true, a false boolean otherwise.
// Explicit Rules: return a boolean value, not a truthy or falsy value
//    - Can be accomplished by !! or Boolean() function.
// Test Cases
console.log(xor(5, 0) === true);
console.log(xor(false, true) === true);
console.log(xor(1, 1) === false);
console.log(xor(true, true) === false);

function xor(firstArg, secondArg) {
  return Boolean((firstArg && !secondArg) || (!firstArg && secondArg));
}
