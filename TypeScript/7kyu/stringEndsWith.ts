// Codewars - Andreas Sosilo
// 7 kyu - String ends with?

/*
Task:
-----
Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false
*/

export function solution(str: string, ending: string): boolean {
  let counter = 0;
  for (let i = ending.length - 1; i >= 0; i--) {
    if (ending[i] !== str[str.length - 1 - counter]) {
      return false;
    }
    counter++;
  }
  return true;
}

// TEST CASES
console.log(solution("abcde", "cde")); // true
console.log(solution("abcde", "abc")); // false

// BEST SOLUTION
/*
export function solution(str: string, ending: string): boolean {
  return str.endsWith(ending);
}
*/
