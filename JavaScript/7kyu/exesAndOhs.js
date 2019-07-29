// Codewars - Andreas Sosilo
// 7 kyu - Exes and Ohs

/*
Task:
-----
Check to see if a string has the same amount of 'x's and 'o's.
The method must return a boolean and be case insensitive.
The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
*/

function XO (str) {
  // code here
  let countX = 0
  let countO = 0
  // Use loop to check the character in the input string
  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() === 'x') {
      countX++
    } else if (str[i].toLowerCase() === 'o') {
      countO++
    }
  }
  // Return result
  return countX === countO
}

// TEST CASES
console.log(XO('xo')) // true
console.log(XO('xxOo')) // true
console.log(XO('xxxm')) // false
console.log(XO('Oo')) // false
console.log(XO('ooom')) // false
