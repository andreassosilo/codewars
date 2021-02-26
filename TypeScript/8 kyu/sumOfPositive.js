"use strict";
// Codewars - Andreas Sosilo
// 8 kyu - Sum of positive
exports.__esModule = true;
exports.positiveSum = void 0;
/*
Task:
-----
You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.
*/
function positiveSum(arr) {
    var sum = 0;
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var i = arr_1[_i];
        if (i > 0) {
            sum += i;
        }
    }
    return sum;
}
exports.positiveSum = positiveSum;
// TEST CASES
console.log(positiveSum([1, 2, 3, 4, 5]));
// BEST SOLUTION
/*
export function positiveSum(arr: number[]): number {
  return arr.reduce((sum, n) => (n > 0 ? sum + n : sum), 0);
}
*/
