// Codewars
// 6 kyu - Find the odd int

/*
Task:
-----
Given an array, find the int that appears an odd number of times.

There will always be only one integer that appears an odd number of times.
*/

function findOdd (arr) {
  // Check each number in the array to find the same number occurences
  for (let i = 0; i < arr.length; i++) {
    let counter = 0
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        counter++
      }
    }
    // If the appearance of that number is odd, return that number
    if (counter % 2 !== 0) {
      return arr[i]
    }
  }
  return 'There is no integer that apperas an odd number of times'
}

// TEST CASES
console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5])) // 5
console.log(findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1])) // 10
