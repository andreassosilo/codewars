'use strict';
// Codewars - Andreas Sosilo
// 7 kyu - Fizz Buzz

/*
Task:
-----
Return an array containing the numbers from 1 to N, where N is the parametered value.

Replace certain values however if any of the following conditions are met:

If the value is a multiple of 3: use the value "Fizz" instead
If the value is a multiple of 5: use the value "Buzz" instead
If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
N will never be less than 1.

Method calling example:

fizzbuzz(3) -->  [1, 2, "Fizz"]
*/

// SOLUTION
const fizzbuzz = (n) => {
  let result = [];
  for (let index = 1; index <= n; index++) {
    let value = index;
    if (index % 3 === 0 && index % 5 === 0) {
      value = 'FizzBuzz';
    } else if (index % 3 === 0) {
      value = 'Fizz';
    } else if (index % 5 === 0) {
      value = 'Buzz';
    }
    result.push(value);
  }
  return result;
};

// TEST CASES
console.log(fizzbuzz(3)); // [1, 2, "Fizz"]
