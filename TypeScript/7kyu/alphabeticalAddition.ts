// Codewars - Andreas Sosilo
// 7 kyu - TypeScript - Alphabetical Addition

/*
Task:
-----
Your task is to add up letters to one letter.

The function will be given a variable amount of arguments, each one being a letter to add.

Notes:
Letters will always be lowercase.
Letters can overflow (see second to last example of the description)
If no letters are given, the function should return 'z'
Examples:
addLetters('a', 'b', 'c') = 'f'
addLetters('a', 'b') = 'c'
addLetters('z') = 'z'
addLetters('z', 'a') = 'a'
addLetters('y', 'c', 'b') = 'd' // notice the letters overflowing
addLetters() = 'z'
*/

export const addLetters = (...letters: string[]) =>
  String.fromCharCode(
    (letters.reduce((acc, val) => acc + val.charCodeAt(0) - 96, 0) % 26 || 26) +
      96
  );

// TEST CASES
console.log(addLetters('a', 'b', 'c')); // 'f'
console.log(addLetters()); // 'z'
