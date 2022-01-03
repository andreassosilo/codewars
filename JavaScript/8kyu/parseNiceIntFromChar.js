'use strict';
// Codewars - Andreas Sosilo
// 8 kyu - Parse nice int from char problem

/*
Task:
-----
Ask a small girl - "How old are you?". She always says strange things... Lets help her!

For correct answer program should return int from 0 to 9.

Assume test input string always valid and may look like "1 year old" or "5 years old", etc.. The first char is number only.
*/

// SOLUTION
const getAge = (inputString) => parseInt(inputString.replace(/[^0-9]/gi, ''));

// TEST CASES
console.log(getAge('4 years old')); // 4
