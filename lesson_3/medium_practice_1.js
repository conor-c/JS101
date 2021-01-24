function flintStonesRock() {
  //output 'The Flintstones Rock!' 10x with each line indented 1 space to the
  //right from the previous line
  let rockAnthem = 'The Flintstones Rock!';
  for (let extraSpace = 0; extraSpace < 10; extraSpace++) {
    console.log(rockAnthem.padStart(rockAnthem.length + extraSpace, ' '));
  }
}

flintStonesRock();

