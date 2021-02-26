"use strict";
// Codewars - Andreas Sosilo
// 8 kyu - Even or Odd
exports.__esModule = true;
exports.even_or_odd = void 0;
/*
Task:
-----
Create a function (or write a script in Shell) that takes an integer
as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
*/
function even_or_odd(n) {
    return n % 2 === 0 ? "Even" : "Odd";
}
exports.even_or_odd = even_or_odd;
// TEST CASES
console.log(even_or_odd(2)); // "Even"
console.log(even_or_odd(7)); // "Odd"
