"use strict";
// Codewars - Andreas Sosilo
// 8 kyu - Returning Strings
exports.__esModule = true;
exports.greet = void 0;
/*
Task:
-----
Make a function that will return a greeting statement that uses an input;
your program should return, "Hello, <name> how are you doing today?".
*/
function greet(name) {
    return "Hello, " + name + " how are you doing today?";
}
exports.greet = greet;
// TEST CASES
console.log(greet("Ryan")); // "Hello, Ryan how are you doing today?"
console.log(greet("Shingles")); // "Hello, Shingles how are you doing today?"
// BEST SOLUTION
// export const greet = (name: string): string => `Hello, ${name} how are you doing today?`;
