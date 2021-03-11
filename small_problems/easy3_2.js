logInBox('To boldly go where no one has gone before.....', 8);
// +--------------------------------------------+
// |                                            |
// | To boldly go where no one has gone before. |
// |                                            |
// +--------------------------------------------+
logInBox('');

// Problem write a function that puts whatever string it's given into a box
// Data Structure
//
// Algorithm
//  Determine the length of the string
//  Pad the top and bottom by one line
//  pad the left and right by one character

function logInBox(string, innerBoxWidth) {
  let lengthOfBox = string.length + 2;
  let horizontal = `+${'-'.repeat(lengthOfBox)}+`;
  let emptyLine = `|${' '.repeat(lengthOfBox)}|`;

  if (string.length > innerBoxWidth) {
    wordWrapOutput(string, innerBoxWidth);
    return;
  }
  console.log(horizontal);
  console.log(emptyLine);
  console.log(`| ${string} |`);
  console.log(emptyLine);
  console.log(horizontal);
}

function wordWrapOutput(string, innerBoxWidth) {
  if (string.length > innerBoxWidth) {
    let lengthOfBox = innerBoxWidth;
    let horizontal = `+${'-'.repeat(lengthOfBox)}+`;
    let emptyLine = `|${' '.repeat(lengthOfBox)}|`;

    console.log(horizontal);
    console.log(emptyLine);

    while (string.length > innerBoxWidth - 2) {
      let subString = string.slice(0, (innerBoxWidth - 2));
      console.log(`| ${subString} |`);
      string = string.slice((innerBoxWidth - 2)).trim();
      if (string.length < innerBoxWidth - 2) {
        console.log(`| ${string.padEnd(innerBoxWidth - 2, ' ')} |`);
      }
    }

    console.log(emptyLine);
    console.log(horizontal);
  }
}