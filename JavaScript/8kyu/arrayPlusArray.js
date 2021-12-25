'use strict';
// Codewars - Andreas Sosilo
// 8 kyu - Get Planet Name By ID

/*
Task:
-----
I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too.
*/

// SOLUTION
const arrayPlusArray = (arr1, arr2) => {
  const reducer = (previousValue, currentValue) => previousValue + currentValue;
  return arr1.reduce(reducer) + arr2.reduce(reducer);
};

// TEST CASES
console.log(arrayPlusArray([1, 2, 3], [4, 5, 6])); // 21
console.log(arrayPlusArray([-1, -2, -3], [-4, -5, -6])); // -21

// BEST SOLUTION
// const arrayPlusArray = (arr1, arr2) => [...arr1, ...arr2].reduce((a, b) => a + b, 0);
