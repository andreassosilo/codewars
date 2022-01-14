// Codewars - Andreas Sosilo
// 8 kyu - Do I get a bonus?

/*
Task:
-----
It's bonus time in the big city! The fatcats are rubbing their paws in anticipation... but who is going to make the most money?

Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.

If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.

Return the total figure the individual will receive as a string prefixed with "£" (= "\u00A3", JS, Go, Java and Julia), "$" (C#, C++, Ruby, Clojure, Elixir, PHP, Python, Haskell and Lua) or "¥" (Rust
*/

export class Kata {
  public static bonusTime(salary: number, bonus: boolean): string {
    return `£${salary * (bonus ? 10 : 1)}`;
  }
}

// TEST CASES
console.log(Kata.bonusTime(10000, true)); // £100000
console.log(Kata.bonusTime(10000, false)); // £10000
