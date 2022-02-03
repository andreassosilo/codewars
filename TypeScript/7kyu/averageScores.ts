// Codewars - Andreas Sosilo
// 7 kyu - TypeScript - Average Scores

/*
Task:
-----
Create a function that returns the average of an array of numbers ("scores"), rounded to the nearest whole number. You are not allowed to use any loops (including for, for/in, while, and do/while loops).
*/

export function average(scores: number[]): number {
  return Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
}

// TEST CASES
console.log(average([49, 3, 5, 300, 7])); // 73
console.log(average([90, 98, 89, 100, 100, 86, 94])); // 94
