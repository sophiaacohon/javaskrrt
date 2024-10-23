/*
//objects
let  user1  =  {
  name:  "Calvin",
  surname:  "Hart",
  age:  66,
  email:  "CalvinMHart@teleworm.us"
};

let  user2  =  {
  name:  "Mateus",
  surname:  "Pinto",
  age:  21,
  email:  "MateusPinto@dayrep.com"
};

console.log(user1.name, user1.surname ,"\nAge:", user1.age, "\nEmail:", user1.email);
console.log(user2.name, user2.surname ,"\nAge:", user2.age, "\nEmail:", user2.email);
*/

/*
//arrays
let  days  =  ["Sun",  "Mon",  "Tue",  "Wed",  "Thu",  "Fri",  "Sat"];
console.log(days[0]);  //  ->  Sun
console.log(days[2]);  //  ->  Tue
console.log(days[5]);  //  ->  Fri
days[0]  =  "Sunday";
console.log(days[0]);  //  ->  Sunday
let  emptyArray  =  [];
console.log(emptyArray[0]);  //  ->  undefined

let  values  =  ["Test",  7,  12.3,  false];
console.log(values[0]);  //  ->  Test

let  names  =  [["Olivia",  "Emma",  "Mia",  "Sofia"],  ["William",  "James",  "Daniel"]];
console.log(names[0]);  //  ->  ["Olivia",  "Emma",  "Mia",  "Sofia"]
console.log(names[0][1]);  //  ->  Emma
console.log(names[1][1]);  //  ->  James
let  femaleNames  =  names[0];
console.log(femaleNames[0]);  //  ->  Olivia
console.log(femaleNames[2]);  //  ->  Mia
*/


//array of objects
let  users  =[  
  {
          name:  "Calvin",
          surname:  "Hart",
          age:  66,
          email:  "CalvinMHart@teleworm.us"
  },
  {
          name:  "Mateus",
          surname:  "Pinto",
          age:  21,
          email:  "MateusPinto@dayrep.com"
  }
];

console.log(users[0].name, users[0].surname);
console.log(users[1].name, users[1].surname);

users[2]  =  {
  name:  "Irene",
  surname:  "Purnell",
  age:  32,
  email:  "IreneHPurnell@rhyta.com"

}

console.log(users[0].name);  //  ->  Calvin
console.log(users[1].name);  //  ->  Mateus
console.log(users[2].name);  //  ->  Irene

let  days  =  ["Sun",  "Mon",  "Tue",  "Wed",  "Thu",  "Fri",  "Sat"];
console.log(typeof  days);  //  ->  object

