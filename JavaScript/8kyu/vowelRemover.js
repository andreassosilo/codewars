'use strict';
// Codewars - Andreas Sosilo
// 8 kyu - Vowel remover

/*
Task:
-----
Create a function called shortcut to remove all the lowercase vowels in a given string.

Examples
"hello"     -->  "hll"
"codewars"  -->  "cdwrs"
"goodbye"   -->  "gdby"
"HELLO"     -->  "HELLO"
Don't worry about uppercase vowels.
*/

// SOLUTION
const shortcut = (string) => string.replace(/[aeiou]/gi, '');

// TEST CASES
console.log(shortcut('hello')); // 'hll'
console.log(shortcut('how are you today?')); // 'hw r y tdy?'
console.log(shortcut('complain')); // 'cmpln'
