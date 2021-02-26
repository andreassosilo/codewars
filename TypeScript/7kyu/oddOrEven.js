"use strict";
// Codewars - Andreas Sosilo
// 7 kyu - Odd or Even?
exports.__esModule = true;
exports.oddOrEven = void 0;
/*
Task:
-----
Given a list of integers, determine whether the sum of its elements is odd or even.

Give your answer as a string matching "odd" or "even".

If the input array is empty consider it as: [0] (array with a zero).
*/
function oddOrEven(array) {
    if (array.length === 0)
        return "even";
    return array.reduce(function (sum, value) { return sum + value; }, 0) % 2 === 0
        ? "even"
        : "odd";
}
exports.oddOrEven = oddOrEven;
// TEST CASES
console.log(oddOrEven([])); // 'even'
console.log(oddOrEven([0, 1, 2])); // 'odd'
