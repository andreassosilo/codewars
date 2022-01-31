// Codewars - Andreas Sosilo
// 6 kyu - TypeScript - Does my number look big in this?

/*
Task:
-----
A Narcissistic Number is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).

For example, take 153 (3 digits), which is narcisstic:

    1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
and 1652 (4 digits), which isn't:

    1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938
The Challenge:

Your code must return true or false (not 'true' and 'false') depending upon whether the given number is a Narcissistic number in base 10. This may be True and False in your language, e.g. PHP.

Error checking for text strings or other invalid inputs is not required, only valid positive non-zero integers will be passed into the function.
*/

export function narcissistic(value: number): boolean {
  let m: number = 1;
  let counter: number = 0;
  let sum: number = 0;
  let temp: number = value;

  while (value / m > 1) {
    m *= 10;
    counter++;
  }

  while (temp) {
    sum += Math.pow(temp % 10, counter);
    temp = Math.floor(temp / 10);
  }
  return sum === value;
}

// TEST CASES
console.log(narcissistic(7)); // true
console.log(narcissistic(153)); // true

// BEST SOLUTION
// export function narcissistic(value: number): boolean {
//   const digits = String(value).split('');
//   return digits.reduce((acc, current) =>
//     acc + Math.pow(Number(current), digits.length), 0) === value;
// }
