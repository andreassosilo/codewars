'use strict';
// Codewars - Andreas Sosilo
// 7 kyu - Don't give me five!

/*
Task:
-----
In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!

Examples:

1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12
The result may contain fives. ;-)
The start number will always be smaller than the end number. Both numbers can be also negative!
*/

// SOLUTION
const dontGiveMeFive = (start, end) => {
  if (start > end) return 0;
  let result = 0;
  for (let i = start; i <= end; i++) {
    if (i.toString().includes(5)) continue;
    result++;
  }
  return result;
};

// TEST CASES
console.log(dontGiveMeFive(1, 9)); // 8
console.log(dontGiveMeFive(4, 17)); // 12

// BEST SOLUTION
// const dontGiveMeFive=(s,e)=>[...Array(e-s+1)].reduce((r,_,n)=>r+!/5/.test(n+s),0)
