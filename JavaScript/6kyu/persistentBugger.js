// Codewars - Andreas Sosilo
// 6 kyu - Persistent Bugger.

/*
Task:
-----
Write a function, persistence, that takes in a positive parameter num and returns its
multiplicative persistence, which is the number of times you must multiply the digits in
num until you reach a single digit.

For example:

 persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
                       // and 4 has only one digit

 persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
                        // 1*2*6 = 12, and finally 1*2 = 2

 persistence(4) === 0 // because 4 is already a one-digit number
*/

function persistence (num) {
  // Change the input number into string
  num = num.toString()
  // Base case
  if (num.length === 1) return 0
  // If digits is more than 1, multiply the digits
  let multiply = 1
  for (let i = 0; i < num.length; i++) {
    multiply *= Number(num[i])
  }
  // Recursion
  return 1 + persistence(multiply)
}

// TEST CASES
console.log(persistence(4)) // 0
console.log(persistence(39)) // 3
