"use strict";
// Codewars - Andreas Sosilo
// 7 kyu - TypeScript - Maximum Product
exports.__esModule = true;
exports.adjacentElementsProduct = void 0;
/*
Task:
-----
Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.

Notes
Array/list size is at least 2.

Array/list numbers could be a mixture of positives, negatives also zeroes .

Input >> Output Examples
adjacentElementsProduct([1, 2, 3]); ==> return 6
Explanation:
The maximum product obtained from multiplying 2 * 3 = 6, and they're adjacent numbers in the array.
adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48]); ==> return 50
*/
function adjacentElementsProduct(arr) {
    var result = Number.NEGATIVE_INFINITY;
    for (var index = 0; index < arr.length - 1; index++) {
        if (arr[index] * arr[index + 1] > result)
            result = arr[index] * arr[index + 1];
    }
    return result;
}
exports.adjacentElementsProduct = adjacentElementsProduct;
// TEST CASES
console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3])); // 21
console.log(adjacentElementsProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921])); // -14
// BEST SOLUTION
// export function adjacentElementsProduct(arr: number[]): number {
//   return Math.max(...arr.slice(1).map((x, i) => x * arr[i]))
// }
