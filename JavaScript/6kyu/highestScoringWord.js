'use strict';
// Codewars - Andreas Sosilo
// 6 kyu - Highest Scoring Word

/*
Task:
-----
Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.
*/

function high(x) {
  const alphabet = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
  };
  let wordsArr = x.split(' ');
  let highestScoringWord = { word: '', score: 0 };

  wordsArr.forEach((word) => {
    const chars = word.split('');
    const sumOfChars = chars.reduce((count, char) => count + alphabet[char], 0);
    if (sumOfChars > highestScoringWord.score) {
      highestScoringWord = { word: word, score: sumOfChars };
    }
  });

  return highestScoringWord.word;
}

// TEST CASES
console.log(high('man i need a taxi up to ubud')); // 'taxi'
console.log(high('bb d')); // 'bb'

// BEST PRACTICE
// function high(s){
//   let as = s.split(' ').map(s=>[...s].reduce((a,b)=>a+b.charCodeAt(0)-96,0));
//   return s.split(' ')[as.indexOf(Math.max(...as))];
// }
