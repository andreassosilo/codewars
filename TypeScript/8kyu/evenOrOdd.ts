// Codewars - Andreas Sosilo
// 8 kyu - Even or Odd

/*
Task:
-----
Create a function (or write a script in Shell) that takes an integer
as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
*/

export function even_or_odd(n: number): String {
  return n % 2 === 0 ? "Even" : "Odd";
}

// TEST CASES
console.log(even_or_odd(2)); // "Even"
console.log(even_or_odd(7)); // "Odd"

// BEST SOLUTION
// export const even_or_odd = (n:number):string => n % 2 === 0 ? 'Even' : 'Odd';
