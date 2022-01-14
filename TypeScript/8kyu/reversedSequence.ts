// Codewars - Andreas Sosilo
// 8 kyu - Reversed sequence

/*
Task:
-----
Build a function that returns an array of integers from n to 1 where n>0.

Example : n=5 >> [5,4,3,2,1]
*/

export const reverseSeq = (n: number): number[] => {
  let result: number[] = [];
  for (let i = n; i > 0; i--) {
    result.push(i);
  }
  return result;
};

// TEST CASES
console.log(reverseSeq(5)); // [5, 4, 3, 2, 1]

// BEST SOLUTION
/*
export const reverseSeq = (n: number): number[] => {
  return Array.from({length:n},(_,i)=>n-i);
};
*/
