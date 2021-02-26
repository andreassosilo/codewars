// Codewars - Andreas Sosilo
// 8 kyu - Beginner Series #2 Clock

/*
Task:
-----
Clock shows h hours, m minutes and s seconds after midnight.

Your task is to write a function which returns the time since midnight in milliseconds.

Example:
h = 0
m = 1
s = 1

result = 61000
Input constraints:

0 <= h <= 23
0 <= m <= 59
0 <= s <= 59
*/

export function past(h: number, m: number, s: number): number {
  if (h < 0 || h > 23 || m < 0 || m > 59 || s < 0 || s > 59) {
    return 0;
  }

  return (h * 3600 + m * 60 + s) * 1000;
}

// TEST CASES
console.log(past(0, 1, 1)); // 61000
console.log(past(1, 1, 1)); // 3661000
