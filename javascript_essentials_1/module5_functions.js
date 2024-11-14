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


//Exercise 5
let counter = 1;
let intervalID = setInterval(function(){
  console.log(counter++);
}, 2000);
setTimeout(function(){
  clearInterval(intervalID)
}, 22000);