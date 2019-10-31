'use strict'

// Codewars - Andreas Sosilo
// 8 kyu - Function 1 - hello world

/*
Task:
-----
Description:
Make a simple function called greet that returns the most-famous "hello world!".

Style Points
Sure, this is about as easy as it gets. But how clever can you be to create the most creative
hello world you can think of? What is a "hello world" solution you would want to show your friends?
*/

const greet = (name) => {
  return !name ? 'hello world!' : `hello ${name}!`
}

// TEST CASES
console.log(greet()) // 'Even'
console.log(greet('Evan')) // 'Even'
console.log(greet('Andreas')) // 'Odd'
