// Codewars - Andreas Sosilo
// 7 kyu - TypeScript - Char Code Calculation

/*
Task:
-----
Given a string, turn each character into its ASCII character code and join them together to create a number - let's call this number total1:

'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667
Then replace any incidence of the number 7 with the number 1, and call this number 'total2':

total1 = 656667
              ^
total2 = 656661
              ^
Then return the difference between the sum of the digits in total1 and total2:

  (6 + 5 + 6 + 6 + 6 + 7)
- (6 + 5 + 6 + 6 + 6 + 1)
-------------------------
                       6
*/

export const calc = (str: string): number => {
  let total1: string = str
    .split('')
    .map((char) => char.charCodeAt(0))
    .join('');
  let total2: string = total1.replace(/7/g, '1');
  return sumCharCodes(total1) - sumCharCodes(total2);
};

export const sumCharCodes = (charCodes: string) =>
  charCodes
    .split('')
    .reduce((total, charCode) => total + parseInt(charCode), 0);

// TEST CASES
console.log(calc('ABC')); // 6

// BEST SOLUTION
// export function calc(str: string): number {
//   return (
//     Array.from(str, (c) => c.charCodeAt(0))
//       .toString()
//       .replace(/[^7]/g, '').length * 6
//   );
// }
