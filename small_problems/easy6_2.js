// Problem
//  Given a string, return a string with only consonants doubled

// Algorithm
//  Split the string into an array of characters
//  For each element, check if the character is a consonant
//  if the character is a consonant, double it
//  if the character is not, only push a single instance of it

console.log(doubleConsonants('String') === "SSttrrinngg");          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!') === "HHellllo-WWorrlldd!");    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th') === "JJullyy 4tthh");        // "JJullyy 4tthh"
console.log(doubleConsonants('') === "");                // ""

function doubleConsonants(string) {
  const CONSONANTS = 'bcdfghjklmnpqrstvwxyz';

  return string.split('').map(char => {
    if (CONSONANTS.includes(char.toLowerCase())) return char + char;
    return char;
  }).join('');
}