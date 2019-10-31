'use strict'

// Codewars - Andreas Sosilo
// 7 kyu - Is this a triangle?

/*
Task:
-----
Implement a method that accepts 3 integer values a, b, c. The method should return true if a
triangle can be built with the sides of given length and false in any other case.

(In this case, all triangles must have surface greater than 0 to be accepted).
*/

const isTriangle = (a, b, c) => {
  if (a === 0 || b === 0 || c === 0) {
    return false
  } else if (a + b <= c || a + c <= b || c + b <= a) {
    return false
  }

  return true
}

// TEST CASES
console.log(isTriangle(1, 2, 2)) // true
console.log(isTriangle(7, 2, 2)) // false
