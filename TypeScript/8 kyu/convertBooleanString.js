"use strict";
// Codewars - Andreas Sosilo
// 8 kyu - Convert a Boolean to a String
exports.__esModule = true;
exports.booleanToString = void 0;
/*
Task:
-----
Implement a function which convert the given boolean value into its string representation.

Note: Only valid inputs will be given.
*/
var booleanToString = function (b) {
    return b.toString();
};
exports.booleanToString = booleanToString;
// TEST CASES
console.log(exports.booleanToString(true)); // "true"
console.log(exports.booleanToString(false)); // "false"
