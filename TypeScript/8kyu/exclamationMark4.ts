// Codewars - Andreas Sosilo
// 8 kyu - TypeScript - Exclamation marks series #4: Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string

/*
Task:
-----
Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string. For a beginner kata, you can assume that the input data is always a non empty string, no need to verify it.

Examples
remove("Hi!") === "Hi!"
remove("Hi!!!") === "Hi!"
remove("!Hi") === "Hi!"
remove("!Hi!") === "Hi!"
remove("Hi! Hi!") === "Hi Hi!"
remove("Hi") === "Hi!"
*/

export function remove(s: string): string {
  return `${s.replace(/!/gi, '')}!`;
}

// TEST CASES
console.log(remove('Hi!')); // "Hi!"
console.log(remove('Hi!!!')); // "Hi!"
console.log(remove('!Hi')); // "Hi!"
console.log(remove('!Hi!')); // "Hi!"
console.log(remove('Hi! Hi!')); // "Hi Hi!"

// BEST SOLUTION
// export const remove = s => s.replace(/\!/g,"") + "!";
