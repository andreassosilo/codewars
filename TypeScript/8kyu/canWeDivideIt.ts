// Codewars - Andreas Sosilo
// 8 kyu - TypeScript - Can we divide it?

/*
Task:
-----
Your task is to create the functionisDivideBy (or is_divide_by) to check if an integer number is divisible by both integers a and b.

A few cases:


(-12, 2, -6)  ->  true
(-12, 2, -5)  ->  false

(45, 1, 6)    ->  false
(45, 5, 15)   ->  true

(4, 1, 4)     ->  true
(15, -5, 3)   ->  true
*/

export const isDivideBy = (number: number, a: number, b: number): boolean => {
  return number % a === 0 && number % b === 0;
};

// TEST CASES
console.log(isDivideBy(-12, 2, -6)); // true
console.log(isDivideBy(-12, 2, -5)); // false
