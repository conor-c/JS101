console.log(fibonacci(3));
console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050

function fibonacci(nth) {
  if (nth <= 2) return 1;

  let counter = 2;
  let currentFib = 0;
  let lastFib = 1;
  let secondLastFib = 1;

  while (counter < nth) {
    currentFib = lastFib + secondLastFib;
    secondLastFib = lastFib;
    lastFib = currentFib;
    counter++;
  }
  return currentFib;
}

// given 3 as nth, counter =  1, nth = 3
// 1 + 1, current Fib = 2, counter = 2