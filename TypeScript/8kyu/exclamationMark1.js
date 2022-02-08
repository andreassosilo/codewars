"use strict";
// Codewars - Andreas Sosilo
// 8 kyu - TypeScript - Exclamation marks series #1: Remove an exclamation mark from the end of string
exports.__esModule = true;
exports.remove = void 0;
/*
Task:
-----
Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

Examples
remove("Hi!") === "Hi"
remove("Hi!!!") === "Hi!!"
remove("!Hi") === "!Hi"
remove("!Hi!") === "!Hi"
remove("Hi! Hi!") === "Hi! Hi"
remove("Hi") === "Hi"
*/
function remove(s) {
    return s[s.length - 1] === '!' ? s.slice(0, s.length - 1) : s;
}
exports.remove = remove;
// TEST CASES
console.log(remove('Hi!!!')); // "Hi!!"
console.log(remove('Hi! Hi!')); // "Hi! Hi"
console.log(remove('Hi')); // "Hi"
// BEST SOLUTION
// export const remove = (s: string): string => s.replace(/!$/, '')
