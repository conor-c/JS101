// return true if portion of str1 can be matched to create str2
// for the first letter in str2, see if there is a matching letter in str1
// if there is, remove the matchedl etter from str1, move onto next str2 letter

function scramble(str1, str2) {
  let letterPool = str1.split('');
  let success = true;

  if (str1.length < str2.length) return false;

  str2.split('').forEach(letter => {
    if (letterPool.includes(letter)) {
      letterPool.splice(letterPool.indexOf(letter), 1);
    } else {
      success = false;
    }
  });

  return success;
}


console.log(scramble('wzxvdfglodrs', 'world'))