let sequence = {1: 1, 2: 1};

function fibonacci(nth) {
  if (sequence[nth]) return sequence[nth];

  sequence[nth] = fibonacci(nth - 1) + fibonacci(nth - 2);
  return sequence[nth];
}

console.log(fibonacci(7));
console.log(sequence);

// 1, 1, 2, 3, 5, 8, 13