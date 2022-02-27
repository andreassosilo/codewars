"use strict";
// Codewars - Andreas Sosilo
// 7 kyu - TypeScript - "Very Even" Numbers.
exports.__esModule = true;
exports.isVeryEvenNumber = void 0;
/*
Task:
-----
Write a function that returns true if the number is a "Very Even" number.

If a number is a single digit, then it is simply "Very Even" if it itself is even.

If it has 2 or more digits, it is "Very Even" if the sum of its digits is "Very Even".

Examples
number = 88 => returns false -> 8 + 8 = 16 -> 1 + 6 = 7 => 7 is odd

number = 222 => returns true -> 2 + 2 + 2 = 6 => 6 is even

number = 5 => returns false

number = 841 => returns true -> 8 + 4 + 1 = 13 -> 1 + 3 => 4 is even
Note: The numbers will always be 0 or positive integers!
*/
function isVeryEvenNumber(n) {
    if (n.toString().length === 1 && n % 2 === 0)
        return true;
    if (n.toString().length === 1 && n % 2 !== 0)
        return false;
    return isVeryEvenNumber(n
        .toString()
        .split('')
        .reduce(function (a, b) { return a + Number(b); }, 0));
}
exports.isVeryEvenNumber = isVeryEvenNumber;
// TEST CASES
console.log(isVeryEvenNumber(0)); // "true"
console.log(isVeryEvenNumber(5)); // "false"
console.log(isVeryEvenNumber(12)); // "false"
console.log(isVeryEvenNumber(222)); // "true"
