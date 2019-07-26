// Codewars
// 7 kyu - Find the divisors!

/*
Task:
-----
Create a function named "divisors" that takes an integer n > 1 and returns
an array with all of the integer's divisors(except for 1 and the number itself),
from smallest to largest. If the number is prime return the string '(integer) is prime'
(null in C#) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).
*/

function divisors (integer) {
  var result = []
  for (var i = 2; i <= Math.floor(integer / 2); ++i) {
    if (integer % i === 0) result.push(i)
  }
  return result.length ? result : integer + ' is prime'
}

// TEST CASES
console.log(divisors(12)) // should return [2,3,4,6]
console.log(divisors(25)) // should return [5]
console.log(divisors(13)) // should return "13 is prime"
