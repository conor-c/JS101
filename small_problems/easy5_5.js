// Problem
//  Given two arrays of equal values
//  Return an array of the two arrays combined, alternating elements

interleave([1, 2, 3], ['a', 'b', 'c']);    // [1, "a", 2, "b", 3, "c"]

function interleave(arr1, arr2) {
  let resultArray = [];
  for (let idx in arr1) {
    resultArray.push(arr1[idx], arr2[idx]);
  }
  return resultArray;
}