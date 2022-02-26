// Codewars - Andreas Sosilo
// 7 kyu - TypeScript - Fix string case

/*
Task:
-----
In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

make as few changes as possible.
if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
For example:

solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
solve("coDE") = "code". Upper == lowercase. Change all to lowercase.
*/

export function solve(s: string) {
  let upperCaseCtr: number = 0;
  let lowerCaseCtr: number = 0;
  for (let i: number = 0; i < s.length; i++) {
    if (s[i] === s[i].toUpperCase()) upperCaseCtr += 1;
    if (s[i] === s[i].toLowerCase()) lowerCaseCtr += 1;
  }
  return upperCaseCtr > lowerCaseCtr ? s.toUpperCase() : s.toLowerCase();
}

// TEST CASES
console.log(solve('code')); // "code"
console.log(solve('CODe')); // "CODE"
console.log(solve('COde')); // "code"
console.log(solve('Code')); // "code"
