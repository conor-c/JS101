function doubleNumbers(numbers) {
  for (let idx = 0; idx < numbers.length; idx += 1) {
    numbers[idx] *= 2;
  }
}

let myNumbers = [1, 4, 3, 7, 2, 6];
console.log(myNumbers);
doubleNumbers(myNumbers);
console.log(myNumbers);