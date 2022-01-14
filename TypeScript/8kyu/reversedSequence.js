"use strict";
// Codewars - Andreas Sosilo
// 8 kyu - Reversed sequence
exports.__esModule = true;
exports.reverseSeq = void 0;
/*
Task:
-----
Build a function that returns an array of integers from n to 1 where n>0.

Example : n=5 >> [5,4,3,2,1]
*/
var reverseSeq = function (n) {
    var result = [];
    for (var i = n; i > 0; i--) {
        result.push(i);
    }
    return result;
};
exports.reverseSeq = reverseSeq;
// TEST CASES
console.log(exports.reverseSeq(5)); // [5, 4, 3, 2, 1]
// BEST SOLUTION
/*
export const min = list => Math.min(...list);
export const max = list => Math.max(...list);
*/
