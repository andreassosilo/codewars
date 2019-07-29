// Codewars
// 8 kyu - Convert boolean values to strings 'Yes' or 'No'

/*
Task:
-----
Complete the method that takes a boolean value and return a "Yes" string for true,
or a "No" string for false.
*/

function boolToWord (bool) {
  // Using ternary to return message 'Yes' or 'No'
  return bool ? 'Yes' : 'No'
}

// TEST CASES
console.log(boolToWord(true)) // 'Yes'
console.log(boolToWord(false)) // 'No'
