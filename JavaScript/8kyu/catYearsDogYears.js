'use strict';
// Codewars - Andreas Sosilo
// 8 kyu - Cat years, Dog years

/*
Task:
-----
I have a cat and a dog.

I got them at the same time as kitten/puppy. That was humanYears years ago.

Return their respective ages now as [humanYears,catYears,dogYears]

NOTES:

humanYears >= 1
humanYears are whole numbers only
Cat Years
15 cat years for first year
+9 cat years for second year
+4 cat years for each year after that
Dog Years
15 dog years for first year
+9 dog years for second year
+5 dog years for each year after that

*/

// SOLUTION
const humanYearsCatYearsDogYears = (humanYears) => {
  let catYears = 0;
  let dogYears = 0;
  for (let index = 1; index <= humanYears; index++) {
    if (index === 1) {
      catYears += 15;
      dogYears += 15;
    } else if (index === 2) {
      catYears += 9;
      dogYears += 9;
    } else {
      catYears += 4;
      dogYears += 5;
    }
  }
  return [humanYears, catYears, dogYears];
};

// TEST CASES
console.log(humanYearsCatYearsDogYears(1)); // [1,15,15]
console.log(humanYearsCatYearsDogYears(2)); // [2,24,24]

// BEST SOLUTION
// const humanYearsCatYearsDogYears = h => [h, (h - 1 ? 16 : 11) + 4 * h, (h - 1 ? 14 : 10) + 5 * h];
