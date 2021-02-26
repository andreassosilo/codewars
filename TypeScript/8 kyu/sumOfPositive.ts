// Codewars - Andreas Sosilo
// 8 kyu - Sum of positive

/*
Task:
-----
You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.
*/

export function positiveSum(arr: number[]): number {
  let sum: number = 0;
  for (const i of arr) {
    if (i > 0) {
      sum += i;
    }
  }
  return sum;
}

// TEST CASES
console.log(positiveSum([1, 2, 3, 4, 5]));

// BEST SOLUTION
/*
export function positiveSum(arr: number[]): number {
  return arr.reduce((sum, n) => (n > 0 ? sum + n : sum), 0);
}
*/
