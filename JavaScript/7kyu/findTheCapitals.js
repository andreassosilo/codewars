'use strict';
// Codewars - Andreas Sosilo
// 7 kyu - Find the capitals

/*
Task:
-----
Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

Example
Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );
*/

// SOLUTION
const capitals = (word) => {
  let resultArr = [];
  for (let i = 0; i < word.length; i++) {
    if (word[i].charCodeAt() >= 65 && word[i].charCodeAt() <= 90)
      resultArr.push(i);
  }
  return resultArr;
};

// TEST CASES
console.log(capitals('CodEWaRs')); // [0,3,4,6]

// BEST SOLUTION
// const capitals = (word) => {
//   return word.match(/[A-Z]/g).map((x) => {
//     return word.indexOf(x);
//   });
// };
