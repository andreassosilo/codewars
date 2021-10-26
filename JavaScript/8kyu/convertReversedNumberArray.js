"use strict";
// Codewars - Andreas Sosilo
// 8 kyu - Convert number to reversed array of digits

/*
Task:
-----
You have to return the digits of this number within an array in reverse order.

Example:
348597 => [7,9,5,8,4,3]
*/

function digitize(n) {
    return Array.from(n.toString()).map(Number).reverse();
}

// BEST SOLUTION
// return Array.from(String(n), Number).reverse();

// TEST CASES
console.log(digitize(35231)); // [1,3,2,5,3]