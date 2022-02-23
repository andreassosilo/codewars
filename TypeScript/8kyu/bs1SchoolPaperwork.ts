// Codewars - Andreas Sosilo
// 8 kyu - TypeScript - Beginner Series #1 School Paperwork

/*
Task:
-----
Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

Example:
n= 5, m=5: 25
n=-5, m=5:  0
*/

export function paperwork(n: number, m: number): number {
  return n < 0 || m < 0 ? 0 : n * m;
}

// TEST CASES
console.log(paperwork(5, 5)); // 25
console.log(paperwork(5, -5)); // 0
