// Codewars - Andreas Sosilo
// 8 kyu - TypeScript - Filling an array (part 1)

/*
Task:
-----
We want an array, but not just any old array, an array with contents!

Write a function that produces an array with the numbers 0 to N-1 in it.

For example, the following code will result in an array containing the numbers 0 to 4:

arr(5) // => [0,1,2,3,4]
Note: The parameter is optional. So you have to give it a default value.
*/

export const arr = (n: number = 0): number[] => {
  let result: number[] = [];
  for (let index = 0; index < n; index++) {
    result.push(index);
  }
  return result;
};

// TEST CASES
console.log(arr(4)); // [0,1,2,3]
console.log(arr()); // []

// BEST SOLUTION
// export const arr = (n: number = 0): number[] => [...Array(n).keys()];
