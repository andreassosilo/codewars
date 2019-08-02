// Codewars - Andreas Sosilo
// 8 kyu - Remove String Spaces

/*
Task:
-----
Simple, remove the spaces from the string, then return the resultant string.
*/

function noSpace (x) {
  // Use built-in function split() to remove the space and join() to join back into string
  return x.split(' ').join('')
}

// SOLUTION USING REGEX
// function noSpace (x) {
//   return x.replace(/\s/g, '')
// }

// TEST CASES
console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B')) // '8j8mBliB8gimjB8B8jlB'
console.log(noSpace('8aaaaa dddd r     ')) // '8aaaaaddddr'
