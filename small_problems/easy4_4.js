// Problem
//  Write a function that takes a string as an argument
//  return true if the string is a palindrome
//  case and all characters matter
// Input
//  string
// Output
//  true if palindrome, false otherwise

// Algorithm
//  Rewrite the string by re-building it using the characters in reverse order

// Test Cases
console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // false (case matters)
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome('356653'));              // true

function isPalindrome(string) {
  let reversedString = '';

  for (let idx = string.length - 1; idx >= 0; idx--) {
    reversedString += string[idx];
  }

  if (string === reversedString) return true;
  return false;
}

