/* Given an array of strings, 
return a boolean indicating whether
at least three of the elements in the array have digits whose sum is
divisible by 3.

Elements of the argument array will be strings containing only string digits 0-9.

For example:
In the array ['35', '01110', '126', '57', '13'], 
the sum of the digits of each element will be: [8, 3, 9, 12, 4]
from the resulting sums, there are 3 that are evenly divisible by 3: [3, 9, 12]
so our function would return true.  See the below test cases for more examples.


Test Cases*/
console.log(threeByThree(['01112', '0111', '00030', '2043', '12043']));
// true
console.log(threeByThree(['01112', '2043', '12043']));
// false
console.log(threeByThree(['01112', '2043']));
// false
console.log(threeByThree(['93', '9', '1', '25', '1212']));
// true