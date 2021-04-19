/*  PROBLEM
IMplement a bubble sort algorithm
*/

/* INPUT
an array of numbers with at least two elements
*/

/* Output
the same array sorted in place from lowest number to highest number
*/

/*  Rules
iterate through the array, comparing two elements, if the first is greater
than second element, swap, otherwise move to next pair
continue until no elements are swapped
*/

/* Questions

*/

// EXAMPLES/ TEST CASES
let array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

let array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

/* DATA STRUCTURE
array
*/

/* ALGORITHM
1. repeat until no actions are taken
2. do once per element
3. get the first element, and the second, compare, return lowest, highest in
new places
4. go to second and third, see step 3
*/

// CODE

function bubbleSort(array) {
  let stillSorting;

  do {
    stillSorting = false;

    for (let idx = 0; idx < array.length - 1; idx += 1) {
      let numA = array[idx];
      let numB = array[idx + 1];
      if (numA > numB) {
        array[idx] = numB;
        array[idx + 1] = numA;
        stillSorting = true;
      }
    }
  } while (stillSorting);
}