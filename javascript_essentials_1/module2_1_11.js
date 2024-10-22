//Question 1
console.log("Question 1");
let b11 = true;
let b12 = Boolean(true);
let n11 = 100;
let n12 = Number(200);
let bi11 = 100n;
let bi12 = BigInt(200);
let s11 = "Hello";
let s12 = String("Hello");
let u11 = undefined;

//Question 2
console.log("\nQuestion 2");
console.log(`${b11} [${typeof b11}]`);
console.log(`${b12} [${typeof b12}]`);
console.log(`${n11} [${typeof n11}]`);
console.log(`${n12} [${typeof n12}]`);
console.log(`${bi11} [${typeof bi11}]`);
console.log(`${bi12} [${typeof bi12}]`);
console.log(`${s11} [${typeof s11}]`);
console.log(`${s12} [${typeof s12}]`);
console.log(`${u11} [${typeof u11}]`);

//Question 3
console.log("\nQuestion 3");
let conv = Boolean(BigInt(Number("1234")));
console.log(`${conv} [${typeof conv}]`);

//Question 4
console.log("\nQuestion 4");
let b = true + false;
let n = 7 + 3;
let bI = 7n + 3n;
let str = "Hello " + "World!";
let u = undefined + undefined;
console.log(`${b} [${typeof b}]`);
console.log(`${n} [${typeof n}]`);
console.log(`${bI} [${typeof bI}]`);
console.log(`${str} [${typeof str}]`);
console.log(`${u} [${typeof u}]`);

//Question 5
console.log("\nQuestion 5");
let alpha = 10 + true;
let beta = "I love you " + 3000;
//let charlie = 13n + 143;
console.log(`${alpha} [${typeof alpha}]`);
console.log(`${beta} [${typeof beta}]`);
//console.log(`${charlie} [${typeof charlie}]`);

//more sample
let b1 = true + 100; 
// let b2 = true + 100n; // -> error!
let b3 = true + "100"; 
// let n1 = 100 + 200n; // -> error!
let n2 = 100 + true;
let n3 = 100 + "200";
// let bi1 = 100n + 200;  // -> error!
// let bi2 = 100n + true  // -> error!
let bi3 = 100n + "200"; 
let s1 = "100" + 200;
let s2 = "100" + 200n;
let s3 = "100" + true;
let s4 = "abc" + 200;
let s5 = "abc" + 200n;
let s6 = "abc" + true;

console.log(`${b1} [${typeof b1}]`);    // -> 101 [number]
// console.log(`${b2} [${typeof b2}]`);
console.log(`${b3} [${typeof b3}]`);    // -> true100 [string]
// console.log(`${n1} [${typeof n1}]`);
console.log(`${n2} [${typeof n2}]`);    // -> 101 [number]
console.log(`${n3} [${typeof n3}]`);    // -> 100200 [string]
// console.log(`${bi1} [${typeof bi1}]`);
// console.log(`${bi2} [${typeof bi2}]`);
console.log(`${bi3} [${typeof bi3}]`);  // -> 100200 [string]
console.log(`${s1} [${typeof s1}]`);    // -> 100200 [string]
console.log(`${s2} [${typeof s2}]`);    // -> 100200 [string]
console.log(`${s3} [${typeof s3}]`);    // -> 100true [string]
console.log(`${s4} [${typeof s4}]`);    // -> abc200 [string]
console.log(`${s5} [${typeof s5}]`);    // -> abc200 [string]
console.log(`${s6} [${typeof s6}]`);    // -> abctrue [string]

//Question 6
console.log("\nQuestion 6");
const str1 = 42 + Number("1");
console.log(str1);