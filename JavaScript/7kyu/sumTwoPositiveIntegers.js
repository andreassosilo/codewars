// Codewars - Andreas Sosilo
// 7 kyu - Sum of two lowest positive integers

/*
Task:
-----
Create a function that returns the sum of the two lowest positive numbers given an
array of minimum 4 positive integers. No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455.
*/

// FIRST SOLUTION
function sumTwoSmallestNumbers (numbers) {
  let firstNum = Number.MAX_SAFE_INTEGER
  let secondNum = Number.MAX_SAFE_INTEGER
  for (let value of numbers) {
    if (value < secondNum) secondNum = value
    if (secondNum < firstNum) {
      let temp = firstNum
      firstNum = secondNum
      secondNum = temp
    }
  }
  return firstNum + secondNum
}

// SECOND SOLUTION USING SORT
// function sumTwoSmallestNumbers (numbers) {
//   numbers = numbers.sort(function (a, b) { return a - b })
//   return numbers[0] + numbers[1]
// }

// TEST CASES
console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22])) // 13
console.log(sumTwoSmallestNumbers([23, 71, 33, 82, 1])) // 24
console.log(sumTwoSmallestNumbers([52, 76, 14, 12, 4])) // 16
