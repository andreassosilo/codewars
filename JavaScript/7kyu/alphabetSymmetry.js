'use strict'
// Codewars - Andreas Sosilo
// 7 kyu - Alphabet symmetry

/*
Task:
-----
Consider the word "abode". We can see that the letter a is in position 1 and b is in
position 2. In the alphabet, a and b are also in positions 1 and 2. Notice also that
d and e in abode occupy the positions they would occupy in the alphabet, which are
positions 4 and 5.

Given an array of words, return an array of the number of letters that occupy their
positions in the alphabet for each word. For example,

solve(["abode","ABc","xyzD"]) = [4, 3, 1]
See test cases for more examples.

Input will consist of alphabet characters, both uppercase and lowercase. No spaces.
*/

function solve (arr) {
  const reference = 'abcdefghijklmnopqrstuvwxyz'
  const result = []

  for (const key in arr) {
    let counter = 0
    for (let i = 0; i < arr[key].length; i++) {
      if (arr[key][i].toLowerCase() === reference[i]) counter++
    }
    result.push(counter)
  }

  return result
}

// TEST CASES
console.log(solve(['abode', 'ABc', 'xyzD'])) // [4,3,1]
console.log(solve(['abide', 'ABc', 'xyz'])) // [4,3,0]
console.log(solve(['encode', 'abc', 'xyzD', 'ABmD'])) // [1, 3, 1, 3]
