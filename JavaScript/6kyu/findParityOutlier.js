// Codewars
// 6 kyu - Find The Parity Outlier

/*
Task:
-----
You are given an array (which will have a length of at least 3, but could be very large)
containing integers. The array is either entirely comprised of odd integers or entirely
comprised of even integers except for a single integer N. Write a method that takes the
array as an argument and returns this "outlier" N.

Examples
[2, 4, 0, 100, 4, 11, 2602, 36]
Should return: 11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21]
Should return: 160 (the only even number)
*/

function findOutlier (integers) {
  // Using filter(), find the even number integer
  let evenArr = integers.filter(function (num) {
    return num % 2 === 0
  })
  // Using filter(), find the odd number integer
  let oddArr = integers.filter(function (num) {
    return num % 2 !== 0
  })
  // Check if the filtered array has more element in even or odd array
  if (evenArr.length === 1) {
    return evenArr[0]
  } else {
    return oddArr[0]
  }
}

// TEST CASES
console.log(findOutlier([0, 1, 2])) // 1
console.log(findOutlier([2, 6, 8, 10, 3])) // 3
