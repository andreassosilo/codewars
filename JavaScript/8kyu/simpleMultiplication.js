// Codewars
// 8 kyu - Simple Multiplication

/*
Task:
-----
This kata is about multiplying a given number by eight
if it is an even number and by nine otherwise.
*/

function simpleMultiplication (number) {
  return number % 2 === 0 ? number * 8 : number * 9
}

// TEST CASES
console.log(simpleMultiplication(1))
console.log(simpleMultiplication(2))
