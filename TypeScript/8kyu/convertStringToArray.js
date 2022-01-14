'use strict';
// Codewars - Andreas Sosilo
// 8 kyu - JavaScript - Convert a string to an array

/*
Task:
-----
Write a function to split a string and convert it into an array of words. For example:

"Robin Singh" ==> ["Robin", "Singh"]

"I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]
*/

const stringToArray = (string) => string.split(' ');

// TEST CASES
console.log(stringToArray('Robin Singh')); // ["Robin", "Singh"]
console.log(stringToArray('I love arrays they are my favorite')); // ["I", "love", "arrays", "they", "are", "my", "favorite"]
