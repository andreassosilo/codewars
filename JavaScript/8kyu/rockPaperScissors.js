'use strict';
// Codewars - Andreas Sosilo
// 8 kyu - Rock Paper Scissors!

/*
Task:
-----
Let's play! You have to return which player won! In case of a draw return Draw!.

Examples:

rps('scissors','paper') // Player 1 won!
rps('scissors','rock') // Player 2 won!
rps('paper','paper') // Draw!
*/

// SOLUTION
const rps = (p1, p2) => {
  let result = '';
  if (p1 === p2) {
    result = `Draw!`;
  } else if (p1 === 'scissors') {
    if (p2 === 'paper') {
      result = `Player 1 won!`;
    } else {
      result = `Player 2 won!`;
    }
  } else if (p1 === 'paper') {
    if (p2 === 'rock') {
      result = `Player 1 won!`;
    } else {
      result = `Player 2 won!`;
    }
  } else if (p1 === 'rock') {
    if (p2 === 'scissors') {
      result = `Player 1 won!`;
    } else {
      result = `Player 2 won!`;
    }
  }
  return result;
};

// TEST CASES
console.log(rps('rock', 'scissors')); // "Player 1 won!"

// BEST SOLUTION
// const rps = (p1, p2) => {
//   if (p1 === p2) return "Draw!";
//   var rules = {rock: "scissors", paper: "rock", scissors: "paper"};
//   if (p2 === rules[p1]) {
//     return "Player 1 won!";
//   }
//   else {
//     return "Player 2 won!";
//   }
// };
