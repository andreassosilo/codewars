'use strict';
// Codewars - Andreas Sosilo
// 7 kyu - Triangular Treasure

/*
Task:
-----
Triangular numbers are so called because of the equilateral triangular shape that they occupy when laid out as dots. i.e.

1st (1)   2nd (3)    3rd (6)
*          **        ***
           *         **
                     *
You need to return the nth triangular number. You should return 0 for out of range values:

For example: (Input --> Output)

0 --> 0
2 --> 3
3 --> 6
*/

// SOLUTION
const triangular = (n) => (n > 0 ? (n * (n + 1)) / 2 : 0);

// TEST CASES
console.log(triangular(2)); // 3
console.log(triangular(4)); // 10
