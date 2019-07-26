// Codewars
// 7 kyu - Highest and Lowest

/*
Task:
-----
In this little assignment you are given a string of space separated numbers,
and have to return the highest and lowest number.

Example:

highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
Notes:

All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first.
*/

function highAndLow (numbers) {
  // Split the input string into an array first
  numbers = numbers.split(' ')
  // Create a variable to store the result, and assign the first index value as initial
  let high = Number(numbers[0])
  let low = Number(numbers[0])
  // Using for-loop to check each element in the array
  for (let i = 1; i < numbers.length; i++) {
    // If current index value is higher that 'high', set that value to high
    if (Number(numbers[i]) > high) {
      high = Number(numbers[i])
    } else if (numbers[i] < low) { // If current index value is lower that 'lower', set that value to low
      low = Number(numbers[i])
    }
  }
  return `${high.toString()} ${low.toString()}`
}

// BEST SOLUTION
// function highAndLow (numbers) {
//   numbers = numbers.split(' ').map(Number)
//   return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers)
// }

// TEST CASES
console.log(highAndLow('1 2 3 4 5')) // return '5 1'
console.log(highAndLow('1 9 3 4 -5')) // return '9 -5'
