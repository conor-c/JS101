let flintstones = {
  Fred: 0,
  Wilma: 1,
  Barney: 2,
  Betty: 3,
  Bambam: 4,
  Pebbles: 5
};
// let barney = Object.entries(flintstones)[2];
// only works if we know the position of Barney

let barney = Object.entries(flintstones).filter(nestedArray => nestedArray[0] === 'Barney').flat();
//turns the object into an array of nested keyValue arrays.
//runs a check on each nested array to see if the first index of the nested
//    array equals 'Barney', and then returns it to the new array,
//    which is still a nested array from the entries method, until
//    we denest it with either .flat() or by .shift()'ing it
//    it's important to note that if we had used .flat() after
//    .entries method we would not of been able grab the value 2
//    with the key Barney
console.log(barney);