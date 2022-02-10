"use strict";
// Codewars - Andreas Sosilo
// 8 kyu - TypeScript - Filling an array (part 1)
exports.__esModule = true;
exports.arr = void 0;
/*
Task:
-----
We want an array, but not just any old array, an array with contents!

Write a function that produces an array with the numbers 0 to N-1 in it.

For example, the following code will result in an array containing the numbers 0 to 4:

arr(5) // => [0,1,2,3,4]
Note: The parameter is optional. So you have to give it a default value.
*/
var arr = function (n) {
    if (n === void 0) { n = 0; }
    var result = [];
    for (var index = 0; index < n; index++) {
        result.push(index);
    }
    return result;
};
exports.arr = arr;
// TEST CASES
console.log((0, exports.arr)(4)); // [0,1,2,3]
console.log((0, exports.arr)()); // []
// BEST SOLUTION
// export const arr = (n: number = 0): number[] => [...Array(n).keys()];
