// Codewars
// 5 kyu - Valid Parentheses

/*
Task:
-----
Write a function called that takes a string of parentheses, and determines
if the order of the parentheses is valid. The function should return true
if the string is valid, and false if it's invalid.

Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true

Constraints
0 <= input.length <= 100
*/

function validParentheses (parens) {
  // Constraints -> 0 <= input.length <= 100
  if (parens.length < 0 || parens.length > 100) return false
  // Check if the first parentheses is valid
  if (parens[0] === ')' && parens.length === 1) return false
  // Start checking the input parentheses
  let counter = 0
  for (let i = 0; i < parens.length; i++) {
    // Add counter >= 0 because if counter is minus, it means it's missing an opening parentheses.
    if (parens[i] === '(' && counter >= 0) counter++
    if (parens[i] === ')') counter--
  }
  return counter === 0
}

// TEST CASES
console.log(validParentheses('()')) // true
console.log(validParentheses('())')) // false
