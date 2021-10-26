// Codewars - Andreas Sosilo
// 8 kyu - Reversed Strings

/*
Task:
-----
Complete the solution so that it reverses the string value passed into it.

solution('world'); // returns 'dlrow'
*/

function solution (str) {
  // Using split(), reverse() and join() built-in function
  return str.split('').reverse().join('')
}

// TEST CASES
console.log(solution('world')) // 'dlrow'
