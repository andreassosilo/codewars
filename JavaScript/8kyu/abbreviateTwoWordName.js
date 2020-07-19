"use strict";
// Codewars - Andreas Sosilo
// 8 kyu - Abbreviate a Two Word Name

/*
Task:
-----
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

Patrick Feeney => P.F
*/

function abbrevName(name) {
  return name.trim().split(' ').map(e => e.substr(0, 1)).join('.').toUpperCase();
}

// TEST CASES
console.log(abbrevName('Sam Harris')); // 'S.H'
console.log(abbrevName("P Favuzzi")); // 'P.F'
