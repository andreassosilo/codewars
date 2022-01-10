'use strict';
// Codewars - Andreas Sosilo
// 7 kyu - Most digits

/*
Task:
-----
Find the number with the most digits.

If two numbers in the argument array have the same number of digits, return the first one in the array.
*/

// SOLUTION
const findLongest = (array) => {
  let result = '';
  for (let index = 0; index < array.length; index++) {
    let tempArr = [];
    let element = array[index].toString();
    tempArr = element.split('');
    if (tempArr.length > result.length) result = tempArr;
  }
  return Number(result.join(''));
};

// TEST CASES
console.log(findLongest([1, 10, 100])); // 100
console.log(findLongest([9000, 8, 800])); // 9000
console.log(findLongest([8, 900, 500])); // 900

// BEST SOLUTION
// const findLongest = arr => arr.sort((a,b) => (b+'').length - (a+'').length)[0];
