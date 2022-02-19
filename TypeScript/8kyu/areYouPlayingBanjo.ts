// Codewars - Andreas Sosilo
// 8 kyu - TypeScript - Are You Playing Banjo?

/*
Task:
-----
Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!

The function takes a name as its only argument, and returns one of the following strings:

name + " plays banjo" 
name + " does not play banjo"
Names given are always valid strings.
*/

export function areYouPlayingBanjo(name: string): string {
  return `${name} ${
    name[0] === 'r' || name[0] === 'R' ? 'plays' : 'does not play'
  } banjo`;
}

// TEST CASES
console.log(areYouPlayingBanjo('Adam')); // "Adam does not play banjo"
console.log(areYouPlayingBanjo('Paul')); // "Paul does not play banjo"
console.log(areYouPlayingBanjo('Ringo')); // "Ringo plays banjo"

// BEST SOLUTION
// export function areYouPlayingBanjo(name: string): string {
//   return name.startsWith('r') || name.startsWith('R')
//     ? name + ' plays banjo'
//     : name + ' does not play banjo';
// }
