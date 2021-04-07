repeater('Hello');        // "HHeelllloo"
repeater('Good job!');    // "GGoooodd  jjoobb!!"
repeater('');             // ""

// Algorithm
//  split the string into an array of characters
//  for each character, push two of the characters to a new array
//  join that array together

function repeater(string) {
  let doubledCharacters = [];
  string.split('').forEach(char => doubledCharacters.push(char, char));
  console.log(doubledCharacters.join(''));
}