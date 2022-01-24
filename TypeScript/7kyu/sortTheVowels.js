"use strict";
// Codewars - Andreas Sosilo
// 7 kyu - TypeScript - Sort the Vowels!
exports.__esModule = true;
exports.sortVowels = void 0;
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
function sortVowels(str) {
    if (typeof str === 'number' || typeof str === 'undefined')
        return '';
    var strArr = str ? str.toString().split('') : [];
    var result = [];
    for (var index = 0; index < strArr.length; index++) {
        var temp = '';
        if (/[aeiou]/gi.test(strArr[index])) {
            temp = "|".concat(strArr[index]);
        }
        else {
            temp = "".concat(strArr[index], "|");
        }
        result.push("".concat(temp).concat(index === strArr.length - 1 ? '' : '\n'));
    }
    return result.join('');
}
exports.sortVowels = sortVowels;
// TEST CASES
console.log(sortVowels('Codewars')); // 'C|\n|o\nd|\n|e\nw|\n|a\nr|\ns|'
console.log(sortVowels('yo!')); // 'y|\n|o\n!|'
// BEST SOLUTION
// export function sortVowels(str?: number | string | null): string {
//   return typeof str != 'string'? '': [...str].map(x => /[aeiou]/i.test(x)? '|' + x: x + '|').join('\n')
// };
