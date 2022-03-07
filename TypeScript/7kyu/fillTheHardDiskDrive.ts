// Codewars - Andreas Sosilo
// 7 kyu - TypeScript - Computer problem series #1: Fill the Hard Disk Drive

/*
Task:
-----
Your task is to determine how many files of the copy queue you will be able to save into your Hard Disk Drive. The files must be saved in the order they appear in the queue.

Input:
Array of file sizes (0 <= s <= 100)
Capacity of the HD (0 <= c <= 500)
Output:
Number of files that can be fully saved in the HD.
Examples:
save([4,4,4,3,3], 12) -> 3
# 4+4+4 <= 12, but 4+4+4+3 > 12
save([4,4,4,3,3], 11) -> 2
# 4+4 <= 11, but 4+4+4 > 11
Do not expect any negative or invalid inputs.
*/

export function save(sizes: number[], hd: number) {
  let currentCapacity: number = 0;
  let totalSavedFiles: number = 0;
  for (let index = 0; index < sizes.length; index++) {
    if (currentCapacity + sizes[index] <= hd) {
      currentCapacity += sizes[index];
      totalSavedFiles += 1;
    } else {
      break;
    }
  }
  return totalSavedFiles;
}

// TEST CASES
console.log(save([4, 4, 4, 3, 3], 12)); // 3
console.log(save([4, 8, 15, 16, 23, 42], 108)); // 6
console.log(save([45], 12)); // 0

// BEST SOLUTION
// export function save(sizes: number[], hd: number) {
//   return sizes.reduce((a,v) => {
//     if ((hd-=v) >= 0) a++
//     return a
//   }, 0)
// }
