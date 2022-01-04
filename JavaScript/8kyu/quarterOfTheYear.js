'use strict';
// Codewars - Andreas Sosilo
// 8 kyu - Quarter of the year

/*
Task:
-----
Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.
*/

// SOLUTION
const quarterOf = (month) => Math.ceil(month / 3);

// TEST CASES
console.log(quarterOf(3)); // 1
console.log(quarterOf(8)); // 3
console.log(quarterOf(11)); // 4
