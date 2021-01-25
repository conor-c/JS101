
function messWithVars(one, two, three) {
  one = two;
  two = three;
  three = one;
  console.log(one);
  console.log(two);
  console.log(three);
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`);
console.log(`two is: ${two}`);
console.log(`three is: ${three}`);
//reassignment of objects does not mutate the original object, and the local
//one block scoped variable is what is modified
//only mutating the object will change the global object referenced