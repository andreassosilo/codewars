"use strict";
// Codewars - Andreas Sosilo
// 8 kyu - TypeScript - Find the position!
exports.__esModule = true;
exports.position = void 0;
/*
Task:
-----
When provided with a letter, return its position in the alphabet.

Input :: "a"

Output :: "Position of alphabet: 1"
*/
function position(alphabet) {
    return "Position of alphabet: ".concat(alphabet.charCodeAt(0) - 96);
}
exports.position = position;
// TEST CASES
console.log(position('a')); //"Position of alphabet: 1"
console.log(position('z')); // "Position of alphabet: 26"
