"use strict";
// Codewars - Andreas Sosilo
// 8 kyu - Opposite Number
exports.__esModule = true;
exports.Kata = void 0;
/*
Task:
-----
Very simple, given a number, find its opposite.
1: -1
*/
var Kata = /** @class */ (function () {
    function Kata() {
    }
    Kata.opposite = function (n) {
        return -n;
    };
    return Kata;
}());
exports.Kata = Kata;
// TEST CASES
console.log(Kata.opposite(1));
// BEST SOLUTION
// export const even_or_odd = (n:number):string => n % 2 === 0 ? 'Even' : 'Odd';
