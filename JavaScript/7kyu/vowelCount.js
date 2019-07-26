// Codewars - Andreas Sosilo
// 7 kyu - Vowel Count

/*
Task:
-----
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, and u as vowels for this Kata.

The input string will only consist of lower case letters and/or spaces.
*/

function getCount (str) {
  // Using regex find the match vowel in the input string, return the length of the output array
  return (str.match(/[aeiou]/ig) || []).length
}

// SOLUTION WITHOUT REGEX
// function getCount (str) {
//   let vowelsCount = 0
//   // Check for each alphabet in the input string, if it's vowel -> if yes, increment counter
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
//       vowelsCount++
//     }
//   }
//   return vowelsCount
// }

// TEST CASES
console.log(getCount('abracadabra')) // 5
