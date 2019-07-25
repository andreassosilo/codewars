// Codewars - Andreas Sosilo
// 7 kyu - Disemvowel Trolls

/*
Task:
-----
Trolls are attacking your comment section!
A common way to deal with this situation is to remove all of the vowels from the
trolls' comments, neutralizing the threat.
Your task is to write a function that takes a string and return a new string with all
vowels removed.
For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
Note: for this kata y isn't considered a vowel.
*/

function disemvowel (str) {
  // Using RegEx to get new array that filtered out vowel, then join to get a new string
  return str.match(/[^aeiou]/ig).join('')
}

// BEST SOLUTION
// // Using RegEx and replace() to change the vowel into '' empty string
// return str.replace(/[aeiou]/ig, '')

// TEST CASES
console.log(disemvowel('This website is for losers LOL!')) // 'Ths wbst s fr lsrs LL!'
