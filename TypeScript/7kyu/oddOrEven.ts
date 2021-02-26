// Codewars - Andreas Sosilo
// 7 kyu - Odd or Even?

/*
Task:
-----
Given a list of integers, determine whether the sum of its elements is odd or even.

Give your answer as a string matching "odd" or "even".

If the input array is empty consider it as: [0] (array with a zero).
*/

export function oddOrEven(array: number[]) {
  if (array.length === 0) return "even";
  return array.reduce((sum, value) => sum + value, 0) % 2 === 0
    ? "even"
    : "odd";
}

// TEST CASES
console.log(oddOrEven([])); // 'even'
console.log(oddOrEven([0, 1, 2])); // 'odd'
