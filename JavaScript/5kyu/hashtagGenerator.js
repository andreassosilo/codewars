// Codewars - Andreas Sosilo
// 5 kyu - The Hashtag Generator

/*
Task:
-----
The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.
Examples
" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false
*/

function generateHashtag (str) {
  // If the input or the result is an empty string it must return false.
  if (str === '') return false
  // Create a variable to accomodate the result and a flag if it's a first letter
  let result = '#'
  let firstLetter = true

  // Do looping to check each character
  for (let i = 0; i < str.length; i++) {
    // If there is a whitespace, set the flag to true
    if (str[i] === ' ') {
      firstLetter = true
    }
    // If it's a character, save it to the result
    if (str[i] !== ' ' && firstLetter) {
      result += str[i].toUpperCase()
      firstLetter = false
    } else if (str[i] !== ' ' && !firstLetter) {
      result += str[i]
      firstLetter = false
    }
  }
  // If the length of the result string is more than 140 chars or empty string, return false
  if (result.length > 140) return false
  if (result === '#') return false

  return result
}

// TEST CASES
console.log(generateHashtag('')) // false
console.log(generateHashtag('Do We have A Hashtag')) // '#DoWeHaveAHashtag'
