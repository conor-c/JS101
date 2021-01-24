let munstersDescription = "The Munsters are creepy and spooky.";
//`tHE mUNSTERS ARE CREEPY AND SPOOKY.`

function capitalizedLetterSwap(string) {
  let lettersArray = string.split('');
  let finishedString = '';

  lettersArray.forEach(letter => {
    if (letter === letter.toLowerCase()) {
      finishedString += letter.toUpperCase();
    } else if (letter === letter.toUpperCase()) {
      finishedString += letter.toLowerCase();
    }
  });
  return finishedString;
}

console.log(capitalizedLetterSwap(munstersDescription));
