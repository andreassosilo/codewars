// Codewars - Andreas Sosilo
// 7 kyu - TypeScript - JavaScript Array Filter

/*
Task:
-----
The solution would work like the following:

getEvenNumbers([2,4,5,6]) // should == [2,4,6]
*/

export const getEvenNumbers = (numbersArray: number[]): number[] => {
  return numbersArray.filter((num) => num % 2 === 0);
};

// TEST CASES
console.log(getEvenNumbers([1, 2, 3, 6, 8, 10])); // [2,6,8,10]
console.log(getEvenNumbers([13, 15])); // []
