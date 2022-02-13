"use strict";
// Codewars - Andreas Sosilo
// 8 kyu - TypeScript - Expressions Matter
exports.__esModule = true;
exports.expressionsMatter = void 0;
/*
Task:
-----
Task
Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ()
In other words , try every combination of a,b,c with [*+()] , and return the Maximum Obtained
Consider an Example :
With the numbers are 1, 2 and 3 , here are some ways of placing signs and brackets:

1 * (2 + 3) = 5
1 * 2 * 3 = 6
1 + 2 * 3 = 7
(1 + 2) * 3 = 9
So the maximum value that you can obtain is 9.

Notes
The numbers are always positive.
The numbers are in the range (1  ≤  a, b, c  ≤  10).
*/
function expressionsMatter(a, b, c) {
    var combination = [a * (b + c), a * b * c, a + b * c, (a + b) * c];
    return Math.max.apply(Math, combination);
}
exports.expressionsMatter = expressionsMatter;
// TEST CASES
console.log(expressionsMatter(2, 1, 2)); // 6
console.log(expressionsMatter(1, 2, 3)); // 9
