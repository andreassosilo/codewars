"use strict";
// Codewars - Andreas Sosilo
// 7 kyu - Count the divisors of a number
exports.__esModule = true;
exports.divisors = void 0;
/*
Task:
-----
Count the number of divisors of a positive integer n.

Random tests go up to n = 500000.

Examples
divisors(4)  = 3  // 1, 2, 4
divisors(5)  = 2  // 1, 5
divisors(12) = 6  // 1, 2, 3, 4, 6, 12
divisors(30) = 8  // 1, 2, 3, 5, 6, 10, 15, 30
*/
function divisors(n) {
    var counter = 0;
    for (var i = 1; i <= n; i++) {
        if (n % i === 0)
            counter++;
    }
    return counter;
}
exports.divisors = divisors;
// TEST CASES
console.log(divisors(10)); // 4
console.log(divisors(64)); // 7
