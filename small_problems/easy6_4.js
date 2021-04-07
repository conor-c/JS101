// Problem
//  Given a non empty string, return the middle character/characters if odd
// Algorithm
//  Attempt to split the string in half
//  If the two halves are equal, return the last character from the first
//  and the first character from the second

function centerOf(string) {
  let firstHalf = string.slice(0, string.length / 2);
  let secondHalf = string.slice(string.length / 2);

  if (firstHalf.length === secondHalf.length) {
    console.log(firstHalf.slice(-1) + secondHalf[0]);
  } else {
    console.log(secondHalf[0]);
  }
}
centerOf('I Love JavaScript'); // "a"
centerOf('Launch School');     // " "
centerOf('Launch');            // "un"
centerOf('Launchschool');      // "hs"
centerOf('x');                 // "x"