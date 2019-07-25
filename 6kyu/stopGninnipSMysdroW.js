// Codewars - Andreas Sosilo
// 6 kyu - Stop gninnipS My sdroW!

/*
Task:
-----
Write a function that takes in a string of one or more words, and returns the same string,
but with all five or more letter words reversed (Just like the name of this Kata). Strings
passed in will consist of only letters and spaces. Spaces will be included only when more
than one word is present.

Examples:

spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test")
=> returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"
*/

function spinWords (str) {
  // First split the string input into an array that contains each words
  str = str.split(' ')
  // Do looping to check the length of each word
  for (let i = 0; i < str.length; i++) {
    // If the length is equal or greater than 5, do reverse the word
    if (str[i].length >= 5) {
      str[i] = str[i].split('').reverse().join('')
    }
  }
  // Return the joined words
  return str.join(' ')
}

// TEST CASES
console.log(spinWords('Welcome')) // 'emocleW'
console.log(spinWords('Hey fellow warriors')) // 'Hey wollef sroirraw'
