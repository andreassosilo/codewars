"use strict";
// Codewars - Andreas Sosilo
// 7 kyu - TypeScript - JavaScript Array Filter
exports.__esModule = true;
exports.getEvenNumbers = void 0;
/*
Task:
-----
The solution would work like the following:

getEvenNumbers([2,4,5,6]) // should == [2,4,6]
*/
var getEvenNumbers = function (numbersArray) {
    return numbersArray.filter(function (num) { return num % 2 === 0; });
};
exports.getEvenNumbers = getEvenNumbers;
// TEST CASES
console.log((0, exports.getEvenNumbers)([1, 2, 3, 6, 8, 10])); // [2,6,8,10]
console.log((0, exports.getEvenNumbers)([13, 15])); // []
