// Codewars - Andreas Sosilo
// 7 kyu - Decrypt this school cipher

/*
Task:
-----
School students Alice and Bob send messages to each other. To ensure that their messages are not readable by teachers they encrypt text with simple algorythm. Every message contains only latin letters (lowercase and uppercase), digits from 0 to 9 and space symbol.

So, the encryption algorythm is:

Reverse the whole string.
Replace every letter with it ASCII code in quotes (A to '65', h to '104' and so on).
Insert digits and spaces as is.
E.g. this message:

9Hi Alice4
is encrypted as

4'101''99''105''108''65' '105''72'9
Your task is to write function decrypt to get source messages from encrypted strings.
*/

export const decrypt = (str: string): string => {
  let result: string[] = [];
  let flag: boolean = false;
  let tempStr: string = "";

  for (let i = 0; i < str.length; i++) {
    const element = str[i];
    if (element === "'") {
      if (flag) {
        // close the flag and decrypt the ASCII code
        result.push(String.fromCharCode(parseInt(tempStr)));
        tempStr = "";
        flag = false;
      } else {
        flag = true;
      }
    } else {
      if (flag) {
        // add the char into the temp variable & continue to the next one
        tempStr += element;
      } else {
        // push the element into the array
        result.push(element);
      }
    }
  }
  return result.reverse().join("");
};

// TEST CASES
console.log(decrypt("'101''99''105''108''65'")); // "Alice"
console.log(decrypt("30 71")); // "17 03"

// BEST SOLUTION
/*
export const decrypt = (str: string): string => {
  return [...str.replace(/'(\d+)'/g, (_, c) => String.fromCharCode(c))].reverse().join('');
}
*/
