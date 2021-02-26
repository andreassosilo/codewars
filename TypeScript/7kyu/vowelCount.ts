// Codewars - Andreas Sosilo
// 7 kyu - Vowel Count

/*
Task:
-----
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/

export class Kata {
  static library: string[] = ["a", "e", "i", "o", "u"];

  static getCount(str: string) {
    return str.split("").filter((e) => {
      return this.library.indexOf(e) !== -1;
    }).length;
  }
}

// TEST CASES
console.log(Kata.getCount("abracadabra")); // 5

// BEST SOLUTION
/*
export class Kata {
  static getCount(str: string) {
    return str.replace(/[^aeiou]/gi, "").length;
  }
}
*/
