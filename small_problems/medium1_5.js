/*  PROBLEM
implement a feature that parses a string and coverts number words
into numbers
*/

/* INPUT
a string, presumably with number words
*/

/* Output
a string with numbers swapped in for number words
*/

/*  Rules
swap the number words in place, keep spaces
*/

/* Questions
only deal with numbers 0-9?
*/

// EXAMPLES/ TEST CASES


/* DATA STRUCTURE
an array with number words as elements in related indices
*/

/* ALGORITHM
1. split string at spaces, check each word against constant
2. if word is included in constant, return the indices in place
hard part will be dealing with punctuation
*/

// CODE
const NUM = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

function wordToDigit(string) {
  return string.split(' ').map((word) => {
    let hasPeriod = word.includes('.');
    word = word.split('').filter(char => char.toUpperCase() !== char.toLowerCase()).join('');

    if (NUM.includes(word)) {
      if (hasPeriod) return NUM.indexOf(word) + '.';
      return NUM.indexOf(word);
    }
    if (hasPeriod) return word + '.';
    return word;
  }).join(' ');
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."