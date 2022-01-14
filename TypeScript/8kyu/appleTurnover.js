"use strict";
// Codewars - Andreas Sosilo
// 8 kyu - Alan Partridge II - Apple Turnover
exports.__esModule = true;
exports.apple = void 0;
/*
Task:
-----
Alan is known for referring to the temperature of the apple turnover as 'Hotter than the sun!'. According to space.com the temperature of the sun's corona is 2,000,000 degrees C, but we will ignore the science for now.

Your job is simple, if (x) squared is more than 1000, return 'It's hotter than the sun!!', else, return 'Help yourself to a honeycomb Yorkie for the glovebox.'.

X will be either a number or a string. Both are valid.
*/
function apple(x) {
    if (typeof x === 'string')
        x = parseInt(x);
    return Math.pow(x, 2) > 1000
        ? "It's hotter than the sun!!"
        : "Help yourself to a honeycomb Yorkie for the glovebox.";
}
exports.apple = apple;
// TEST CASES
console.log(apple('50')); // 'It\'s hotter than the sun!!'
console.log(apple(4)); // 'Help yourself to a honeycomb Yorkie for the glovebox.'
// BEST SOLUTION
/*
export function apple(x: number | string): string {
  return (+x)**2 > 1000 ? 'It\'s hotter than the sun!!' : 'Help yourself to a honeycomb Yorkie for the glovebox.';
}
*/
