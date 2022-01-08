'use strict';
// Codewars - Andreas Sosilo
// 6 kyu - Make the Deadfish swim

/*
Task:
-----
In this kata you will create a function that takes in a list and returns a list with the reverse order.

Examples
reverseList([1,2,3,4]) == [4,3,2,1]
reverseList([3,1,5,4]) == [4,5,1,3]
*/

// SOLUTION
const parse = (data) => {
  let result = [];
  let value = 0;
  for (let index = 0; index < data.length; index++) {
    if (data[index] === 'i') {
      value++;
    } else if (data[index] === 'd') {
      value--;
    } else if (data[index] === 's') {
      value = Math.pow(value, 2);
    } else if (data[index] === 'o') {
      result.push(value);
    }
  }
  return result;
};

// TEST CASES
console.log(parse('iiisdoso')); // [ 8, 64 ]
console.log(parse('iiisxxxdoso')); // [ 8, 64 ]

// BEST SOLUTION
// function parse( data ) {
//   var v = 0, ret = []
//   for (var c of data) {
//     switch (c) {
//       case 'i' : v++;         break;
//       case 'd' : v--;         break;
//       case 's' : v=v*v;       break;
//       case 'o' : ret.push(v); break;
//     }
//   }
//   return ret;
// }
