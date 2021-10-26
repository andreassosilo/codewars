// Codewars
// 8 kyu - get ascii value of character

/*
Task:
-----
Get ascii value of character

write a function getASCII which inputs a character and returns the
corresponding ascii value for that character. Example : getASCII('A') => 65
*/

function getASCII (c) {
  return c.charCodeAt(0)
}

// TEST CASES
console.log(getASCII('A')) // '65'
