// Codewars - Andreas Sosilo
// 7 kyu - Sum of odd numbers

/*
Task:
-----
Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
Calculate the row sums of this triangle from the row index (starting at index 1) e.g.:

rowSumOddNumbers(1); // 1
rowSumOddNumbers(2); // 3 + 5 = 8
*/

export function rowSumOddNumbers(n: number) {
  // n * (n-1) + 1
  let startNumber: number = n * (n - 1) + 1;
  let rowArr: number[] = [startNumber];
  for (let i = 0; i < n - 1; i++) {
    rowArr.push(rowArr[i] + 2);
  }
  return rowArr.reduce((sum, value) => sum + value, 0);
}

// TEST CASES
console.log(rowSumOddNumbers(2)); // 8
console.log(rowSumOddNumbers(13)); // 2197

// BEST SOLUTION
/*
export function rowSumOddNumbers(n: number) {
  return Math.pow(n, 3);
}
*/
