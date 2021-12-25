'use strict';
// Codewars - Andreas Sosilo
// 6 kyu - Detect Pangram

/*
Task:
-----
A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
*/

// SOLUTION
const isPangram = (string) => {
  let result = true;
  for (let i = 65; i <= 90; i++) {
    if (!string.toUpperCase().includes(String.fromCharCode(i))) {
      return false;
    }
  }
  return result;
};

// TEST CASES
console.log(isPangram('The quick brown fox jumps over the lazy dog.')); // true
console.log(isPangram('This is not a pangram.')); // false

// BEST SOLUTION
// const isPangram = (string) => new Set(string.toLowerCase().replace(/[^a-z]/gi, ``)).size === 26;
