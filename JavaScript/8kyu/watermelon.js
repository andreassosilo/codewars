"use strict";
// Codewars - Andreas Sosilo
// 8 kyu - Watermelon

/*
Task:
-----
One hot summer day Pete and his friend Billy decided to buy watermelons. They chose the biggest crate. 
They rushed home, dying of thirst, and decided to divide their loot, however they faced a hard problem.

Given an integral number of watermelons w (1 ≤ w ≤ 100; 1 ≤ w in Haskell), check whether Pete and Billy 
can divide the melons so that each of them gets an even amount.

Examples
divide(2) == false // 2 = 1 + 1
divide(3) == false // 3 = 1 + 2
divide(4) == true  // 4 = 2 + 2
divide(5) == false // 5 = 2 + 3
divide(6) == true  // 6 = 2 + 4
*/

function divide(weight) {
    let pete = 0;
    let billy = 0;

    if (weight % 2 === 1) return false;
    pete = Math.floor(weight / 2);
    billy = Math.floor(weight / 2);
    if (pete % 2 === 0 && billy % 2 === 0) return true;
    while (pete > 1) {
        billy++;
        pete--;
        if (pete % 2 === 0 && billy % 2 === 0) return true;
    }
    return false;
}

// BEST SOLUTION
// return weight > 2 && !(weight % 2);

// TEST CASES
console.log(divide(2)); // false
console.log(divide(3)) // false
console.log(divide(4)) // true
console.log(divide(5)) // false
console.log(divide(6)) // true 