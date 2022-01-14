// Codewars - Andreas Sosilo
// 6 kyu - Are they the "same"?

/*
Task:
-----
Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities. "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

Examples
Valid arrays
a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
comp(a, b) returns true because in b 121 is the square of 11, 14641 is the square of 121, 20736 the square of 144, 361 the square of 19, 25921 the square of 161, and so on. It gets obvious if we write b's elements in terms of squares:

a = [121, 144, 19, 161, 19, 144, 19, 11] 
b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
Invalid arrays
If, for example, we change the first number to something else, comp may not return true anymore:

a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]
comp(a,b) returns false because in b 132 is not the square of any number of a.

a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]
comp(a,b) returns false because in b 36100 is not the square of any number of a.vfx
*/

export function comp(a1: number[] | null, a2: number[] | null): boolean {
  if (a1 && a2) {
    a1.sort((a: number, b: number) => a - b);
    a2.sort((a: number, b: number) => a - b);
  } else {
    return false;
  }

  for (let i: number = 0; i < a1.length; i++) {
    if (a2[i] !== Math.pow(a1[i], 2)) return false;
  }

  return true;
}

// TEST CASES
var a1 = [121, 144, 19, 161, 19, 144, 19, 11];
var a2 = [
  11 * 11,
  121 * 121,
  144 * 144,
  19 * 19,
  161 * 161,
  19 * 19,
  144 * 144,
  19 * 19,
];
var b1 = [121, 144, 19, 161, 19, 144, 19, 11];
var b2 = [
  11 * 21,
  121 * 121,
  144 * 144,
  19 * 19,
  161 * 161,
  19 * 19,
  144 * 144,
  19 * 19,
];
console.log(comp(a1, a2)); // true
console.log(comp(b1, b2)); // false);

// BEST SOLUTION
/*
export function comp(a1: number[] | null, a2: number[] | null): boolean {
   if (!(a1 && a2) || a1.length !== a2.length) return false;
   return a1.map(x => x * x).sort().toString() === a2.sort().toString();
}
*/
