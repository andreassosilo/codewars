"use strict";
// Codewars - Andreas Sosilo
// 8 kyu - TypeScript - For Twins: 2. Math operations
exports.__esModule = true;
exports.iceBrickVolume = void 0;
/*
Task:
-----
A magician in the subway showed you a trick, he put an ice brick in a bottle to impress you. The brick's length and width are equal, forming a square; its height may be different. Just for fun and also to impress the magician and people around, you decided to calculate the brick's volume. Write a function iceBrickVolume that will accept these parameters:

radius - bottle's radius (always > 0);
bottleLength - total bottle length (always > 0);
rimLength - length from bottle top to brick (always < bottleLength);
And return volume of ice brick that magician managed to put into a bottle.

illustration

Note:
All inputs are integers. Assume no irregularities to the cuboid brick. You may assume the bottle is shaped like a cylinder. The brick cannot fit inside the rim. The ice brick placed into the bottle is the largest possible cuboid that could actually fit inside the inner volume.

Example 1:
radius = 1
bottle_length = 10
rim_length = 2

volume = 16
*/
var iceBrickVolume = function (radius, bottleLength, rimLength) {
    return Math.round(Math.pow(Math.sqrt(Math.pow(2 * radius, 2) / 2), 2) *
        (bottleLength - rimLength));
};
exports.iceBrickVolume = iceBrickVolume;
// TEST CASES
console.log((0, exports.iceBrickVolume)(1, 10, 2)); // 16
console.log((0, exports.iceBrickVolume)(5, 30, 7)); // 1150
