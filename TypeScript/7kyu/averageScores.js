"use strict";
// Codewars - Andreas Sosilo
// 7 kyu - TypeScript - Average Scores
exports.__esModule = true;
exports.average = void 0;
/*
Task:
-----
Create a function that returns the average of an array of numbers ("scores"), rounded to the nearest whole number. You are not allowed to use any loops (including for, for/in, while, and do/while loops).
*/
function average(scores) {
    return Math.round(scores.reduce(function (a, b) { return a + b; }, 0) / scores.length);
}
exports.average = average;
// TEST CASES
console.log(average([49, 3, 5, 300, 7])); // 73
console.log(average([90, 98, 89, 100, 100, 86, 94])); // 94
