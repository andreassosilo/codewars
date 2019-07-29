// Codewars - Andreas Sosilo
// 7 kyu - Complementary DNA

/*
Task:
-----
Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the
"instructions" for the development and functioning of living organisms.

If you want to know more http://en.wikipedia.org/wiki/DNA

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G".
You have function with one side of the DNA (string, except for Haskell);
you need to get the other complementary side. DNA strand is never empty or there is no DNA at
all (again, except for Haskell).

More similar exercise are found here http://rosalind.info/problems/list-view/ (source)

DNAStrand ("ATTGC") // return "TAACG"

DNAStrand ("GTAT") // return "CATA"
*/

function DNAStrand (dna) {
  // your code here
  let result = ''
  for (let i = 0; i < dna.length; i++) {
    if (dna[i] === 'A') {
      result += 'T'
    } else if (dna[i] === 'T') {
      result += 'A'
    } if (dna[i] === 'C') {
      result += 'G'
    } if (dna[i] === 'G') {
      result += 'C'
    }
  }
  return result
}

// BEST SOLUTION
// function DNAStrand (dna) {
//   return dna.replace(/./g, function (c) {
//     return DNAStrand.pairs[c]
//   })
// }

// DNAStrand.pairs = {
//   A: 'T',
//   T: 'A',
//   C: 'G',
//   G: 'C'
// }

// TEST CASES
console.log(DNAStrand('ATTGC')) // 'TAACG'
