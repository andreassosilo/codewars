"use strict";
// Codewars - Andreas Sosilo
// 6 kyu - Multiplication table
exports.__esModule = true;
exports.multiplicationTable = void 0;
/*
Task:
-----
Your task, is to create NxN multiplication table, of size provided in parameter.

for example, when given size is 3:

1 2 3
2 4 6
3 6 9
for given example, the return value should be: [[1,2,3],[2,4,6],[3,6,9]]
*/
function multiplicationTable(size) {
    var result = [];
    for (var i = 1; i <= size; i++) {
        var tempArr = [];
        for (var j = 1; j <= size; j++) {
            tempArr.push(j * i);
        }
        result.push(tempArr);
    }
    return result;
}
exports.multiplicationTable = multiplicationTable;
// TEST CASES
console.log(multiplicationTable(2)); // [[1, 2], [2, 4]]
console.log(multiplicationTable(3)); // [[1, 2, 3], [2, 4, 6], [3, 6, 9]]
// BEST SOLUTION
/*
export function multiplicationTable (size: number): number[][] {
  return [...Array(size)].map((_, i) => [...Array(size)].map((_, j) => (i + 1) * (j + 1)))
}
*/
