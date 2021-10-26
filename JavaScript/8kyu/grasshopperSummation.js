// Codewars - Andreas Sosilo
// 8 kyu - Grasshopper - Summation

/*
Task:
-----
Write a program that finds the summation of every number from 1 to num.
The number will always be a positive integer greater than 0.

For example:

summation(2) -> 3
1 + 2

summation(8) -> 36
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8
*/

let summation = function (num) {
  // Using for-loop, add every number from 1 to input num
  let sum = 0
  for (let i = 1; i <= num; i++) {
    sum += i
  }
  return sum
}

// BEST SOLUTION
// const summation = n => n * (n + 1) / 2

// TEST CASES
console.log(summation(8)) // 36
