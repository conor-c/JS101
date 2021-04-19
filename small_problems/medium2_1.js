/*  PROBLEM
given a string, return an object with three properties
*/

/* INPUT
string
*/

/* Output
object with three properties
1. the percentaged of characters in the string that are lowercase letters
2. the percentage of characters that are uppercase letters
3. the percentage of characters that are neither
*/

/*  Rules
the string will always contain at least one character
*/

/* Questions

*/

// EXAMPLES/ TEST CASES
console.log(letterPercentages('abCdef 123'));
// // { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// // { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// // { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }

/* DATA STRUCTURE
object
*/

/* ALGORITHM
1. count and remove the number of nonletters
2. with only letters remain, check if the letter is lowercase by seeing if
its equal to letter.toLowerCase()
3. if it is, add it to lowercase count
4. if it isn't add it to uppercase count
]
*/

// CODE

function letterPercentages(string) {
  let total = string.length;
  let lower = 0;
  let upper = 0;
  let neither = 0;

  string.split('').forEach(char => {
    if (!isLetter(char)) {
      neither++;
    } else if (isLetter(char) && char === char.toLowerCase()) {
      lower++;
    } else {
      upper++;
    }
  });

  return {
    lowercase: stringPercentage(lower, total),
    uppercase: stringPercentage(upper, total),
    neither: stringPercentage(neither, total),
  };
}

function isLetter(char) {
  return char.toUpperCase() !== char.toLowerCase();
}

function stringPercentage(part, whole) {
  let percentage = (part / whole) * 100;
  return String(percentage.toFixed(2));
}