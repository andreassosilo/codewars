'use strict';
// Codewars - Andreas Sosilo
// 7 kyu - Remove anchor from URL

/*
Task:
-----
Complete the function/method so that it returns the url with anything after the anchor (#) removed.

Examples
"www.codewars.com#about" --> "www.codewars.com"
"www.codewars.com?page=1" -->"www.codewars.com?page=1"
*/

// SOLUTION
const removeUrlAnchor = (url) =>
  url.substring(0, url.indexOf('#') !== -1 ? url.indexOf('#') : url.length);

// TEST CASES
console.log(removeUrlAnchor('www.codewars.com#about')); // 'www.codewars.com'
console.log(removeUrlAnchor('www.codewars.com/katas/?page=1#about')); // 'www.codewars.com/katas/?page=1'
console.log(removeUrlAnchor('www.codewars.com/katas/')); // 'www.codewars.com/katas/'

// BEST SOLUTION
// const removeUrlAnchor = (url) => url.split("#")[0];
// const removeUrlAnchor = url => url.replace(/#.+$/,'');
