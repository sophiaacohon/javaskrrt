//Exercise 1
console.log("Exercise 1");
console.log(2 * 3 + 1);      // expected 7  
console.log(2 ** 4);          // expected 16  
console.log(5 * 1);          // expected 5  
console.log(8 ** 2 - 5 ** 2);   // expected 39

//Exercise 2
console.log("\nExercise 2");
console.log(4 * 5 === 20);
console.log(6 * 5 == "30");
console.log(-17 < 0);  
console.log(25 != 1);  
console.log(2 + 2 * 2 != 4);
/*
The == operator compares the values of two variables after performing type conversion if necessary. On the other hand, the === operator compares the values of two variables without performing type conversion.
*/

//Exercise 3
console.log("\nExercise 3");
console.log(true || false);  
console.log(false || ! false);  
console.log(false && false || true); //still true though?
//console.log(false || false || true);  
console.log(true || false || false && true); //also this is true....
//console.log(true || false && false && true);