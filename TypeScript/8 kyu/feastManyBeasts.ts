// Codewars - Andreas Sosilo
// 8 kyu - The Feast of Many Beasts

/*
Task:
-----
All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.
*/

export function feast(beast: string, dish: string): boolean {
  return (
    beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]
  );
}

// TEST CASES
console.log(feast('great blue heron', 'garlic naan')); // true
console.log(feast('brown bear', 'bear claw')); // false

// BEST SOLUTION
/*
export function feast(r: string, s: string): boolean {
  return r[0] === s[0] && r[r.length - 1] === s[s.length - 1];
}
*/
