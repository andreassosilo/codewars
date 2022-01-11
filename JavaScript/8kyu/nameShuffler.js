'use strict';
// Codewars - Andreas Sosilo
// 8 kyu - Name Shuffler

/*
Task:
-----
Write a function that returns a string in which firstname is swapped with last name.

nameShuffler('john McClane'); => "McClane john"
*/

// SOLUTION
const nameShuffler = (str) => str.split(' ').reverse().join(' ');

// TEST CASES
console.log(nameShuffler('john McClane')); // 'McClane john'
