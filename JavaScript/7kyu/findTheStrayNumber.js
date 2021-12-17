'use strict';
// Codewars - Andreas Sosilo
// 7 kyu - Replace With Alphabet Position

/*
Task:
-----
You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)

Examples
[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3
*/

// SOLUTION
const stray = (numbers) => {
  let numA = numbers[0];
  let numB = 0;
  let countA = 1;
  let countB = 0;
  for (let i = 1; i < numbers.length; i++) {
    const element = numbers[i];
    if (element === numA) {
      countA++;
    } else {
      numB = element;
      countB++;
    }
  }
  return countA > 1 ? numB : numA;
};

// TEST CASES
console.log(stray([1, 1, 2])); // 2

// BEST SOLUTION
// const stray = nums => nums.reduce((a, b) => a ^ b);
