/*
function isColorValid(color) {
  if (color === "blue" || color === "green") {
    return true;
  } else {
    return false;
  }
}

function isColorValid(color) {
  return (color === "blue");
}

function isColorValid(color) {
  return (color.includes('blue'));
}
*/

//function isColorValid(color) {
//return color === 'blue' || color === 'green';
//}

//let isColorValid = color => color === 'blue' || color === 'green';

function isColorValid(color) {
  return ['blue', 'green'].includes(color);
}
console.log(isColorValid('blue'));
console.log(isColorValid('green'));

//my solutions were not good because I misread the req and believed
//green was supposed to return false