'use strict';
// Codewars - Andreas Sosilo
// 6 kyu - Reverse or rotate?

/*
Task:
-----
The input is a string str of digits. Cut the string into chunks (a chunk here is a substring of the initial string) of size sz (ignore the last chunk if its size is less than sz).

If a chunk represents an integer such as the sum of the cubes of its digits is divisible by 2, reverse that chunk; otherwise rotate it to the left by one position. Put together these modified chunks and return the result as a string.

If

sz is <= 0 or if str is empty return ""
sz is greater (>) than the length of str it is impossible to take a chunk of size sz hence return "".
Examples:
revrot("123456987654", 6) --> "234561876549"
revrot("123456987653", 6) --> "234561356789"
revrot("66443875", 4) --> "44668753"
revrot("66443875", 8) --> "64438756"
revrot("664438769", 8) --> "67834466"
revrot("123456779", 8) --> "23456771"
revrot("", 8) --> ""
revrot("123456779", 0) --> "" 
revrot("563000655734469485", 4) --> "0365065073456944"
Example of a string rotated to the left by one position:
s = "123456" gives "234561".
*/

// SOLUTION
const revrot = (str, sz) => {
  if (sz <= 0 || str === '' || sz >= str.length) return '';
  let result = [];
  for (let index = 0; index < str.length; index += sz) {
    if (str.substring(index, index + sz).length === sz)
      result.push(str.substring(index, index + sz));
  }
  let newResult = result.map((element) =>
    sumLetters(element) % 2 === 0
      ? reverseString(element)
      : shiftString(element)
  );
  return newResult.join('');
};

const sumLetters = (str) => [...str].reduce((sum, char) => sum + +char, 0);
const reverseString = (str) => str.split('').reverse().join('');
const shiftString = (str) => str.substring(1) + str.charAt(0);

// TEST CASES
console.log(revrot('1234', 0)); // ""
console.log(revrot('733049910872815764', 5)); // "330479108928157"

// BEST SOLUTION
// function revrot(str, sz) {
//   if (sz < 1 || sz > str.length)
//     return '';

//   let reverse = s => s.split('').reverse().join('');
//   let rotate  = s => s.slice(1) + s.slice(0, 1);
//   let sum_cubes = c => c.split('').reduce((a, b) => a + +b ** 3, 0);

//   return str
//     .match(new RegExp('.{' + sz + '}', 'g'))
//     .map(c => sum_cubes(c) % 2 ? rotate(c) : reverse(c))
//     .join('');
// }
