// Codewars - Andreas Sosilo
// 7 kyu - Spoonerize Me

/*
Task:
-----
A spoonerism is a spoken phrase in which the first letters of two of the words are swapped around, often with amusing results.

In its most basic form a spoonerism is a two word phrase in which only the first letters of each word are swapped:

"not picking" --> "pot nicking"

Your task is to create a function that takes a string of two words, separated by a space: words and returns a spoonerism of those words in a string, as in the above example.
*/

export function spoonerize(words: string): string {
  let [word1, word2]: string[] = words.split(" ");
  let spoonerizedWord1: string = spoonerizeWord(word1, word2);
  let spoonerizedWord2: string = spoonerizeWord(word2, word1);
  return `${spoonerizedWord1} ${spoonerizedWord2}`;
}

export function spoonerizeWord(word1: string, word2: string): string {
  return `${word2[0]}${word1.slice(1)}`;
}

// TEST CASES
console.log(spoonerize("not picking")); // "pot nicking"
console.log(spoonerize("jelly beans")); // "belly jeans"

// BEST SOLUTION
/*
export function spoonerize(words: string): string {
  const [word1, word2] = words.split(" ");
  const sword1 = `${word2[0]}` + word1.slice(1);
  const sword2 = `${word1[0]}` + word2.slice(1);

  return `${sword1} ${sword2}`;
}
*/
