'use strict';
// Codewars - Andreas Sosilo
// 7 kyu - Over The Road

/*
Task:
-----
You've just moved into a perfectly straight street with exactly n identical houses on either side of the road. Naturally, you would like to find out the house number of the people on the other side of the street. The street looks something like this:

Street
1|   |6
3|   |4
5|   |2
Evens increase on the right; odds decrease on the left. House numbers start at 1 and increase without gaps. When n = 3, 1 is opposite 6, 3 opposite 4, and 5 opposite 2.
*/

// SOLUTION
const overTheRoad = (address, n) => {
  let result = 0;
  if (address % 2 !== 0) {
    let oddIndex = (address - 1) / 2;
    result = (n - oddIndex) * 2;
  } else {
    let evenIndex = address / 2 - 1;
    result = (n - evenIndex) * 2 - 1;
  }
  return result;
};

// TEST CASES
console.log(overTheRoad(1, 3)); // 6
console.log(overTheRoad(7, 11)); // 16

// BEST SOLUTION
// const overTheRoad = (address, n) => n * 2 + 1 - address;
// maximum address is double n
// the opposing of Maximum is always 1
// address + opposingAddress = n * 2 + 1
// the opposite address is the maximumPlusMinimum minus your address
