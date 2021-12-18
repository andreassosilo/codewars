'use strict';
// Codewars - Andreas Sosilo
// 7 kyu - Sum of the first nth term of Series

/*
Task:
-----
Your task is to write a function which returns the sum of following series upto nth term(parameter).

Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
Rules:
You need to round the answer to 2 decimal places and return it as String.

If the given value is 0 then it should return 0.00

You will only be given Natural Numbers as arguments.

Examples:(Input --> Output)
1 --> 1 --> "1.00"
2 --> 1 + 1/4 --> "1.25"
5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"
*/

// SOLUTION
const SeriesSum = (n) => {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += 1 / (1 + 3 * i);
  }
  return sum.toFixed(2);
};

// TEST CASES
console.log(SeriesSum(1)); // "1.00"
console.log(SeriesSum(3)); // "1.39"

// BEST SOLUTION
// function SeriesSum(n, s = 0) {
//   return n ? SeriesSum(n - 1, s + 1 / (3 * n - 2)) : s.toFixed(2)
// }
