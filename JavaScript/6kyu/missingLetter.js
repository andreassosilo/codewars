// Codewars
// 6 kyu - Find the missing letter

/*
Task:
-----
Write a method that takes an array of consecutive (increasing)
letters as input and that returns the missing letter in the array.

You will always get an valid array. And it will be always exactly one
letter be missing. The length of the array will always be at least 2.
The array will always contain letters in only one case.

Example:
--------
['a','b','c','d','f'] -> 'e'
['O','Q','R','S'] -> 'P'
(Use the English alphabet with 26 letters!)
*/

function findMissingLetter (array) {
  let start = array[0].charCodeAt(0)
  let finish = array[array.length - 1].charCodeAt(0)
  let counter = 0
  for (let i = start; i < finish; i++) {
    if (i !== array[counter].charCodeAt(0)) {
      return String.fromCharCode(i)
    }
    counter++
  }
  return 'No missing letter or invalid input'
}

// TEST CASES
console.log(findMissingLetter(['a', 'b', 'c', 'd', 'f'])) // 'e'
console.log(findMissingLetter(['O', 'Q', 'R', 'S'])) // 'P'
