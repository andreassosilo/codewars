// Codewars
// 8 kyu - Remove First and Last Character

/*
Task:
-----
It's pretty straightforward. Your goal is to create a function that removes the
first and last characters of a string. You're given one parameter, the original string.
You don't have to worry with strings with less than two characters.
*/

function removeChar (str) {
  // Using slice(), get the index 1 until before the last index
  return str.slice(1, str.length - 1)
}

// TEST CASES
console.log(removeChar('eloquent')) // 'loquen'
