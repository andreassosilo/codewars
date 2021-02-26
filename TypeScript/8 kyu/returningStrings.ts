// Codewars - Andreas Sosilo
// 8 kyu - Returning Strings

/*
Task:
-----
Make a function that will return a greeting statement that uses an input; 
your program should return, "Hello, <name> how are you doing today?".
*/

export function greet(name: string): string {
  return `Hello, ${name} how are you doing today?`;
}

// TEST CASES
console.log(greet("Ryan")); // "Hello, Ryan how are you doing today?"
console.log(greet("Shingles")); // "Hello, Shingles how are you doing today?"

// BEST SOLUTION
// export const greet = (name: string): string => `Hello, ${name} how are you doing today?`;
