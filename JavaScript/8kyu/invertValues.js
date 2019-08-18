'use strict'
// Codewars - Andreas Sosilo
// 8 kyu - Invert values

/*
Task:
-----
Given a set of numbers, return the additive inverse of each. Each positive becomes
negatives, and the negatives become positives.

invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == []
You can assume that all values are integers. Do not mutate the input array/list.
*/

function invert (array) {
  if (array.length === 0) return array
  return array.map(element => element === 0 ? 0 : element * (-1))
}

// TEST CASES
console.log(invert([1, -2, 3, -4, 5])) // [-1,2,-3,4,-5]
console.log(invert([])) // []
