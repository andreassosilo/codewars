"use strict";
// Codewars - Andreas Sosilo
// 7 kyu - TypeScript - Collision Detection
exports.__esModule = true;
exports.collision = void 0;
/*
Task:
-----
Create a function to determine whether or not two circles are colliding. You will be given the position of both circles in addition to their radii:

function collision(x1, y1, radius1, x2, y2, radius2) {
  // collision?
}
If a collision is detected, return true. If not, return false.

Here's a geometric diagram of what the circles passed in represent:
*/
function collision(x1, y1, r1, x2, y2, r2) {
    var x = x2 - x1;
    var y = y2 - y1;
    return Math.sqrt(x * x + y * y) < r1 + r2;
}
exports.collision = collision;
// TEST CASES
console.log(collision(1, 1, 1, 1.1, 1.1, 0.1)); // true
console.log(collision(1, 1, 0.01, 1, 1.1, 0.01)); // false
// BEST SOLUTION
// export function collision(x1: number, y1: number, r1: number, x2: number, y2: number, r2: number):boolean {
//   return Math.hypot(x2 - x1, y2 - y1) <= r1 + r2
// }
