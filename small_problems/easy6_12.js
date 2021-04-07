// Problem
// => Create a function that takes a string, and returns true if all parentheses
//    are balanced
// Input
//  a string like "this is balanced()"
// Output
//  true if every '(' has a ')'
// Rules
//  Balanced pairs must start with ( not )
// Questions
//
// Examples/ Test Cases
console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);
console.log(isBalanced("()()(()(") === false);
console.log(isBalanced("((( ))) (() ()) ()"));
// Data Structure
//  temporary storage of current character, to match( with )
// Algorithm
//  1. Split string into array of characters
//  2. If ) appears before (, return false
//  3. For every ( increment a counter by 1
//  4. For every ) increment a counter by 1
//  5. if 3/4 counters are equal, return true
//  6. return false
// Code
function isBalanced(string) {
  let leftParentheses = 0;
  let rightParentheses = 0;
  let lastParentheses;
  let charArray = string.split('');

  for (let char of charArray) {
    if (char === ')' && leftParentheses === rightParentheses) return false;
    if (char === '(') {
      leftParentheses += 1;
      lastParentheses = '(';
    }
    if (char === ')') {
      rightParentheses += 1;
      lastParentheses = ')';
    }
  }

  if (lastParentheses === '(') return false;
  return (leftParentheses === rightParentheses);

}