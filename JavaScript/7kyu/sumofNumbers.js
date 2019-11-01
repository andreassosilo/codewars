'use strict'

// Codewars - Andreas Sosilo
// 7 kyu - Beginner Series #3 Sum of Numbers

/*
Task:
-----
Given two integers a and b, which can be positive or negative, find the sum of all the numbers
between including them too and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!
*/

function getSum (a, b) {
  // Check if both integers are same
  if (a === b) return a

  // Check if a > b, sort them accordingly
  if (a > b) {
    const temp = b
    b = a
    a = temp
  }

  let result = a

  // Sum using while-loop
  while (a < b) {
    a++
    result += a
  }
  return result
}

// BEST SOLUTION
// function getSum (a, b) {
//   return (Math.abs(a - b) + 1) * (a + b) / 2
// }

// TEST CASES
console.log(getSum(1, 0)) // 1 + 0 = 1
console.log(getSum(1, 2)) // 1 + 2 = 3
console.log(getSum(0, 1)) // 0 + 1 = 1
console.log(getSum(1, 1)) // 1 Since both are same
console.log(getSum(-1, 0)) // -1 + 0 = -1
console.log(getSum(-1, 2)) // -1 + 0 + 1 + 2 = 2
