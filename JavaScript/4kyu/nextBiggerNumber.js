// Codewars - Andreas Sosilo
// 4 kyu - Next bigger number with the same digits

/*
Task:
-----
You have to create a function that takes a positive integer number and returns the next bigger number formed by the same digits:

12 ==> 21
513 ==> 531
2017 ==> 2071
If no bigger number can be composed using those digits, return -1:

9 ==> -1
111 ==> -1
531 ==> -1
*/

/*
CONCEPT:
========
513 -> 5 1 3 -> 5 3 1 ->531
34453 -> 34 4 53 -> 34 5 43 -> 34 5 34 -> 34534

 [3,4,4,5,3]

 [3,4] [4] [5,3]

 [3,4 [5] [4,3] --> sort

 [3,4] [5] [3,4]

 [3,4,5,3,4]
 */

function nextBigger (n) {
  // Change the input to string and split into array
  let str = n.toString().split('')
  // Create pivot index
  let p = -1
  // Find the pivot -> read number from right to left, until we find a digit that is bigger than previous one
  for (let i = str.length - 1; i > 0; i--) {
    if (Number(str[i]) > Number(str[i - 1])) {
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

  // Find the smallest digit (in the right part) that is larger than the pivot
  let lowest = null
  let lowIndex = null
  for (let i = 0; i < rightArr.length; i++) {
    if (Number(rightArr[i]) > Number(pivot[0])) {
      if (lowest === null || rightArr[i] < lowest) {
        lowest = rightArr[i]
        lowIndex = i
      }
    }
  }

  if (lowIndex === null) {
    return -1
  }

  rightArr.splice(lowIndex, 1)
  rightArr.push(pivot)
  // Reorder the right part
  rightArr.sort()

  let result = +[...str, ...lowest, ...rightArr].join('')
  return result < n ? -1 : result
}

// TEST CASES
console.log(nextBigger(12)) // 21
console.log(nextBigger(2017)) // 2071
console.log(nextBigger(9)) // -1
