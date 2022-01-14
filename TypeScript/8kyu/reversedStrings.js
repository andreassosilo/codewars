"use strict";
// Codewars - Andreas Sosilo
// 8 kyu - Reversed Strings
exports.__esModule = true;
exports.solution = void 0;
/*
Task:
-----
Complete the solution so that it reverses the string passed into it.
*/
function solution(str) {
    return str.split("").reverse().join(""); // reverse this!
}
exports.solution = solution;
// TEST CASES
console.log(solution("world")); // "dlrow"
console.log(solution("hello")); // "olleh"
// BEST SOLUTION
// export const solution = (str: string): string => [...str].reverse().join('');
