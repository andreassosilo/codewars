"use strict";
// Codewars - Andreas Sosilo
// 8 kyu - TypeScript - MakeUpperCase
exports.__esModule = true;
exports.makeUpperCase = void 0;
/*
Task:
-----
Write a function which converts the input string to uppercase.
*/
function makeUpperCase(str) {
    return str.toUpperCase();
}
exports.makeUpperCase = makeUpperCase;
// TEST CASES
console.log(makeUpperCase('hello')); // "HELLO"
console.log(makeUpperCase('1,2,3 hello world!')); // "1,2,3 HELLO WORLD!"
