"use strict";
// Codewars - Andreas Sosilo
// 8 kyu - TypeScript - Correct the mistakes of the character recognition software
exports.__esModule = true;
exports.correct = void 0;
/*
Task:
-----
Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

S is misinterpreted as 5
O is misinterpreted as 0
I is misinterpreted as 1
The test cases contain numbers only by mistake.
*/
function correct(s) {
    var result = '';
    for (var index = 0; index < s.length; index++) {
        if (s[index] === '5') {
            result += 'S';
        }
        else if (s[index] === '0') {
            result += 'O';
        }
        else if (s[index] === '1') {
            result += 'I';
        }
        else {
            result += s[index];
        }
    }
    return result;
}
exports.correct = correct;
// TEST CASES
console.log(correct('L0ND0N')); // "LONDON"
console.log(correct('51NGAP0RE')); // "SINGAPORE"
console.log(correct('PAR15')); // "PARIS"
// BEST SOLUTION
// export function correct(s: string): string{
//   return s.replace(/1/g, 'I').replace(/5/g, 'S').replace(/0/g, 'O')
// }
