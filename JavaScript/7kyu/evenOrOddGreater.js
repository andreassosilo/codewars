// Codewars - Andreas Sosilo
// 7 kyu - Even or Odd - Which is Greater?

/*
Task:
-----
Given a string of digits confirm whether the sum of all the individual even digits are greater than the sum of all the indiviudal odd digits. Always a string of numbers will be given.

If the sum of even numbers is greater than the odd numbers return: "Even is greater than Odd"

If the sum of odd numbers is greater than the sum of even numbers return: "Odd is greater than Even"

If the total of both even and odd numbers are identical return: "Even and Odd are the same"
*/

function evenOrOdd(str) {
  let output = '';
  let even = 0;
  let odd = 0;
  let tempArr = str.split('');

  tempArr.forEach((element) => {
    element % 2 === 0
      ? (even += parseInt(element))
      : (odd += parseInt(element));
  });

  if (even > odd) {
    output = 'Even is greater than Odd';
  } else if (even < odd) {
    output = 'Odd is greater than Even';
  } else {
    output = 'Even and Odd are the same';
  }

  return output;
}

// TEST CASES
console.log(evenOrOdd('12')); // 'Even is greater than Odd'
console.log(evenOrOdd('123')); // 'Odd is greater than Even'
console.log(evenOrOdd('112')); // 'Even and Odd are the same'
