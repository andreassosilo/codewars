"use strict";
// Codewars - Andreas Sosilo
// 8 kyu - Beginner - Reduce but Grow
exports.__esModule = true;
exports.grow = void 0;
/*
Task:
-----
Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
*/
function grow(arr) {
    return arr.reduce(function (prev, current) { return prev * current; });
}
exports.grow = grow;
// TEST CASES
console.log(grow([1, 2, 3])); // 6
console.log(grow([4, 1, 1, 1, 4])); // 16
// BEST SOLUTION
// export const grow = (arr: number[]) => arr.reduce((accum, it) => accum * it);
