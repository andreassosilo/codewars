"use strict";
// Codewars - Andreas Sosilo
// 6 kyu - Unique In Order

/*
Task:
-----
Implement the function unique_in_order which takes as argument a sequence and returns a list of items without 
any elements with the same value next to each other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]
*/

var uniqueInOrder = function (iterable) {
    let result = [];
    let temp = [];
    // Check first if the input is array or not
    if (Array.isArray(iterable) === false) {
        temp = iterable.split('');
    } else {
        temp = iterable;
    }
    // Enter only unique element to the temporary array
    for (let i = 0; i < temp.length; i++) {
        if (temp[i] !== temp[i - 1]) {
            result.push(temp[i]);
        }
    }
    return result;
}

// BEST SOLUTION
/*
function uniqueInOrder(it) {
    var result = [];
    var last;
    for (var i = 0; i < it.length; i++) {
      if (it[i] !== last) {
        result.push(last = it[i]);
      }
    }
    return result;
} 
*/

// TEST CASES
console.log(uniqueInOrder('AAAABBBCCDAABBB')); // , ['A','B','C','D','A','B']