"use strict";
// Codewars - Andreas Sosilo
// 8 kyu - Find Maximum and Minimum Values of a List
exports.__esModule = true;
exports.max = exports.min = void 0;
/*
Task:
-----
Your task is to make two functions, max and min (maximum and minimum in PHP and Python) that take a(n) array/vector of integers list as input and outputs, respectively, the largest and lowest number in that array/vector.

#Examples

max([4,6,2,1,9,63,-134,566]) returns 566
min([-52, 56, 30, 29, -54, 0, -110]) returns -110
max([5]) returns 5
min([42, 54, 65, 87, 0]) returns 0
*/
var min = function (list) {
    return Math.min.apply(Math, list);
};
exports.min = min;
var max = function (list) {
    return Math.max.apply(Math, list);
};
exports.max = max;
// TEST CASES
console.log(exports.min([-52, 56, 30, 29, -54, 0, -110])); // -110
console.log(exports.max([4, 6, 2, 1, 9, 63, -134, 566])); // 566
// BEST SOLUTION
/*
export const min = list => Math.min(...list);
export const max = list => Math.max(...list);
*/
