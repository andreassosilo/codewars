// Codewars - Andreas Sosilo
// 7 kyu - TypeScript - Simple beads count

/*
Task:
-----
Two red beads are placed between every two blue beads. There are N blue beads. After looking at the arrangement below work out the number of red beads.

@ @@ @ @@ @ @@ @ @@ @ @@ @

Implement count_red_beads(n) (in PHP count_red_beads($n); in Java, Javascript, TypeScript, C, C++ countRedBeads(n)) so that it returns the number of red beads.
If there are less than 2 blue beads return 0.
*/

export function countRedBeads(n: number): number {
  return n < 2 ? 0 : 2 * (n - 1);
}

// TEST CASES
console.log(countRedBeads(1)); // 0
console.log(countRedBeads(3)); // 4
console.log(countRedBeads(5)); // 8

// BEST SOLUTION
// export const countRedBeads = (n: number): number => (n < 2 ? 0 : (n - 1) * 2);
