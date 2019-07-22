// Codewars - Andreas Sosilo
// 8 kyu - Even or Odd

/*
Task:
-----
Get ascii value of character

write a function getASCII which inputs a character and returns the
corresponding ascii value for that character. Example : getASCII('A') => 65
*/

function even_or_odd (number) {
  // Check if the input number is even number or odd number using modulus and ternary
  return number % 2 ? 'Odd' : 'Even'
}

// TEST CASES
console.log(even_or_odd(2)) // 'Even'
console.log(even_or_odd(7)) // 'Odd'
