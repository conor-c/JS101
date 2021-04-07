// PROBLEM
/*
Implement a feature that returns an array from a string
with the word followed by a space
*/

// Input
/*
a string
*/

// Output
/*
an array with each word being an element, with the
length of the word
*/

// Rules
/*
If the argument is an empty string, or no argument is pass, return an empty
array
*/

// Questions
/*
should any set of characters space delimitated be considered a word?
*/

// EXAMPLES/ TEST CASES
console.log(wordLengths('cow sheep chicken'));
// ["cow 3", "sheep 5", "chicken 7"]

console.log(wordLengths('baseball hot dogs and apple pie'));
// ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

console.log(wordLengths("It ain't easy, is it?"));
// ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

console.log(wordLengths('Supercalifragilisticexpialidocious'));
// ["Supercalifragilisticexpialidocious 34"]

console.log(wordLengths(''));      // []
console.log(wordLengths());        // []

// DATA STRUCTURE
/*
arrays
*/

// ALGORITHM
/*
1. split the string into an array of words space delimitated
2. For each element, find the length of the element and set
the element equal to the word plus a space plus the length
3. Continue until out of words
*/

// CODE
function wordLengths(string = '') {
  if (!string.length) return [];
  return string.split(' ').map(word => `${word} ${word.length}`);
}