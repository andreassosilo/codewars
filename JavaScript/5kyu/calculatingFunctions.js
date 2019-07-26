// Codewars
// 5 kyu - Calculating with Functions

/*
Task:
-----
This time we want to write calculations using functions and get the results.
Let's have a look at some examples:

JavaScript:
seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3

Requirements:
There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations:
plus, minus, times, dividedBy (divided_by in Ruby)
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function
represents the right operand
Divison should be integer division, e.g eight(dividedBy(three()))/eight(divided_by(three))
should return 2, not 2.666666...
*/

// Create function from zero to nine that return function with argument value (0-9) if true, or return number if false
function zero (operation) { return operation ? operation(0) : 0 }
function one (operation) { return operation ? operation(1) : 1 }
function two (operation) { return operation ? operation(2) : 2 }
function three (operation) { return operation ? operation(3) : 3 }
function four (operation) { return operation ? operation(4) : 4 }
function five (operation) { return operation ? operation(5) : 5 }
function six (operation) { return operation ? operation(6) : 6 }
function seven (operation) { return operation ? operation(7) : 7 }
function eight (operation) { return operation ? operation(8) : 8 }
function nine (operation) { return operation ? operation(9) : 9 }

function plus (num2) {
  return function (num1) {
    return num1 + num2
  }
}

function minus (num2) {
  return function (num1) {
    return num1 - num2
  }
}

function times (num2) {
  return function (num1) {
    return num1 * num2
  }
}

function dividedBy (num2) {
  return function (num1) {
    return num2 === 0 ? 'error: division by 0' : Math.floor(num1 / num2)
  }
}

// TEST CASES
console.log(seven(times(five()))) // 35
console.log(four(plus(nine()))) // 13
console.log(eight(minus(three()))) // 5
console.log(six(dividedBy(two()))) // 3
