// Codewars - Andreas Sosilo
// 6 kyu - Array.diff

/*
Task:
-----
Your goal in this kata is to implement a difference function, which subtracts one list
from another and returns the result.

It should remove all values from list a, which are present in list b.

array_diff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

array_diff([1,2,2,2,3],[2]) == [1,3]
*/

function array_diff (a, b) {
  // If input length is 0 for a or b, return 'a' array value
  if (a.length === 0 || b.length === 0) return a
  let result = []
  // Do looping to check the occurence of b elements in a array
  for (let i = 0; i < a.length; i++) {
    let isNotOccur = true
    for (let j = 0; j < b.length; j++) {
      if (a[i] === b[j]) {
        isNotOccur = false
      }
    }
    if (isNotOccur) result.push(a[i])
  }
  return result
}

// BEST SOLUTION
// function array_diff (a, b) {
//   return a.filter(e => !b.includes(e))
// }

// TEST CASES
console.log(array_diff([], [4, 5])) // []
console.log(array_diff([3, 4], [3])) // [4]
console.log(array_diff([1, 2, 2], [2])) // [1]
