// Codewars - Andreas Sosilo
// 7 kyu - TypeScript - Build a square

/*
Task:
-----
I will give you an integer. Give me back a shape that is as long and wide as the integer. The integer will be a whole number between 1 and 50.

Example
n = 3, so I expect a 3x3 square back just like below as a string:

+++
+++
+++
*/

export function generateShape(int: number): string {
  let result = '';
  for (let row = 1; row <= int; row++) {
    for (let column = 1; column <= int; column++) {
      result += `+`;
    }
    if (row !== int) result += `\n`;
  }
  return result;
}

// TEST CASES
console.log(generateShape(1)); // '+'
console.log(generateShape(3)); // '+++\n+++\n+++'

// BEST SOLUTION
// export function generateShape(int: number): string {
//   return `${"+".repeat(int)}\n`.repeat(int).slice(0, -1);
// }
