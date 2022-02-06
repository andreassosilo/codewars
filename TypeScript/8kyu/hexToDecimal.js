"use strict";
// Codewars - Andreas Sosilo
// 8 kyu - TypeScript - Hex to Decimal
exports.__esModule = true;
exports.hexToDec = void 0;
/*
Task:
-----
Complete the function which converts hex number (given as a string) to a decimal number.
*/
function hexToDec(hexString) {
    return parseInt(hexString, 16);
}
exports.hexToDec = hexToDec;
// TEST CASES
console.log(hexToDec('FF')); // 255
console.log(hexToDec('-C')); // -12
