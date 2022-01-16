// Codewars - Andreas Sosilo
// 7 kyu - TypeScript - Maximum Length Difference

/*
Task:
-----
You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

Find max(abs(length(x) − length(y)))

If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).

Example:
a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
mxdiflg(a1, a2) --> 13
Bash note:
input : 2 strings with substrings separated by ,
output: number as a string
*/

export class G964 {
  public static mxdiflg = (a1, a2) => {
    let array = [];
    if (a1.length && a2.length) {
      a1.forEach((str1) =>
        a2.forEach((str2) => array.push(Math.abs(str1.length - str2.length)))
      );
      return Math.max.apply(null, array);
    }
    return -1;
  };
}

// BEST SOLUTION
// public static mxdiflg = (a1, a2) : number => {
//   const a = a1.length && a2.length ? Math.abs(Math.min(...a1.map(val=> val.length)) - Math.max(...a2.map(val=>val.length))) : -1;
//   const b = a1.length && a2.length ? Math.abs(Math.max(...a1.map(val=> val.length)) - Math.min(...a2.map(val=>val.length))) : -1;
//   return a > b ? a : b;
// }
