// Problem
// => 
// Input
// Output
// Rules
// Questions
//
// Examples/ Test Cases
console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// // returns
// // [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]
console.log(palindromes('a a'));
// Data Structure
//
// Algorithm
//
// Code

function leadingSubstrings(string) {
  return string.split('').map((_char, idx) => string.slice(0, idx + 1));
}

function substrings(string) {
  return string.split('').reduce((prev, _next, idx) => {
    return prev.concat(leadingSubstrings(string.slice(idx)));
  }, []);
}

function palindromes(string) {
  return substrings(string).filter(substring => {
    if (substring.length === 1) return false;
    return (substring.split('').reverse().join('') === substring);
  });
}
