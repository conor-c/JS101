// Problem
//  give an integer as an argument
//  return true if the integer is palindromic
//  (reads the same forward as backward)


function isPalindromicNumber(int) {
  return String(int) === String(int).split('').reverse().join('');
}
console.log(isPalindromicNumber(34543));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(22));           // true
console.log(isPalindromicNumber(5));            // true