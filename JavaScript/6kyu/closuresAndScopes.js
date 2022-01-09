'use strict';
// Codewars - Andreas Sosilo
// 6 kyu - Closures and Scopes

/*
Task:
-----
We want to create a function, which returns an array of functions, which return their index in the array. For better understanding, here an example:

var callbacks = createFunctions(5); // create an array, containing 5 functions

callbacks[0](); // must return 0
callbacks[3](); // must return 3
We already implemented that function, but when we actually run the code, the result doesn't look like what we expected. Can you spot, what's wrong with it? A test fixture is also available
*/

// SOLUTION
function createFunctions(n) {
  let callbacks = [];

  function writingIndex(index) {
    return function () {
      return index;
    };
  }

  for (let i = 0; i < n; i++) {
    callbacks.push(writingIndex(i));
  }

  return callbacks;
}

// TEST CASES
let callbacksTest = createFunctions(5); // create an array, containing 5 functions

console.log(callbacksTest[0]()); // must return 0
console.log(callbacksTest[3]()); // must return 3

// BEST SOLUTION
// let createFunctions = (n) => Array.from(Array(n), (_, i) => () => i);
