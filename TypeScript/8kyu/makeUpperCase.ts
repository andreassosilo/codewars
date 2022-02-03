// Codewars - Andreas Sosilo
// 8 kyu - TypeScript - MakeUpperCase

/*
Task:
-----
Write a function which converts the input string to uppercase.
*/

export function makeUpperCase(str: string): string {
  return str.toUpperCase();
}

// TEST CASES
console.log(makeUpperCase('hello')); // "HELLO"
console.log(makeUpperCase('1,2,3 hello world!')); // "1,2,3 HELLO WORLD!"
