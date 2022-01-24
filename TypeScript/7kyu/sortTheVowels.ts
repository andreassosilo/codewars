// Codewars - Andreas Sosilo
// 7 kyu - TypeScript - Sort the Vowels!

/*
Task:
-----
Write a function which takes a input string s and return a string in the following way:

   
                  C|                          R|
                  |O                          n|
                  D|                          d|
   "CODEWARS" =>  |E       "Rnd Te5T"  =>      |
                  W|                          T|
                  |A                          |e
                  R|                          5|
                  S|                          T|

Notes:

List all the Vowels on the right side of |
List every character except Vowels on the left side of |
for the purpose of this kata, the vowels are : a e i o u
Return every character in its original case
Each line is seperated with \n
Invalid input ( undefined / null / integer ) should return an empty string
*/

export function sortVowels(str?: number | string | null): string {
  if (typeof str === 'number' || typeof str === 'undefined') return '';
  let strArr: string[] = str ? str.toString().split('') : [];
  let result: string[] = [];
  for (let index = 0; index < strArr.length; index++) {
    let temp: string = '';
    if (/[aeiou]/gi.test(strArr[index])) {
      temp = `|${strArr[index]}`;
    } else {
      temp = `${strArr[index]}|`;
    }
    result.push(`${temp}${index === strArr.length - 1 ? '' : '\n'}`);
  }
  return result.join('');
}

// TEST CASES
console.log(sortVowels('Codewars')); // 'C|\n|o\nd|\n|e\nw|\n|a\nr|\ns|'
console.log(sortVowels('yo!')); // 'y|\n|o\n!|'

// BEST SOLUTION
// export function sortVowels(str?: number | string | null): string {
//   return typeof str != 'string'? '': [...str].map(x => /[aeiou]/i.test(x)? '|' + x: x + '|').join('\n')
// };
