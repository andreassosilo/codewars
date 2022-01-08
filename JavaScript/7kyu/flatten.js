'use strict';
// Codewars - Andreas Sosilo
// 7 kyu - Flatten

/*
Task:
-----
Write a function that flattens an Array of Array objects into a flat Array. Your function must only do one level of flattening.

flatten([1,2,3]) // => [1,2,3]
flatten([[1,2,3],["a","b","c"],[1,2,3]])  // => [1,2,3,"a","b","c",1,2,3]
flatten([[[1,2,3]]]) // => [[1,2,3]]
*/

// SOLUTION
const flatten = (array) => {
  return array.reduce((previousValue, currentValue) => {
    return previousValue.concat(currentValue);
  }, []);
};

// TEST CASES
console.log(flatten([])); // []
console.log(flatten([1, 2, 3])); // [1, 2, 3]
console.log(
  flatten([
    [1, 2, 3],
    ['a', 'b', 'c'],
    [1, 2, 3],
  ])
); // [1, 2, 3, "a", "b", "c", 1, 2, 3]
console.log(flatten([[[3], [4], [5]], [9], [9], [8], [[1, 2, 3]]])); // [[3], [4], [5], 9, 9, 8, [1, 2, 3]]

// BEST SOLUTION
// const flatten = (array) => [].concat(...array);
