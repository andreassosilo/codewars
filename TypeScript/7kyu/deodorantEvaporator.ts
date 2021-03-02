// Codewars - Andreas Sosilo
// 7 kyu - Deodorant Evaporator

/*
Task:
-----
This program tests the life of an evaporator containing a gas.

We know the content of the evaporator (content in ml), the percentage of foam or gas lost every day (evap_per_day) and the threshold (threshold) in percentage beyond which the evaporator is no longer useful. All numbers are strictly positive.

The program reports the nth day (as an integer) on which the evaporator will be out of use.

Example:
evaporator(10, 10, 5) -> 29
*/

export function evaporator(
  content: number,
  evapPerDay: number,
  threshold: number
): number {
  let evapLife: number = 0;
  let gasLeft: number = 100 * (content / content);
  while (gasLeft > threshold) {
    gasLeft = gasLeft - (gasLeft * evapPerDay) / 100;
    evapLife++;
  }
  return Math.round(evapLife);
}

// TEST CASES
console.log(evaporator(10, 10, 10)); // 22
console.log(evaporator(10, 10, 5)); // 29

// BEST SOLUTION
/*
export function evaporator(content: number, evap_per_day: number, threshold: number): number {
  return Math.ceil(Math.log(threshold/100)/Math.log(1-evap_per_day/100));
}
*/
