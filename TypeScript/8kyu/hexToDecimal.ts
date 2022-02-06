// Codewars - Andreas Sosilo
// 8 kyu - TypeScript - Hex to Decimal

/*
Task:
-----
Complete the function which converts hex number (given as a string) to a decimal number.
*/

export function hexToDec(hexString: string): number {
  return parseInt(hexString, 16);
}

// TEST CASES
console.log(hexToDec('FF')); // 255
console.log(hexToDec('-C')); // -12
