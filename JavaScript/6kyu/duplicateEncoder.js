'use strict'
// Codewars - Andreas Sosilo
// 6 kyu - Find the odd int

/*
Task:
-----
The goal of this exercise is to convert a string to a new string where each character in
the new string is "(" if that character appears only once in the original string, or ")"
if that character appears more than once in the original string. Ignore capitalization
when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))(("
*/

function duplicateEncode (word) {
  // Scan first to get the result object that contained the number of char appearance
  const result = {}
  let newWord = ''
  for (let i = 0; i < word.length; i++) {
    if (result[(word[i]).toLowerCase()] === undefined) {
      result[(word[i]).toLowerCase()] = 1
    } else {
      result[(word[i]).toLowerCase()]++
    }
  }
  // Change the char according to the number of appearance
  for (let j = 0; j < word.length; j++) {
    for (const key in result) {
      if (result[(word[j]).toLowerCase()] > 1 && key === word[j].toLowerCase()) {
        newWord += ')'
      } else if (result[(word[j]).toLowerCase()] === 1 && key === word[j].toLowerCase()) {
        newWord += '('
      }
    }
  }
  return newWord
}

// BEST SOLUTION
// function duplicateEncode (word) {
//   word = word.toLowerCase()
//   return word.replace(/./g, m => word.indexOf(m) === word.lastIndexOf(m) ? '(' : ')')
// }

// TEST CASES
console.log(duplicateEncode('din')) // '((('
console.log(duplicateEncode('Success')) // ')())())'
