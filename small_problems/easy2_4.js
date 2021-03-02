function toThePower(num, power = 1) {
  if (power === 1) {
    return multiply(num, 1);
  } else {
    return num * toThePower(num, power - 1);
  }
}

function multiply(num1, num2) {
  return num1 * num2;
}

console.log(toThePower(1) === 1);
console.log(toThePower(-8, 2) === 64);
console.log(toThePower(5, 3) === 125);
console.log(toThePower(5, 4) === 625);