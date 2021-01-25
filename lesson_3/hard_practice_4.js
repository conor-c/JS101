function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");
  if (!(dotSeparatedWords.length === 4)) {
    return false;
  }

  while (dotSeparatedWords.length > 0) {
    let word = dotSeparatedWords.pop();
    if (!isAnIpNumber(word)) {
      return false;
    }
  }

  return true;
}

/*
function isAnIpNumber(word) { //DOESN'T DEAL WITH -0
  let number = Number.parseInt(word, 10);
  console.log(number); //sets NaN if it's not a number
  //if number is NaN the return conditional will always be false
  return number >= 0 && number <= 255;
}
*/

function isAnIpNumber(str) {
  if (/^\d+$/.test(str)) {
    let number = Number(str);
    return number >= 0 && number <= 255;
  }

  return false;
}

console.log(isDotSeparatedIpAddress('2.233.1.2'));