
//Exercise 1
let numbers = [50, 10, 40, 30, 20];
function compareNumbers(a, b){
  let retVal = 0;
  if(a < b){
    retVal = 1;
  }
  else if(a > b){
    retVal = -1;
  }
  return retVal;
}
let sorted = numbers.sort(compareNumbers);
console.log(sorted);

//Exercise 2
function add(a, b){
  if(
    !Number.isInteger(a) || !Number.isInteger(b)){
    return NaN;
  }
  return a + b;
}

function sub(a, b){
  if(!Number.isInteger(a) || !Number.isInteger(b)){
    return NaN;
  }
  return a - b;
}

function mult(a, b){
  if(!Number.isInteger(a) || !Number.isInteger(b)){
    return NaN;
  }
  return a * b;
}

console.log(add(12, 10));
console.log(mult(12, 10.1));
console.log(sub(5, 3));

//Exercise 3
let add3 = (a,b) => !Number.isInteger(a) || !Number.isInteger(b) ? NaN : a + b;
let sub3 = (a,b) => !Number.isInteger(a) || !Number.isInteger(b) ? NaN : a - b;
let mult3 = (a,b) => !Number.isInteger(a) || !Number.isInteger(b) ? NaN : a * b;
console.log(add3(12, 10));
console.log(mult3(12, 10.1));
console.log(sub3(5, 3));

//Exercise 4
function action(callback, a, b){
  return callback(a, b);
}
console.log(action(add, 12, 10));
console.log(action(sub, 12, 10));
console.log(action(mult, 12, 10));

/* you can uncomment to do the timer
//Exercise 5
let counter = 1;
let intervalID = setInterval(function(){
  console.log(counter++);
}, 2000);
setTimeout(function(){
  clearInterval(intervalID)
}, 22000);
*/

//Exercise 6
let n = 10;
let fibonacci = function (n){
  let retVal = 0;
  if(n!=0){
    if(n === 1){
      retVal = 1;
    }
    else{
      retVal = fibonacci(n-1) + fibonacci(n-2);
    }
  }
  return retVal
}
console.log(fibonacci(n));

//Exercise 7
let fibb = n=> n==0 ? 0 : (n == 1 ? 1 : fibb (n-1) + fibb(n-2));
console.log(fibb(n));


//Exercise 8
function fibbFor(n){
  let a = 0, b= 1;
  for(let i = 2; i <=n; i++){
    let c = a;
    a = b;
    b += c;
  }
  return b;
}
console.log(fibbFor(n));