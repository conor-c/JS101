let numbers = [1, 2, 3, 4];

//numbers = []; // doesn't technically remove the elements, just reassigns
//    better to use numbers.length = 0;

//numbers.splice(0, numbers.length);

while (numbers.length > 0) { //redundant because 0 is falsy anyway
  numbers.shift();
}
console.log(numbers);
