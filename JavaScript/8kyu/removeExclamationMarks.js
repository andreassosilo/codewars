'use strict';
// Codewars - Andreas Sosilo
// 8 kyu - Switch it Up!

/*
Task:
-----
Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
*/

// SOLUTION
const removeExclamationMarks = (s) => s.replace(/!/gi, '');

// TEST CASES
console.log(removeExclamationMarks('Hello World!')); // "Hello World"
