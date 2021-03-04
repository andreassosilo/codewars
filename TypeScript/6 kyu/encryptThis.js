"use strict";
// Codewars - Andreas Sosilo
// 6 kyu - Encrypt this!
exports.__esModule = true;
exports.swap = exports.encryptThis = void 0;
/*
Task:
-----
Encrypt this!

You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

Your message is a string containing space separated words.
You need to encrypt each word in the message using the following rules:
The first letter needs to be converted to its ASCII code.
The second letter needs to be switched with the last letter
Keepin' it simple: There are no special characters in input.
Examples:
encryptThis "Hello" == "72olle"
encryptThis "good" == "103doo"
encryptThis "hello world" == "104olle 119drlo"
*/
var encryptThis = function (str) {
    if (str === "")
        return str;
    if (str.length === 1)
        return str.charCodeAt(0).toString();
    var strArr = str.split(" ");
    var result = strArr.map(function (e) {
        if (e.length === 1) {
            return e.charCodeAt(0).toString();
        }
        else if (e.length === 2) {
            return e.substring(0, 1).charCodeAt(0).toString() + e[1];
        }
        else {
            return e.substring(0, 1).charCodeAt(0).toString() + exports.swap(e.slice(1));
        }
    });
    return result.join(" ");
};
exports.encryptThis = encryptThis;
var swap = function (str) {
    var _a;
    var result = str.split("");
    _a = [result[str.length - 1], result[0]], result[0] = _a[0], result[str.length - 1] = _a[1];
    return result.join("");
};
exports.swap = swap;
// TEST CASES
console.log(exports.encryptThis("A")); // "65"
console.log(exports.encryptThis("A wise old owl lived in an oak")); // "65 119esi 111dl 111lw 108dvei 105n 97n 111ka"
// BEST SOLUTION
/*
export let encryptThis = (str: string): string => {
    if (!str)
      return '';
    return str
      .split(' ')
      .map((word) => {
          let first = word[0];
          let second = (word.length > 1) ? word[1] : '';
          let middle = word.slice(2, -1);
          let last = (word.length > 2) ? word[word.length - 1] : '';
          return first.charCodeAt(0) + last + middle + second;
      })
      .join(' ');
};
*/
