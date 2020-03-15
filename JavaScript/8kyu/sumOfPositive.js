'use strict';
// Codewars - Andreas Sosilo
// 8 kyu - Sum of positive

/*
Task:
-----
You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.
*/

function positiveSum(arr) {
  // Create a variable to accomodate the sum of positive numbers
  let sum = 0;
  // Do looping using for-loop to check all of the elements in the input array
  for (let i = 0; i < arr.length; i++) {
    // Check if it's positif number or not
    if (arr[i] > 0 && typeof arr[i] === 'number') {
      sum += arr[i];
    }
  }
  return sum;
}

// TEST CASES
console.log(positiveSum([1, 2, 3, 4, 5])); // 15
console.log(positiveSum([-1, -2, -3, -4, -5])); // 0
console.log(positiveSum(positiveSum([]))); // 0
