/* eslint-disable max-len */
// Given an array of strings made only from lowercase letters, return an array
// of all characters that show up in all strings within the given array
// (including duplicates). For example, if a character occurs 3 times in all
// strings but not 4 times, you need to include that character three times
// in the final answer.

console.log(commonChars(['a', 'b'])); // []
console.log(commonChars(['aba', 'bc'])); // ['b']
console.log(commonChars(['bella', 'label', 'roller'])); // ['e', 'l', 'l']
console.log(commonChars(['cool', 'lock', 'cook'])); // ['c', 'o']
console.log(commonChars(['hello', 'goodbye', 'booya', 'random'])); // ['o']
console.log(commonChars(['aabbaaaa', 'ccdddddd', 'eeffee', 'ggrrrrr', 'yyyzzz'])); // []
// eslint-disable-next-line max-lines-per-function
function commonChars(array) {
  let charArr = array.map(string => string.split(''));
  charArr.sort((arrA, arrB) => arrA.length - arrB.length);
  let failChar = [];
  let passChar = [];

  for (let idx = 0; idx < charArr[0].length; idx += 1) {
    let currentChar = charArr[0][idx];

    if (failChar.includes(currentChar) || passChar.includes(currentChar)) continue;

    if (charArr.filter(arr => arr.includes(currentChar)).length !== array.length) {
      failChar.push(currentChar);
    } else {
      let onlyCurrentChars = charArr.map(innerArray => {
        return innerArray.filter(char => {
          return char === currentChar;
        });
      }).sort((arrA, arrB) => arrA.length - arrB.length);

      passChar.push(...onlyCurrentChars[0]);
    }
  }

  return passChar;
}