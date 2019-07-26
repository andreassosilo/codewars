// Codewars
// 6 kyu - Find the unique number

/*
Task:
-----
There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains more than 3 numbers.

The tests contain some very huge arrays, so think about performance.
*/

function findUniq (arr) {
  let duplicate = arr[0]
  if (duplicate !== arr[1] && duplicate !== arr[2]) {
    return duplicate
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== duplicate) {
      return arr[i]
    }
  }
}

// TEST CASES
console.log(findUniq([ 1, 1, 1, 2, 1, 1 ])) // 2
console.log(findUniq([ 0, 0, 0.55, 0, 0 ])) // 0.55
