"use strict";
// Codewars - Andreas Sosilo
// 7 kyu - TypeScript - Bumps in the Road
exports.__esModule = true;
exports.bump = void 0;
/*
Task:
-----
Your car is old, it breaks easily. The shock absorbers are gone and you think it can handle about 15 more bumps before it dies totally.

Unfortunately for you, your drive is very bumpy! Given a string showing either flat road ("_") or bumps ("n"), work out if you make it home safely. 15 bumps or under, return "Woohoo!", over 15 bumps return "Car Dead".
*/
function bump(x) {
    return x.replace(/_/g, '').length > 15 ? "Car Dead" : "Woohoo!";
}
exports.bump = bump;
// TEST CASES
console.log(bump('_nnnnnnn_n__n______nn__nn_nnn')); // "Car Dead"
console.log(bump('______n___n_')); // "Woohoo!"
