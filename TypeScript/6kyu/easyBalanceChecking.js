"use strict";
// Codewars - Andreas Sosilo
// 6 kyu - Number of People in the Bus
exports.__esModule = true;
exports.balance = void 0;
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
function balance(book) {
    var letterNumberReg = /[^0-9a-zA-Z. ]/g;
    var originalBalance = 0, lastBalance = 0, itemCounter = 0;
    var bookArr = book.split("\n").map(function (e, i) {
        if (e && i === 0) {
            originalBalance = parseFloat(e.trim().replace(letterNumberReg, ""));
            lastBalance = originalBalance;
            return "Original Balance: " + originalBalance.toFixed(2);
        }
        else if (e && i > 0) {
            itemCounter++;
            var itemArr = e.trim().replace(letterNumberReg, "").split(" ");
            var number = itemArr[0];
            var itemName = itemArr[1];
            var itemPrice = parseFloat(itemArr[2]).toFixed(2);
            lastBalance = lastBalance - parseFloat(itemPrice);
            return number + " " + itemName + " " + itemPrice + " Balance " + lastBalance.toFixed(2);
        }
        else {
            return "";
        }
    });
    // Process the total expense & average expense
    bookArr.push("Total expense  " + (originalBalance - lastBalance).toFixed(2));
    bookArr.push("Average expense  " + ((originalBalance - lastBalance) / itemCounter).toFixed(2));
    return bookArr.filter(function (e) { return e.length > 0; }).join("\r\n");
}
exports.balance = balance;
// TEST CASES
var b1 = "1000.00!=\n\n125 Market !=:125.45\n126 Hardware =34.95\n127 Video! 7.45\n128 Book :14.32\n129 Gasoline ::16.10\n";
var b1sol = "Original Balance: 1000.00\r\n125 Market 125.45 Balance 874.55\r\n126 Hardware 34.95 Balance 839.60\r\n127 Video 7.45 Balance 832.15\r\n128 Book 14.32 Balance 817.83\r\n129 Gasoline 16.10 Balance 801.73\r\nTotal expense  198.27\r\nAverage expense  39.65";
console.log(balance(b1));
