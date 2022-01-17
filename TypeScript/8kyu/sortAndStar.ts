// Codewars - Andreas Sosilo
// 8 kyu - TypeScript - Sort and Star

/*
Task:
-----
You will be given a vector of strings. You must sort it alphabetically (case-sensitive, 
and based on the ASCII values of the chars) and then return the first value.

The returned value must be a string, and have "***" between each of its letters.

You should not remove or add elements from/to the array.
*/

export function twoSort(s: string[]): string {
  return s.sort()[0].split('').join('***');
}

// TEST CASES
console.log(
  twoSort([
    'bitcoin',
    'take',
    'over',
    'the',
    'world',
    'maybe',
    'who',
    'knows',
    'perhaps',
  ])
); // 'b***i***t***c***o***i***n'

// BEST SOLUTION
// export function twoSort(s: string[]): string {
//   return [...s.sort()[0]].join("***");
// }
