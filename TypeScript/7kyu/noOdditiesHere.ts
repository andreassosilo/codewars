// Codewars - Andreas Sosilo
// 7 kyu - No oddities here

/*
Task:
-----
Write a small function that returns the values of an array that are not odd.

All values in the array will be integers. Return the good values in the order they are given.
*/

export function noOdds(values: number[]): number[] {
  return values.filter((value: number) => value % 2 === 0);
}

// TEST CASES
console.log(noOdds([0, 1])); // [0]
console.log(noOdds([0, 1, 2, 3])); // [0,2])

// BEST SOLUTION
/*
export function noOdds(values: number[]): number[] {
  return values.filter((val: number) => !(val & 1));
}
*/
