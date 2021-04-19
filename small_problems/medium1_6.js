console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(10));       // 5
// fibonacci(12);      // 144
// fibonacci(20);      // 6765

function fibonacci(num) {
  if (num < 2) return num;
  return fibonacci(num - 1) + fibonacci(num - 2);
}


/*
if its third place, return fibonacci(2) + fibonacci(1)
fibonacci(2) = fibonacci(1) + fibonacci ()
*/