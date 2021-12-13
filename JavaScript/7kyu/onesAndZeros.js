'use strict';
// Codewars - Andreas Sosilo
// 7 kyu - Ones and Zeros

/*
Task:
-----
Given an array of ones and zeroes, convert the equivalent binary value to an integer.

Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

Examples:

Testing: [0, 0, 0, 1] ==> 1
Testing: [0, 0, 1, 0] ==> 2

However, the arrays can have varying lengths, not just limited to 4.
*/

// SOLUTION
const binaryArrayToNumber = (arr) => {
  return parseInt(arr.join(''), 2);
};

// TEST CASES
console.log(binaryArrayToNumber([0, 0, 0, 1])); // 1
console.log(binaryArrayToNumber([1, 1, 1, 1])); // 15
