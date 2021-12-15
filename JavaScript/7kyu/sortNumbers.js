'use strict';
// Codewars - Andreas Sosilo
// 7 kyu - Sort Numbers

/*
Task:
-----
Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

For example:

solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
solution(null); // should return []
*/

// SOLUTION
const solution = (nums) => {
  return nums ? nums.sort((a, b) => a - b) : [];
};

// TEST CASES
console.log(solution([1, 2, 3, 10, 5])); // [1,2,3,5,10]
console.log(solution(null)); // []

// BEST SOLUTION
// function solution(nums){
//   return nums ? nums.sort(function(a, b) { return a - b;}) : [];
// }
