// Codewars
// 5 kyu - First non-repeating character

/*
Task:
-----
Write a function named first_non_repeating_letter that takes a string input, and returns
the first character that is not repeated anywhere in the string.

For example, if given the input 'stress', the function should return 't', since the letter
t only occurs once in the string, and occurs first in the string.

As an added challenge, upper- and lowercase letters are considered the same character, but
the function should return the correct case for the initial letter. For example, the input
'sTreSS' should return 'T'.

If a string contains all repeating characters, it should return an empty string ("") or
None -- see sample tests.
*/

function firstNonRepeatingLetter (s) {
  // Add your code here
  let obj = {}
  let str = s.toLowerCase()

  // Change the array input into object with counter for each char appearance
  for (let i = 0; i < str.length; i++) {
    if (!obj[str[i]]) {
      obj[str[i]] = 1
    } else {
      obj[str[i]] += 1
    }
  }
  // console.log(obj)

  // Check the lowest counter for each key-value pair
  for (let key in obj) {
    if (obj[key] === 1) {
      return s[str.indexOf(key)]
    }
  }
  return ''
}

// TEST CASES
console.log(firstNonRepeatingLetter('a')) // 'a'
console.log(firstNonRepeatingLetter('S,,Tress')) // 'T'
