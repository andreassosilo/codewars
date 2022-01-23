"use strict";
// Codewars - Andreas Sosilo
// 7 kyu - TypeScript - Alphabetical Addition
exports.__esModule = true;
exports.addLetters = void 0;
/*
Task:
-----
Your task is to add up letters to one letter.

The function will be given a variable amount of arguments, each one being a letter to add.

Notes:
Letters will always be lowercase.
Letters can overflow (see second to last example of the description)
If no letters are given, the function should return 'z'
Examples:
addLetters('a', 'b', 'c') = 'f'
addLetters('a', 'b') = 'c'
addLetters('z') = 'z'
addLetters('z', 'a') = 'a'
addLetters('y', 'c', 'b') = 'd' // notice the letters overflowing
addLetters() = 'z'
*/
var addLetters = function () {
    var letters = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        letters[_i] = arguments[_i];
    }
    return String.fromCharCode((letters.reduce(function (acc, val) { return acc + val.charCodeAt(0) - 96; }, 0) % 26 || 26) +
        96);
};
exports.addLetters = addLetters;
// TEST CASES
console.log((0, exports.addLetters)('a', 'b', 'c')); // 'f'
console.log((0, exports.addLetters)()); // 'z'
