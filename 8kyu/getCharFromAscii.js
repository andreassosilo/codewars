// Codewars
// 8 kyu - get character from ASCII Value

/*
Task:
-----
Get ascii value of character

write a function getASCII which inputs a character and returns the
corresponding ascii value for that character. Example : getASCII('A') => 65
*/

function getChar (c) {
  return String.fromCharCode(c)
}

// TEST CASES
console.log(getChar(55)) // '7'
