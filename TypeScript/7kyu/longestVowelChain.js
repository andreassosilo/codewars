"use strict";
// Codewars - Andreas Sosilo
// 7 kyu - TypeScript - Longest vowel chain
exports.__esModule = true;
exports.solve = void 0;
/*
Task:
-----
The vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a length of 2. Given a lowercase string that has alphabetic characters only (both vowels and consonants) and no spaces, return the length of the longest vowel substring. Vowels are any of aeiou.

Good luck!
*/
function solve(s) {
    var longest = 0;
    var counter = 0;
    var dictionary = ['a', 'i', 'u', 'e', 'o'];
    for (var index = 0; index < s.length; index++) {
        if (dictionary.includes(s[index])) {
            counter += 1;
        }
        else {
            if (counter > longest) {
                longest = counter;
            }
            counter = 0;
        }
    }
    return longest;
}
exports.solve = solve;
// TEST CASES
console.log(solve('codewarriors')); // 2
console.log(solve('chrononhotonthuooaos')); // 5
