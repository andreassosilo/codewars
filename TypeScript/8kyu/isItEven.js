"use strict";
// Codewars - Andreas Sosilo
// 8 kyu - TypeScript - Is it even?
exports.__esModule = true;
exports.testEven = void 0;
/*
Task:
-----
In this Kata we are passing a number (n) into a function.

Your code will determine if the number passed is even (or not).

The function needs to return either a true or false.

Numbers may be positive or negative, integers or floats.

Floats are considered UNeven for this kata.
*/
var testEven = function (n) {
    return n % 2 === 0;
};
exports.testEven = testEven;
// TEST CASES
console.log((0, exports.testEven)(0)); // true
console.log((0, exports.testEven)(0.5)); // false
console.log((0, exports.testEven)(20)); // true
// BEST SOLUTION
// export const testEven = (n : number) : boolean => n % 2 == 0
