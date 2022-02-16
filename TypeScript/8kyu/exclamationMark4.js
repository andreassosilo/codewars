"use strict";
// Codewars - Andreas Sosilo
// 8 kyu - TypeScript - Exclamation marks series #4: Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string
exports.__esModule = true;
exports.remove = void 0;
/*
Task:
-----
Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string. For a beginner kata, you can assume that the input data is always a non empty string, no need to verify it.

Examples
remove("Hi!") === "Hi!"
remove("Hi!!!") === "Hi!"
remove("!Hi") === "Hi!"
remove("!Hi!") === "Hi!"
remove("Hi! Hi!") === "Hi Hi!"
remove("Hi") === "Hi!"
*/
function remove(s) {
    return "".concat(s.replace(/!/gi, ''), "!");
}
exports.remove = remove;
// TEST CASES
console.log(remove('Hi!')); // "Hi!"
console.log(remove('Hi!!!')); // "Hi!"
console.log(remove('!Hi')); // "Hi!"
console.log(remove('!Hi!')); // "Hi!"
console.log(remove('Hi! Hi!')); // "Hi Hi!"
// BEST SOLUTION
// export const remove = (s: string): string => s.replace(/!$/, '')
