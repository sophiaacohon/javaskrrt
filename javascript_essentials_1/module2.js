//2.0 - VARIABLES
/*
let  height  =  200;
{
  let  weight  =  100;
  {
    let  info  =  "tall";
    console.log(height);  //  ->  200
    console.log(weight);  //  ->  100
    console.log(info);  //  ->  tall
  }
  console.log(height);  //  ->  200
  console.log(weight);  //  ->  100
  console.log(info);  //  ->  Uncaught  ReferenceError:  info  is  not  defined
}
//let and const dont ignore the program blocks
//let and const have scope when placed in program blocks
  */

/*
var height2 = 180;
{
    var weight = 70;
    console.log(height2); // -> 180
    console.log(weight); // -> 70
}
console.log(height2); // -> 180
console.log(weight); // -> 70
//var ignores the program blocks
//whether you declare var inside or outside program block, it can be referrenced just like a global variable
//but it can be declared locally if placed in functions
*/

/*
console.log("let's  begin:"); //let's begin:
console.log("Hello"); //Hello
console.log("World"); //World
console.log("and  again:"); //and again:
console.log("Hello"); //Hello
console.log("World"); //World
console.log("and  once  more:"); //and once more:
console.log("Hello"); //Hello
console.log("World"); //World
*/

/*
//sample function
function testFunction() {
  console.log("Hello");
  console.log("World");
}

testFunction();
*/

/*
var  globalGreeting  =  "Good  ";
function  testFunction()  {
  var  localGreeting  =  "Morning  ";    
  console.log("function:");
  console.log(globalGreeting);
  console.log(localGreeting);
}
testFunction();
console.log("main  program:");
console.log(globalGreeting);
console.log(localGreeting);  //  ->  Uncaught  ReferenceError:  localGreeting  is  not  defined
// variable localGreeting is not accessible outside the function
*/

//Shadowing
let  counter  =  100; //global scope
console.log(counter);  //  ->  100
{
  //redeclaration of variable is okay if in different scope
  let  counter  =  200; //local scope
  console.log(counter);  //  ->  200
}
console.log(counter);  //  ->  100

