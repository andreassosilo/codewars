// Codewars - Andreas Sosilo
// 6 kyu - Number of People in the Bus

/*
Task:
-----
You are given a (small) check book as a - sometimes - cluttered (by non-alphanumeric characters) string:

"1000.00
125 Market 125.45
126 Hardware 34.95
127 Video 7.45
128 Book 14.32
129 Gasoline 16.10"
The first line shows the original balance. Each other line (when not blank) gives information: check number, category, check amount.

First you have to clean the lines keeping only letters, digits, dots and spaces.

Then return a report as a string (underscores show spaces -- don't put them in your solution. They are there so you can see them and how many of them you need to have):

"Original_Balance:_1000.00
125_Market_125.45_Balance_874.55
126_Hardware_34.95_Balance_839.60
127_Video_7.45_Balance_832.15
128_Book_14.32_Balance_817.83
129_Gasoline_16.10_Balance_801.73
Total_expense__198.27
Average_expense__39.65"
*/

export function balance(book: string) {
  let letterNumberReg: RegExp = /[^0-9a-zA-Z. ]/g;
  let originalBalance: number = 0,
    lastBalance: number = 0,
    itemCounter: number = 0;
  let bookArr: string[] = book.split("\n").map((e: string, i: number) => {
    if (e && i === 0) {
      originalBalance = parseFloat(e.trim().replace(letterNumberReg, ""));
      lastBalance = originalBalance;
      return `Original Balance: ${originalBalance.toFixed(2)}`;
    } else if (e && i > 0) {
      itemCounter++;
      let itemArr: string[] = e.trim().replace(letterNumberReg, "").split(" ");
      let number: string = itemArr[0];
      let itemName: string = itemArr[1];
      let itemPrice: string = parseFloat(itemArr[2]).toFixed(2);
      lastBalance = lastBalance - parseFloat(itemPrice);
      return `${number} ${itemName} ${itemPrice} Balance ${lastBalance.toFixed(
        2
      )}`;
    } else {
      return "";
    }
  });

  // Process the total expense & average expense
  bookArr.push(`Total expense  ${(originalBalance - lastBalance).toFixed(2)}`);
  bookArr.push(
    `Average expense  ${((originalBalance - lastBalance) / itemCounter).toFixed(
      2
    )}`
  );

  return bookArr.filter((e) => e.length > 0).join("\r\n");
}

// TEST CASES
var b1 = `1000.00!=

125 Market !=:125.45
126 Hardware =34.95
127 Video! 7.45
128 Book :14.32
129 Gasoline ::16.10
`;
var b1sol =
  "Original Balance: 1000.00\r\n125 Market 125.45 Balance 874.55\r\n126 Hardware 34.95 Balance 839.60\r\n127 Video 7.45 Balance 832.15\r\n128 Book 14.32 Balance 817.83\r\n129 Gasoline 16.10 Balance 801.73\r\nTotal expense  198.27\r\nAverage expense  39.65";

console.log(balance(b1));
