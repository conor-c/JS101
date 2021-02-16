let statement = "The Flintstones Rock";

let lettersOnlyArr = statement.split(' ').join('').split(''); // could do simplier using regex or even conditional
// OR a .filter(letter => letter !== ' ');
let result = {};

lettersOnlyArr.forEach(letter => {
  if (result[letter]) { // if the letter hasn't been counted once, should be undefined aka falsy
    result[letter] += 1;
  } else {
    result[letter] = 1;
  }
});

console.log(result);

// let charsInStatement = statement.split('').filter(char => char !== ' ');
// let result = {};

// charsInStatement.forEach(char => {
//   result[char] = result[char] || 0; //uses short circuit evalutation to deal
//   result[char] += 1;                // with undefined case
// });

// result;