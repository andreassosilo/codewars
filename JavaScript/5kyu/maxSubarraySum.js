// Codewars - Andreas Sosilo
// 5 kyu - Maximum subarray sum

/*
Task:
-----
The maximum sum subarray problem consists in finding the maximum sum of a contiguous
subsequence in an array or list of integers:

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]
Easy case is when the list is made up of only positive numbers and the maximum sum is
the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

Empty list is considered to have zero greatest sum. Note that the empty list or array
is also a valid sublist/subarray.
*/

function maxSequence (arr) {
  let ans = 0
  let sum = 0

  // console.log(ans, sum)
  for (let i = 0; i < arr.length; i++) {
    ans = Math.max(0, ans + arr[i])
    sum = Math.max(sum, ans)
    // console.log(ans, sum, arr[i])
  }
  // console.log(ans, sum)
  return sum
}

// TEST CASES
console.log(maxSequence([])) // 0
console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])) // 6
