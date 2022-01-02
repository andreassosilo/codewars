'use strict';
// Codewars - Andreas Sosilo
// 8 kyu - Switch it Up!

/*
Task:
-----
When provided with a number between 0-9, return it in words.

Input :: 1

Output :: "One".

If your language supports it, try using a switch statement.
*/

// SOLUTION
const switchItUp = (number) => {
  let result = '';
  switch (number) {
    case 0:
      result = 'Zero';
      break;
    case 1:
      result = 'One';
      break;
    case 2:
      result = 'Two';
      break;
    case 3:
      result = 'Three';
      break;
    case 4:
      result = 'Four';
      break;
    case 5:
      result = 'Five';
      break;
    case 6:
      result = 'Six';
      break;
    case 7:
      result = 'Seven';
      break;
    case 8:
      result = 'Eight';
      break;
    case 9:
      result = 'Nine';
      break;
    default:
      result = 'Wrong input!';
      break;
  }
  return result;
};

// TEST CASES
console.log(switchItUp(1)); // "One"
console.log(switchItUp(5)); // "Five"

// BEST SOLUTION
// const switchItUp = number => [`Zero`, `One`, `Two`, `Three`, `Four`, `Five`, `Six`, `Seven`, `Eight`, `Nine`][number];
