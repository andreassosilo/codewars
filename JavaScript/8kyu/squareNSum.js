// Codewars
// 8 kyu - Square(n) Sum

/*
Task:
-----
Complete the square sum function so that it squares each number passed
into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.
*/

function squareSum (numbers) {
  let result = 0
  for (let i = 0; i < numbers.length; i++) {
    result += Math.pow(numbers[i], 2)
  }
  return result
}

// TEST CASES
console.log(squareSum([1, 2])) // 5
console.log(squareSum([0, 3, 4, 5])) // 50
