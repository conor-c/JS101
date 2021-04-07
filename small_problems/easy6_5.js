console.log(negative(5));     // -5
console.log(negative(-3));    // -3
console.log(negative(0));     // -0

function negative(int) {
  if (Math.sign(int) === -1) return int;
  return int * -1;
  // if (Math.sign(int) === 1 || Math.sign(int) === 0) return int * -1;
}