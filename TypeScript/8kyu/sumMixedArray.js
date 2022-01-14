"use strict";
// Codewars - Andreas Sosilo
// 8 kyu - Sum Mixed Array
exports.__esModule = true;
exports.sumMix = void 0;
/*
Task:
-----
Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.
*/
function sumMix(x) {
    return x.reduce(function (acc, curr) {
        if (typeof curr !== 'number')
            curr = parseInt(curr);
        return (acc += curr);
    }, 0);
}
exports.sumMix = sumMix;
// TEST CASES
console.log(sumMix([9, 3, '7', '3'])); // 22
console.log(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2, '0'])); // 41
// BEST SOLUTION
/*
export function sumMix(x: any[]): number {
    return x.reduce((a, c) => a + +c, 0);
}
*/
