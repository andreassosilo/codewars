// Codewars - Andreas Sosilo
// 8 kyu - TypeScript - Find the position!

/*
Task:
-----
When provided with a letter, return its position in the alphabet.

Input :: "a"

Output :: "Position of alphabet: 1"
*/

export function position(alphabet: string): string {
  return `Position of alphabet: ${alphabet.charCodeAt(0) - 96}`;
}

// TEST CASES
console.log(position('a')); //"Position of alphabet: 1"
console.log(position('z')); // "Position of alphabet: 26"

// BEST SOLUTION
// export const position = (alphabet: any): string => `Position of alphabet: ${alphabet.charCodeAt() - 96}`;
