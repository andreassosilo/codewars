"use strict";
// Codewars - Andreas Sosilo
// 7 kyu - TypeScript - Flatten and sort an array
exports.__esModule = true;
exports.flattenAndSort = void 0;
/*
Task:
-----
Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

Example:

Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].
*/
function flattenAndSort(inputArray) {
    return inputArray.flat().sort(function (a, b) { return a - b; });
}
exports.flattenAndSort = flattenAndSort;
// TEST CASES
console.log(flattenAndSort([
    [3, 2, 1],
    [7, 9, 8],
    [6, 4, 5],
])); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(flattenAndSort([[1, 3, 5], [100], [2, 4, 6]])); // [1, 2, 3, 4, 5, 6, 100]
