// Codewars - Andreas Sosilo
// 6 kyu - Mexican Wave

/*
Task:
-----
In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up. 

Rules
 1.  The input string will always be lower case but maybe empty.

 2.  If the character in the string is whitespace then pass over it as if it was an empty seat

Example
wave("hello") => []string{"Hello", "hEllo", "heLlo", "helLo", "hellO"}
*/

export function wave(str: string): Array<string> {
  let resultArr: string[] = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ')
      resultArr.push(replaceAt(str.toLowerCase(), i, str[i].toUpperCase()));
  }
  return resultArr;
}

export function replaceAt(
  str: string,
  index: number,
  replacement: string
): string {
  return str.substring(0, index) + replacement + str.substring(index + 1);
}

// TEST CASES
console.log(wave('hello')); // ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
console.log(wave('')); // []
console.log(wave('two words')); // ["Two words", "tWo words", "twO words", "two Words", "two wOrds", "two woRds", "two worDs", "two wordS"]

// BEST SOLUTION
/*
export function wave(str: string): Array<string>{
  const result = [];
  for(let i = 0; i < str.length; i++){
    if(str.charAt(i) === ' '){
      continue;
    }
    result.push(str.substring(0, i) + str.charAt(i).toUpperCase() + str.substring(i + 1)); 
  }
  return result;
}
*/
