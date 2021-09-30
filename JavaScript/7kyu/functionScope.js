// Codewars - Andreas Sosilo
// 7 kyu - Test Your Knowledge Of Function Scope

/*
Task:
-----
Write a function that adds from two invocations.

add(3)(4)  // 7
add(12)(20) // 32
*/

const add = (a) => (b) => a + b;

// TEST CASES
console.log(add(3)(4)); // 7
console.log(add(12)(20)); // 32
