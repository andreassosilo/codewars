// Codewars - Andreas Sosilo
// 7 kyu - TypeScript - Integer Difference

/*
Task:
-----
Write a function that accepts two arguments: an array/list of integers and another integer (n).

Determine the number of times where two integers in the array have a difference of n.

For example:

[1, 1, 5, 6, 9, 16, 27], n=4  -->  3  # (1,5), (1,5), (5,9)
[1, 1, 3, 3], n=2             -->  4  # (1,3), (1,3), (1,3), (1,3)
*/

export const intDiff = (arr: number[], n: number): number => {
  let counter: number = 0;
  arr.forEach((el, index) => {
    for (let i: number = index + 1; i < arr.length; i++) {
      if (Math.abs(arr[i] - el) === n) counter++;
    }
  });
  return counter;
};

// TEST CASES
console.log(intDiff([1, 1, 5, 6, 9, 16, 27], 4)); // 3
console.log(intDiff([1, 1, 3, 3], 2)); // 4
