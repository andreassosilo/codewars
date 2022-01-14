// Codewars - Andreas Sosilo
// 6 kyu - Your order, please

/*
Task:
-----
Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

Examples
"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  ""
*/

export function order(words: string): string {
  let inputArr: string[] = words.split(" ");
  let newArr: string[] = [];
  const regex = /\d+/g;

  for (let i = 0; i < inputArr.length; i++) {
    const element: string = inputArr[i];
    let orderNumber: RegExpMatchArray | null = element.match(regex);
    if (orderNumber) {
      let index: number = parseInt(orderNumber[0]);
      newArr[index] = element;
    }
  }

  return newArr.join(" ").trim();
}

// TEST CASES
console.log(order("is2 Thi1s T4est 3a")); // "Thi1s is2 3a T4est"
console.log(order("4of Fo1r pe6ople g3ood th5e the2")); // "Fo1r the2 g3ood 4of th5e pe6ople"

// BEST SOLUTION
/*
export function order(words: String): String {
  return words
    .split(" ")
    .sort((a, b) => +a.match(/\d/) - +b.match(/\d/))
    .join(" ");
}
*/
