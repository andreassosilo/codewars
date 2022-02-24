// Codewars - Andreas Sosilo
// 7 kyu - TypeScript - Longest vowel chain

/*
Task:
-----
The vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a length of 2. Given a lowercase string that has alphabetic characters only (both vowels and consonants) and no spaces, return the length of the longest vowel substring. Vowels are any of aeiou.

Good luck!
*/

export function solve(s: string) {
  let longest: number = 0;
  let counter: number = 0;
  const dictionary: string[] = ['a', 'i', 'u', 'e', 'o'];
  for (let index = 0; index < s.length; index++) {
    if (dictionary.includes(s[index])) {
      counter += 1;
    } else {
      if (counter > longest) {
        longest = counter;
      }
      counter = 0;
    }
  }
  return longest;
}

// TEST CASES
console.log(solve('codewarriors')); // 2
console.log(solve('chrononhotonthuooaos')); // 5

// BEST SOLUTION
// export function solve(s: string): number {
//   return Math.max(...(s.match(/[aeiou]+/gi) || []).map((x) => x.length));
// }
