// Codewars - Andreas Sosilo
// 8 kyu - Reversed Strings

/*
Task:
-----
Complete the solution so that it reverses the string passed into it.
*/

export function solution(str: string): string {
  return str.split("").reverse().join(""); // reverse this!
}

// TEST CASES
console.log(solution("world")); // "dlrow"
console.log(solution("hello")); // "olleh"

// BEST SOLUTION
// export const solution = (str: string): string => [...str].reverse().join('');
