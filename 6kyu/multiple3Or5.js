// Codewars
// 6 kyu - Multiples of 3 or 5

/*
Task:
-----
If we list all the natural numbers below 10 that are multiples of 3 or 5,
we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5
below the number passed in.

Note: If the number is a multiple of both 3 and 5, only count it once.
*/

function solution (number) {
  // Create a variable to accomodate the sum of all the multiples of 3 or 5
  let sum = 0
  // Loop to check each number starting from 3 until before 'number'
  for (let i = 3; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i
      // console.log(`i: ${i}, sum: ${sum}`)
    }
  }
  return sum
}

// TEST CASES
console.log(solution(20)) // 3,5,6,9,10,12,15,18 = 78
