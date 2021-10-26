'use strict';
// Codewars - Andreas Sosilo
// 8 kyu - Twice as old

/*
Task:
-----
Your function takes two arguments:

current father's age (years)
current age of his son (years)
Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).
*/

const twiceAsOld = (dadYearsOld, sonYearsOld) =>
  Math.abs(dadYearsOld - 2 * sonYearsOld);

// TEST CASES
console.log(twiceAsOld(36, 7)); // 22
console.log(twiceAsOld(42, 21)); // 0
