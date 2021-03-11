/* Problem Description
Given a string of one or more words, return an array that contains
the number of vowels in each word of the argument string.

The returned array should have the same number of
elements as words in the argument string.

Vowels are aeiou.

Test Cases*/
console.log(vowelCount('WhaTs yOur enneagram?'));
// [1, 2, 4]
console.log(vowelCount('Colonel Sanders feeds me well !!'));
// [3, 2, 2, 1, 1, 0]
console.log(vowelCount(''));
// []
console.log(vowelCount('ZoInkies!! There are monsters in here.'));
// [4, 2, 2, 2, 1, 2]
console.log(vowelCount('grrr!'));
// [0]

// Problem
//  given a string of words, return an array of elements,
//  each of which contains the number of vowels in the argument
// Input
//  A string of ONE or MORE words
// Output
//  An array, each element corresponds to the number of vowels in the 
//  argument word
// Algorithm
//  Seperate each word from the arguments string
//  check how many vowels are in the individual word
//  push the number of vowels to the resulting array
//  when out of words, return resulting array

function vowelCount(stringOfWords) {
  let wordsArray = stringOfWords.split(' ');
  const VOWELS = 'aeiou';
  if (stringOfWords.length === 0) return [];
  let vowelsArray = wordsArray.map(invdividualWord => {
    let vowelsInWord = 0;
    invdividualWord.split('').forEach(char => {
      if (VOWELS.includes(char.toLowerCase())) {
        vowelsInWord += 1;
      }
    });
    return vowelsInWord;
  });
  return vowelsArray;
}

// refactor to remove guard clause on line 39
