// Codewars - Andreas Sosilo
// 8 kyu - Sum Mixed Array

/*
Task:
-----
Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.
*/

export function sumMix(x: any[]): number {
  return x.reduce((acc, curr) => {
    if (typeof curr !== 'number') curr = parseInt(curr);
    return (acc += curr);
  }, 0);
}

// TEST CASES
console.log(sumMix([9, 3, '7', '3'])); // 22
console.log(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2, '0'])); // 41

// BEST SOLUTION
/*
export function sumMix(x: any[]): number {
    return x.reduce((a, c) => a + +c, 0);
}
*/
