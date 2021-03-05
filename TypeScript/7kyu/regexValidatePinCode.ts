// Codewars - Andreas Sosilo
// 7 kyu - Regex validate PIN code

/*
Task:
-----
ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.

Examples
"1234"   -->  true
"12345"  -->  false
"a234"   -->  false
*/

export class Kata {
  static validatePin(pin: string): boolean {
    const regex: RegExp = new RegExp(/^(\d{4}|\d{6})$/);
    return regex.test(pin);
  }
}

// TEST CASES
console.log(Kata.validatePin("1234")); // true
console.log(Kata.validatePin("1.234")); // false
