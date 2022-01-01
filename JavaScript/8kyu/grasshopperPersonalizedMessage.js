'use strict';
// Codewars - Andreas Sosilo
// 8 kyu - Grasshopper - Personalized Message

/*
Task:
-----
Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

Use conditionals to return the proper message:

case	return
name equals owner	'Hello boss'
otherwise	'Hello guest'
*/

// SOLUTION
const greet = (name, owner) => (name === owner ? `Hello boss` : `Hello guest`);

// TEST CASES
console.log(greet('Daniel', 'Daniel')); // 'Hello boss'
console.log(greet('Greg', 'Daniel')); // 'Hello guest'
