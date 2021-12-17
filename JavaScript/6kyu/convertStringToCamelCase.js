'use strict';
// Codewars - Andreas Sosilo
// 6 kyu - Convert string to camel case

/*
Task:
-----
Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior"
*/

// SOLUTION
const toCamelCase = (str) => {
  let result = str.replace(/[_-]/g, ' ').split(' ');
  for (let i = 1; i < result.length; i++) {
    result[i] = result[i][0].toUpperCase() + result[i].slice(1);
  }
  return result.join('');
};

// TEST CASES
console.log(toCamelCase('the_stealth_warrior')); // "theStealthWarrior"
console.log(toCamelCase('The-Stealth-Warrior')); // "TheStealthWarrior"

// BEST SOLUTION
// function toCamelCase(str){
//   return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
// }
