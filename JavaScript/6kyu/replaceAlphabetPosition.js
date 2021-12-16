'use strict';
// Codewars - Andreas Sosilo
// 6 kyu - Replace With Alphabet Position

/*
Task:
-----
Welcome.

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

Example
alphabetPosition("The sunset sets at twelve o' clock.")
Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" (as a string)
*/

// SOLUTION
const alphabetPosition = (text) => {
  let result = '';
  for (let i = 0; i < text.length; i++) {
    const element = text.toUpperCase().charCodeAt(i);
    if (element > 64 && element < 91) {
      result += element - 64 + ' ';
    }
  }
  return result.slice(0, result.length - 1);
};

// TEST CASES
console.log(alphabetPosition("The sunset sets at twelve o' clock.")); // "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"

// BEST SOLUTION
// let alphabetPosition = (text) => text.toUpperCase().replace(/[^A-Z]/g, '').split('').map(ch => ch.charCodeAt(0) - 64).join(' ');
