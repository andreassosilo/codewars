// Codewars - Andreas Sosilo
// 8 kyu - Count of positives / sum of negatives

/*
Task:
-----
Given an array of integers.

Return an array, where the first element is the count of positives numbers and the
second element is sum of negative numbers.

If the input array is empty or null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should
return [10, -65].
*/

function countPositivesSumNegatives (input) {
  if (input === null || input.length === 0) return []
  // Create variables for positive counter and sum of negatives
  let posCount = 0
  let sumNegatives = 0
  // Using for-of loop to check the input array
  for (let key in input) {
    if (input[key] > 0) posCount++
    if (input[key] < 0) sumNegatives += input[key]
  }
  return [posCount, sumNegatives]
}

// TEST CASES
const testData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]
console.log(countPositivesSumNegatives(testData)) // [10, -65]
