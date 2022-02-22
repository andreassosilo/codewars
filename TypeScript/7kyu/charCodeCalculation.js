"use strict";
// Codewars - Andreas Sosilo
// 7 kyu - TypeScript - Char Code Calculation
exports.__esModule = true;
exports.sumCharCodes = exports.calc = void 0;
/*
Task:
-----
Given a string, turn each character into its ASCII character code and join them together to create a number - let's call this number total1:

'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667
Then replace any incidence of the number 7 with the number 1, and call this number 'total2':

total1 = 656667
              ^
total2 = 656661
              ^
Then return the difference between the sum of the digits in total1 and total2:

  (6 + 5 + 6 + 6 + 6 + 7)
- (6 + 5 + 6 + 6 + 6 + 1)
-------------------------
                       6
*/
var calc = function (str) {
    var total1 = str
        .split('')
        .map(function (char) { return char.charCodeAt(0); })
        .join('');
    var total2 = total1.replace(/7/g, '1');
    return (0, exports.sumCharCodes)(total1) - (0, exports.sumCharCodes)(total2);
};
exports.calc = calc;
var sumCharCodes = function (charCodes) {
    return charCodes
        .split('')
        .reduce(function (total, charCode) { return total + parseInt(charCode); }, 0);
};
exports.sumCharCodes = sumCharCodes;
// TEST CASES
console.log((0, exports.calc)('ABC')); // 6
// BEST SOLUTION
// export function calc(str: string): number {
//   return (
//     Array.from(str, (c) => c.charCodeAt(0))
//       .toString()
//       .replace(/[^7]/g, '').length * 6
//   );
// }
