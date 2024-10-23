//Question 1
console.log("Question 1");
let ticket = {
  from: "Cebu City",
  to: "SM Seaside",
  price: 33
};
console.log(`From: ${ticket.from} \nTo: ${ticket.to} \nPrice: PHP${ticket.price}`);

//Question 2
console.log("\nQuestion 2");
let person = {};
person.name = "John";
person.surname = "Doe";
console.log(person.name, person.surname);

//Question 3
console.log("\nQuestion 3");
let books = [
  {title: "Speaking JavaScript",
    author: "Axel Rauschmayer",
    pages: 460
  },
  {title: "Programming JavaScript Applications",
    author: "Eric Elliott",
    pages: 254
  },
  {title: "Understanding ECMAScript 6",
    author: "Nicholas C. Zakas",
    pages: 352
  }
];

//Question 4
console.log("\nQuestion 4");
let newBook = {
  title: "Learning JavaScript Design Patterns",
  author: "Addy Osmani",
  pages: 254
};
books.push(newBook);
console.log(books.length);
let i;
for(i=0; i<books.length; i++){
  console.log(books[i].title);
}

//Question 5
console.log("\nQuestion 5");
let sliceBooks = books.slice(-2);

//Question 6
console.log("\nQuestion 6");
let lost = books.shift();
console.log(books.length);
for(i=0; i<books.length; i++){
  console.log(books[i].title);
}

//Question 7
console.log("\nQuestion 7");
let sumOfPages = books[0].pages + books[1].pages + books[2].pages;
console.log("Sum of all pages are " + sumOfPages);