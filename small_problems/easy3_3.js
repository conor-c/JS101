
// Problem
//  Create a function that takes a positive int as an arg, and returns a
//  string of alternating '1' and '0' (starting with '1'), so that the
//  length of the string matches the giver integer

// Test Cases
stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"

// Algorithm
//  First thoughts: a while loop would be good for this

function stringy(int) {
  let result = '';
  while (result.length < int) {
    if (result.length % 2 !== 0) {
      result = result.concat('0');
    } else {
      result = result.concat('1');
    }

  }
  console.log(result);
}