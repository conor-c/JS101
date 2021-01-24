function factors(number) {
  let factors = [];
  if (number <= 0) {
    return '0 and negative numbers cannot have factors';
  } else {
    for (let divisor = number; divisor > 0; divisor -= 1) {
      if (number % divisor === 0) {
        factors.push(number / divisor);
      }
    }
  }
  return factors;
}

console.log(factors(10));

//a while loop would of been more concise;