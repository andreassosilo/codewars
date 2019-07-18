// Codewars
// 7 kyu - Case Swapping

/*
Task:
-----
Given a string, swap the case for each of the letters.
e.g. CodEwArs --> cODeWaRS
*/

function swap (str) {
  let newString = ''
  for (let i = 0; i < str.length; i++) {
    let temp = str[i]
    if (temp === temp.toUpperCase()) {
      newString += temp.toLowerCase()
    } else if (temp === temp.toLowerCase()) {
      newString += temp.toUpperCase()
    } else {
      newString += temp
    }
  }
  return newString
}

// TEST CASES
console.log(swap('')) // ""
console.log(swap('CodeWars')) // "cODEwARS"
console.log(swap('abc')) // "ABC"
console.log(swap('ABC')) // "abc"
console.log(swap('123235')) // "123235"
