// Problem
//  given a string as an argument, return true if the string is a palindrome
//  ignore case, and all non alphanumeric characters

function isRealPalindrome(string) {
  let alphaNumericChars = 'qwertyuiopasdfghjklzxcvbnm1234567890';
  let cleanedString = string.toLowerCase().split('').filter(char => alphaNumericChars.includes(char)).join('');
  let reversedString = cleanedString.split('').reverse().join('');
  return cleanedString === reversedString;
}

console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false