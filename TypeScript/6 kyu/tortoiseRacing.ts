// Codewars - Andreas Sosilo
// 6 kyu - Tortoise Racing
/*
Task:
-----
Two tortoises named A and B must run a race. A starts with an average speed of 720 feet per hour. Young B knows she runs faster than A, and furthermore has not finished her cabbage.

When she starts, at last, she can see that A has a 70 feet lead but B's speed is 850 feet per hour. How long will it take B to catch A?

More generally: given two speeds v1 (A's speed, integer > 0) and v2 (B's speed, integer > 0) and a lead g (integer > 0) how long will it take B to catch A?

The result will be an array [hour, min, sec] which is the time needed in hours, minutes and seconds (round down to the nearest second) or a string in some languages.

If v1 >= v2 then return nil, nothing, null, None or {-1, -1, -1} for C++, C, Go, Nim, Pascal,[] for Kotlin or "-1 -1 -1".

Examples:
(form of the result depends on the language)

race(720, 850, 70) => [0, 32, 18] or "0 32 18"
race(80, 91, 37)   => [3, 21, 49] or "3 21 49"
*/

export class G964 {
  public static race = (v1, v2, g) => {
    if (v1 >= v2) return null;
    let t: number = (g / (v2 - v1)) * 3600;
    let hour: number = ~~(t / 3600);
    let mins: number = ~~((t % 3600) / 60);
    let sec: number = ~~(t % 60);
    return [hour, mins, sec];
  };
}

// TEST CASES
console.log(G964.race(720, 850, 70)); // [0, 32, 18]
console.log(G964.race(80, 100, 40)); // [2, 0, 0])
