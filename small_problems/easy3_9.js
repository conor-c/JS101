// Problem
//  Given an input string, return an output string with all non-letters replaced
//  by a ' ', only one ' ' should be inputted, don't have 2 ' ' in a row

const VALID_CHARS = ' abcdefghijklmnopqrstuvwxyz';

function cleanUp(string) {
  let cleanString = '';

  for (let idx in string) {
    if (VALID_CHARS.includes(string[idx].toLowerCase())) {
      if (string[idx] === ' ' && cleanString[cleanString.length - 1] === ' ') continue;
      cleanString += string[idx];
    } else if (!VALID_CHARS.includes(string[idx])) {
      if (cleanString[cleanString.length - 1] === ' ') continue;
      cleanString += ' ';
    }
  }
  return cleanString;
}

console.log(cleanUp("---whAt's my +*& line?"));    // " what s my line "


