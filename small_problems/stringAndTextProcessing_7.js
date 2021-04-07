console.log(staggeredCase("I Love Launch School!", false));
console.log(staggeredCase("ALL CAPS", false));
console.log(staggeredCase("ignore 77 the 444 numbers", false));

console.log(staggeredCase("I Love Launch School!", true));
console.log(staggeredCase("ALL CAPS", true));
console.log(staggeredCase("ignore 77 the 444 numbers", true));

function staggeredCase(string, countOnlyLetters = true) {
  let toCap = true;
  let isLetter = (char) => char.toUpperCase() !== char.toLowerCase();
  if (!countOnlyLetters) isLetter = (char) => true; // Treat every character as a letter

  return string.split('')
    .map((char) => {
      if (isLetter(char)) {
        if (toCap) {
          toCap = false;
          return char.toUpperCase();
        } else {
          toCap = true;
          return char.toLowerCase();
        }
      }
      return char;
    }).join('');
}

// could of had the letter expression just once and but both
// cases in the if conditional instead of an else if