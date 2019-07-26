// Codewars - Andreas Sosilo
// 4 kyu - Next smaller number with the same digits

/*
Task:
-----
Write a function that takes a positive integer and returns the next smaller positive
integer containing the same digits.

For example:

nextSmaller(21) == 12
nextSmaller(531) == 513
nextSmaller(2071) == 2017
Return -1 (for Haskell: return Nothing), when there is no smaller number that contains
the same digits. Also return -1 when the next smaller number with the same digits would
require the leading digit to be zero.

nextSmaller(9) == -1
nextSmaller(111) == -1
nextSmaller(135) == -1
nextSmaller(1027) == -1 // 0721 is out since we don't write numbers with leading zeros
some tests will include very large numbers.
test data only employs positive integers
*/

/*
CONCEPT:
========
513 -> 5 13 -> 5 31 -> 3 15 -> 3 51 (sort biggest) -> 351
34453 -> 34 4 53 -> 34 5 43 -> 34 5 34 -> 34534

 [3,4,4,5,3]

 [3,4,4] [5] [3]

 [3,4,4] [3] [5] --> sort

 [3,4,4,3,5]
 */

function nextSmaller (n) {
  // Change the input to string and split into array
  let str = n.toString().split('')
  // Create pivot index
  let p = -1
  // Find the pivot -> read number from right to left, until we find a digit that is bigger than previous one
  for (let i = str.length - 1; i > 0; i--) {
    if (Number(str[i]) < Number(str[i - 1])) {
      p = i - 1
      break
    }
  }
  // If we are unable to find the pivot, return -1
  if (p === -1) {
    return p
  }
  // Splice the array -> for right array and pivot array
  let rightArr = str.splice(p)
  let pivot = rightArr.splice(0, 1)
  //   console.log('str')
  //   console.log(str)
  //   console.log('right')
  //   console.log(rightArr)
  //   console.log('pivot')
  //   console.log(pivot)

  // Find the biggest digit (in the right part) that is smaller than the pivot
  let highest = null
  let highIndex = null
  for (let i = 0; i < rightArr.length; i++) {
    if (Number(rightArr[i]) < Number(pivot[0])) {
      if (highest === null || rightArr[i] > highest) {
        highest = rightArr[i]
        highIndex = i
      }
    }
  }
  //   console.log('highest')
  //   console.log(highest)
  if (highIndex === null) {
    return -1
  }

  rightArr.splice(highIndex, 1)
  rightArr.push(pivot)
  //   console.log('rightArrAfter')
  //   console.log(rightArr)

  // Reorder the right part, from biggest to lowest
  rightArr.sort((a, b) => b - a)
  //   console.log('rightArrSort')
  //   console.log(rightArr)

  // Join the array to the new array result
  let result = [...str, ...highest, ...rightArr].join('')
  // If the first index is 0, return -1
  if (Number(result[0]) === 0) {
    return -1
  }
  //   console.log('result')
  //   console.log(result)
  return Number(result) > n ? -1 : Number(result)
}

// TEST CASES
console.log(nextSmaller(414)) // 144
console.log(nextSmaller(1027)) // -1
console.log(nextSmaller(9)) // -1
console.log(nextSmaller(907)) // 790

/*
907
9 07
9 70
7 90
790
*/
