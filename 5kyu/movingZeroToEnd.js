// Codewars
// 5 kyu - Moving Zeros To The End

/*
Task:
-----
Write an algorithm that takes an array and moves all of the zeros to the end,
preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
*/

var moveZeros = function (arr) {
  // Use array.filter() to get an array with element other than 0
  // Use another array.filter() to get an array with zeros only
  // Use array.concat() to combine these two arrays
  return arr.filter(arr => arr !== 0).concat(arr.filter(arr => arr === 0))
}

// TEST CASES
console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1])) // [1,2,1,1,3,1,0,0,0,0]
