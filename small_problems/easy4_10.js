// given a string of words, write a function that swaps the first and last
// letter of every word

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"

function swap(stringOfWords) {
  return stringOfWords.split(' ').map(word => {
    if (word.length === 1) return word;
    return word[word.length - 1] + word.substring(1, word.length - 1) + word[0];
  }).join(' ');
}