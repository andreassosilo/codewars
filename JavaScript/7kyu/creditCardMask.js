'use strict';

// Codewars - Andreas Sosilo
// 7 kyu - Credit Card Mask

/*
Task:
-----
Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four characters into '#'.

Examples
maskify("4556364607935616") == "############5616"
maskify(     "64607935616") ==      "#######5616"
maskify(               "1") ==                "1"
maskify(                "") ==                 ""
*/

// SOLUTION

const maskify = (cc) => {
  cc = cc.toString();
  return cc.slice(0, -4).replace(/./g, '#').concat(cc.slice(-4));
};

// TEST CASES
console.log(maskify(4556364607935616)); // ############5616
