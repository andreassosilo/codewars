// Codewars - Andreas Sosilo
// 7 kyu - TypeScript - Maximum Multiple

/*
Task:
-----
Given a Divisor and a Bound , Find the largest integer N , Such That ,

Conditions :
N is divisible by divisor

N is less than or equal to bound

N is greater than 0.

Notes
The parameters (divisor, bound) passed to the function are only positive values .
It's guaranteed that a divisor is Found .
Input >> Output Examples
maxMultiple (2,7) ==> return (6)
Explanation:
(6) is divisible by (2) , (6) is less than or equal to bound (7) , and (6) is > 0 .
*/

export function maxMultiple(divisor: number, bound: number): number {
  return bound - (bound % divisor);
}

// TEST CASES
console.log(maxMultiple(2, 7)); // 6
console.log(maxMultiple(3, 10)); // 9
