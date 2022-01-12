'use strict';
// Codewars - Andreas Sosilo
// 8 kyu - Smallest unused ID

/*
Task:
-----
Hey awesome programmer!

You've got much data to manage and of course you use zero-based and non-negative ID's to make each data item unique!

Therefore you need a method, which returns the smallest unused ID for your next new data item...

Note: The given array of used IDs may be unsorted. For test reasons there may be duplicate IDs, but you don't have to find or remove them!

Go on and code some pure awesomeness!
*/

// SOLUTION
const nextId = (ids) => {
  let lowestId = 0;
  let sortedIds = ids.sort((a, b) => a - b);
  for (let i = 0; i < sortedIds.length; i++) {
    if (lowestId === sortedIds[i] && lowestId !== sortedIds[i + 1]) {
      lowestId++;
    } else if (lowestId !== sortedIds[i + 1]) {
      return lowestId;
    }
  }
  return lowestId;
};

// TEST CASES
console.log(nextId([0, 1, 2, 3, 5])); // 4
console.log(nextId([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // 11

// BEST SOLUTION
// function nextId(ids){
//   var x = 0;
//   while (ids.includes(x)) x++;
//   return x;
// }
