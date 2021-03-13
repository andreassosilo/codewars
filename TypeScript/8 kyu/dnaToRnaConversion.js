"use strict";
// Codewars - Andreas Sosilo
// 8 kyu - DNA to RNA Conversion
exports.__esModule = true;
exports.DNAtoRNA = void 0;
/*
Task:
-----
Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

Create a function which translates a given DNA string into RNA.

For example:

"GCAT"  =>  "GCAU"
The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.
*/
function DNAtoRNA(dna) {
    return dna.replace(/T/gi, 'U');
}
exports.DNAtoRNA = DNAtoRNA;
// TEST CASES
console.log(DNAtoRNA('GCAT')); // "GCAU"
console.log(DNAtoRNA('GACCGCCGCC')); // "GACCGCCGCC")
// BEST SOLUTION
/*
export const DNAtoRNA = (str:string):string => str.replace(/T/g, 'U')
*/
