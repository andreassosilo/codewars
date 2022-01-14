// Codewars - Andreas Sosilo
// 8 kyu - Get the mean of an array

/*
Task:
-----
It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

Return the average of the given array rounded down to its nearest integer.

The array will never be empty.
*/

export function getAverage(marks: number[]): number {
  //TODO : calculate the downwar rounded average of the marks array
  let total: number = 0;
  for (let index = 0; index < marks.length; index++) {
    total += marks[index];
  }
  return Math.floor(total / marks.length);
}

// TEST CASES
console.log(getAverage([2, 2, 2, 2])); // 2
console.log(getAverage([1, 2, 3, 4, 5])); // 3
console.log(getAverage([1, 1, 1, 1, 1, 1, 1, 2])); // 1

// BEST SOLUTION
// export const getAverage = (marks: number[]): number => Math.floor(marks.reduce((acc, it) => acc + it, 0) / marks.length);
