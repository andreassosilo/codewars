// Codewars - Andreas Sosilo
// 8 kyu - Even or Odd

/*
Task:
-----
Create a function (or write a script in Shell) that takes an integer as an
argument and returns "Even" for even numbers or "Odd" for odd numbers.
*/

function evenOrOdd (number) {
  // Check if the input number is even number or odd number using modulus and ternary
  return number % 2 ? 'Odd' : 'Even'
}

// TEST CASES
console.log(evenOrOdd(2)) // 'Even'
console.log(evenOrOdd(7)) // 'Odd'
