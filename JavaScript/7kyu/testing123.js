'use strict';
// Codewars - Andreas Sosilo
// 7 kyu - Testing 1-2-3

/*
Task:
-----
Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

Write a function which takes a list of strings and returns each line prepended by the correct number.

The numbering starts at 1. The format is n: string. Notice the colon and space in between.

Examples:

number([]) // => []
number(["a", "b", "c"]) // => ["1: a", "2: b", "3: c"]
*/

// SOLUTION
const number = (array) =>
  array.length > 0
    ? array.map((element, index) => {
        return `${(index + 1).toString()}: ${element}`;
      })
    : [];

// TEST CASES
console.log(number([])); // []
console.log(number(['a', 'b', 'c'])); // ["1: a", "2: b", "3: c"]

// BEST SOLUTION
// const number = array => array.map((n, i) => `${i + 1}: ${n}`);
