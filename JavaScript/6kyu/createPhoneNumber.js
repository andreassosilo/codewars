// Codewars - Andreas Sosilo
// 6 kyu - Create Phone Number

/*
Task:
-----
Write a function that accepts an array of 10 integers (between 0 and 9),
that returns a string of those numbers in the form of a phone number.

Example:
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
*/

function createPhoneNumber (numbers) {
  // Exception handling
  if (numbers.length !== 10) return `Wrong input! Should be 10 digits of integer.`
  // Join the array into a string
  numbers = numbers.join('')
  let result = `(${numbers.slice(0, 3)}) ${numbers.slice(3, 6)}-${numbers.slice(6)}`
  return result
}

// TEST CASES
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])) //  '(123) 456-7890'
