// Codewars - Andreas Sosilo
// 7 kyu - Square Every Digit

/*
Task:
-----
Welcome. In this kata, you are asked to square every digit of a number.

For example, if we run 9119 through the function, 811181 will come out,
because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer
*/

function squareDigits (num) {
  // Change input number into string and split into array
  let result = num.toString().split('')
  // Do looping to square the value of each digit
  for (let i = 0; i < result.length; i++) {
    result[i] = Math.pow(Number(result[i]), 2)
  }
  return Number(result.join(''))
}

// BEST SOLUTION
// function squareDigits (num) {
//   return Number(('' + num).split('').map(function (val) { return val * val }).join(''))
// }

// TEST CASES
console.log(squareDigits(9119)) // 811181
