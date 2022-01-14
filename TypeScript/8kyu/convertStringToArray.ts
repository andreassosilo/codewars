// Codewars - Andreas Sosilo
// 8 kyu - TypeScript - Convert a string to an array

/*
Task:
-----
Write a function to split a string and convert it into an array of words. For example:

"Robin Singh" ==> ["Robin", "Singh"]

"I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]
*/

export function stringToArray(s: string): string[] {
  return s.split(' ');
}

// TEST CASES
console.log(stringToArray('Robin Singh')); // ["Robin", "Singh"]
console.log(stringToArray('I love arrays they are my favorite')); // ["I", "love", "arrays", "they", "are", "my", "favorite"]

// BEST SOLUTION
// export const stringToArray = (s: string) => s.split(' ');
