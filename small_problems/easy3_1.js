function crunch(string) {
  let collapsedString = '';
  let currentChar = '';
  let nextChar = '';

  for (let idx = 0; idx < string.length; idx++) {
    currentChar = string[idx];
    nextChar = string[idx + 1];

    if (!nextChar) { // if nextChar is undefined because idx is = string.length
      collapsedString += currentChar;
      break;
    }

    if (currentChar === nextChar) {
      currentChar = nextChar;
      continue;
    }

    collapsedString += currentChar;
  }

  console.log(collapsedString);
}
// Test Cases
crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""

// This is a classic case of a function being too long because I didn't take
// the time to think about an optimal way