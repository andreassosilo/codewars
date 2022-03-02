"use strict";
// Codewars - Andreas Sosilo
// 8 kyu - TypeScript - Area of a Square
exports.__esModule = true;
exports.squareArea = void 0;
/*
Task:
-----
Complete the function that calculates the area of the red square, when the length of the circular arc A is given as the input. Return the result rounded to two decimals.

Graph

Note: use the π value provided in your language (Math::PI, M_PI, math.pi, etc)
*/
var squareArea = function (num) {
    return Number(Math.pow((num * 4) / (Math.PI * 2), 2).toFixed(2));
};
exports.squareArea = squareArea;
// TEST CASES
console.log((0, exports.squareArea)(2)); // 1.62
console.log((0, exports.squareArea)(14.05)); // 80
