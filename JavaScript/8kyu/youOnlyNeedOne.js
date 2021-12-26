'use strict';
// Codewars - Andreas Sosilo
// 8 kyu - You only need one - Beginner

/*
Task:
-----
You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

Array can contain numbers or strings. X can be either.

Return true if the array contains the value, false if not.
*/

// SOLUTION
const check = (a, x) => a.includes(x);

// TEST CASES
console.log(check([66, 101], 66)); // true
console.log(check(['what', 'a', 'great', 'kata'], 'kat')); // false
