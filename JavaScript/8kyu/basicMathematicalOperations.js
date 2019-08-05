// Codewars - Andreas Sosilo
// 8 kyu - Basic Mathematical Operations

/*
Task:
-----
Your task is to create a function that does four basic mathematical operations.

The function should take three arguments - operation(string/char), value1(number),
value2(number).

The function should return result of numbers after applying the chosen operation.

Examples:

basicOp('+', 4, 7)         // Output: 11
basicOp('-', 15, 18)       // Output: -3
basicOp('*', 5, 5)         // Output: 25
basicOp('/', 49, 7)        // Output: 7
*/

function basicOp (operation, value1, value2) {
  // Using ternary
  return operation === '+' ? value1 + value2
    : operation === '-' ? value1 - value2
      : operation === '*' ? value1 * value2
        : operation === '/' ? value1 / value2 : 'Wrong Operation'
}

// BEST SOLUTION
// The eval() function evaluates JavaScript code represented as a string
// function basicOp (o, a, b) {
//   return eval(a + o + b)
// }

// TEST CASES
console.log(basicOp('+', 4, 7)) // 11
console.log(basicOp('-', 15, 18)) // -3
console.log(basicOp('*', 5, 5)) // 25
console.log(basicOp('/', 49, 7)) // 7
