'use strict';
// Codewars - Andreas Sosilo
// 8 kyu - Return Two Highest Values in List

/*
Task:
-----
In this kata, your job is to return the two distinct highest values in a list. If there're less than 2 unique values, return as many of them, as possible.

The result should also be ordered from highest to lowest.

Examples:

[4, 10, 10, 9]  =>  [10, 9]
[1, 1, 1]  =>  [1]
[]  =>  []
*/

function twoHighest(arr) {
  if (arr.length === 0) return arr;
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (result.length === 0) {
      result.push(arr[i]);
    } else {
      if (arr[i] === result[0] || arr[i] === result[1]) {
      } else if (arr[i] > result[0]) {
        result.unshift(arr[i]);
      } else if (result.length < 2) {
        result.push(arr[i]);
      } else if (arr[i] > result[1]) {
        result.splice(1, 1, arr[i]);
      }
    }
  }
  return result.length > 2 ? result.slice(0, 2) : result;
}

// TEST CASES
console.log(twoHighest([4, 10, 10, 9])); // [10, 9]
console.log(twoHighest([1, 1, 1])); // [1]
console.log(twoHighest([])); // []
console.log(twoHighest([75264, 6332])); // []

// BEST PRACTICE
// function twoHighest(arr) {
//   return [...new Set(arr)].sort((a, b) => b - a).slice(0, 2)
// }
