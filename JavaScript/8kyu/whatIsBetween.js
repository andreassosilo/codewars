'use strict';
// Codewars - Andreas Sosilo
// 8 kyu - What is between?

/*
Task:
-----
Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

For example:

a = 1
b = 4
--> [1, 2, 3, 4]
*/

// SOLUTION
const between = (a, b) => {
  let result = [];
  for (let index = 0; index < b - a + 1; index++) {
    result.push(a + index);
  }
  return result;
};

// TEST CASES
console.log(between(1, 4)); // [1, 2, 3, 4]
console.log(between(-2, 2)); // [-2, -1, 0, 1, 2]

// BEST SOLUTION
// const between = (a, b) => Array.from(new Array(b-a+1), (_, i) => a + i);
