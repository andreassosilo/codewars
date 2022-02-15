"use strict";
// Codewars - Andreas Sosilo
// 7 kyu - TypeScript - Billiards triangle
exports.__esModule = true;
exports.pyramid = void 0;
/*
Task:
-----
Remember the triangle of balls in billiards? To build a classic triangle (5 levels) you need 15 balls. With 3 balls you can build a 2-level triangle, etc.

For more examples,

pyramid(1) == 1

pyramid(3) == 2

pyramid(6) == 3

pyramid(10) == 4

pyramid(15) == 5
Write a function that takes number of balls (≥ 1) and calculates how many levels you can build a triangle.
*/
function pyramid(balls) {
    var level = 0;
    while (balls > level) {
        level += 1;
        balls -= level;
    }
    return level;
}
exports.pyramid = pyramid;
// TEST CASES
console.log(pyramid(1)); // 1
console.log(pyramid(100)); // 13
console.log(pyramid(2211)); // 66
console.log(pyramid(9999)); // 140
