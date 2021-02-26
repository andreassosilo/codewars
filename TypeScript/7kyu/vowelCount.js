"use strict";
// Codewars - Andreas Sosilo
// 7 kyu - Vowel Count
exports.__esModule = true;
exports.Kata = void 0;
/*
Task:
-----
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/
var Kata = /** @class */ (function () {
    function Kata() {
    }
    Kata.getCount = function (str) {
        var _this = this;
        return str.split("").filter(function (e) {
            return _this.library.indexOf(e) !== -1;
        }).length;
    };
    Kata.library = ["a", "e", "i", "o", "u"];
    return Kata;
}());
exports.Kata = Kata;
// TEST CASES
console.log(Kata.getCount("abracadabra")); // 5
// BEST SOLUTION
// export const even_or_odd = (n:number):string => n % 2 === 0 ? 'Even' : 'Odd';
