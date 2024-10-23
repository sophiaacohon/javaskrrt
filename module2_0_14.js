//question 1
console.log("Question 1");
let rose_price = 8;
let rose_no = 70;
let lily_price = 10;
let lily_no = 50;
let tulip_price = 2;
let tulip_no = 120;
let total_rose = rose_price * rose_no;
let total_lily = lily_price * lily_no;
let total_tulip = tulip_price * tulip_no;
let total_all = total_rose + total_lily + total_tulip;
console.log("Rose - unit price:", rose_price,", quantity:", rose_no, ", value:", total_rose);
console.log("Lily - unit price:", lily_price, ", quantity:", lily_no, ", value:", total_lily);
console.log("Tulip - unit price:", tulip_price, ", quantity:", tulip_no, ", value:", total_tulip);
console.log("Total:", total_all);

//Question 2
console.log("\nQuestion 2");
rose_no += 20;
lily_no -= 30;
total_rose = rose_price * rose_no;
total_lily = lily_price * lily_no;
total_tulip = tulip_price * tulip_no;
total_all = total_rose + total_lily + total_tulip;
console.log("Rose - unit price:", rose_price,", quantity:", rose_no, ", value:", total_rose);
console.log("Lily - unit price:", lily_price, ", quantity:", lily_no, ", value:", total_lily);
console.log("Tulip - unit price:", tulip_price, ", quantity:", tulip_no, ", value:", total_tulip);
console.log("Total:", total_all);
