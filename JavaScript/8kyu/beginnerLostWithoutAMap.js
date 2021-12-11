'use strict';

// Codewars - Andreas Sosilo
// 8 kyu - Beginner - Lost Without a Map

/*
Task:
-----
Given an array of integers, return a new array with each value doubled.

For example:

[1, 2, 3] --> [2, 4, 6]
*/

const maps = (x) => {
  return x.map((y) => y * 2);
};

// TEST CASES
console.log(maps([1, 2, 3])); // [2, 4, 6]
console.log(maps([4, 1, 1, 1, 4])); // [8, 2, 2, 2, 8]
