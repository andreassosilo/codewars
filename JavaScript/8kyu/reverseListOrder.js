'use strict';
// Codewars - Andreas Sosilo
// 8 kyu - Reverse List Order

/*
Task:
-----
In this kata you will create a function that takes in a list and returns a list with the reverse order.

Examples
reverseList([1,2,3,4]) == [4,3,2,1]
reverseList([3,1,5,4]) == [4,5,1,3]
*/

// SOLUTION
const reverseList = (list) => list.reverse();

// TEST CASES
console.log(reverseList([1, 2, 3, 4])); // [4,3,2,1]
console.log(reverseList([3, 1, 5, 4])); // [4,5,1,3])
