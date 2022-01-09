'use strict';
// Codewars - Andreas Sosilo
// 7 kyu - Halving Sum

/*
Task:
-----
Given a positive integer n, calculate the following sum:

n + n/2 + n/4 + n/8 + ...
All elements of the sum are the results of integer division.

Example
25  =>  25 + 12 + 6 + 3 + 1 = 47
*/

// SOLUTION
const halvingSum = (n) => (n > 1 ? n + halvingSum(Math.floor(n / 2)) : 1);

// TEST CASES
console.log(halvingSum(25)); // 47
console.log(halvingSum(127)); // 247
