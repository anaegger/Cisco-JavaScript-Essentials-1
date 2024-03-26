// let ticket ={
//     from: "Estacion Belgrano",
//     to: "Estacion Ewald",
//     price: 100
// };
// console.log("from: " + ticket.from + "to: " + ticket.to + "price: " + ticket.price);

// let person = {}
// person.name = "Ana";
// person.surname = "Egger";
// console.log("Name: " + person.name + ", Surname: " + person.surname);

let books =[
    {
        name: "Speaking JavaScript",
        author: "Axel Rauschmayer",
        number_pages: 460,
    },
    {
        name: "Programming JavaScript Applications",
        author: "Eric Elliott",
        number_pages: 254,
    },
    {
        name: "Understanding ECMAScript 6",
        author: "Nicholas C. Zakas",
        number_pages: 352,
    },
]

books.push({
    name: "Learning JavaScript Design Patterns",
    author: "Addy Osmani",
    number_pages: 254,
});
//console.log(books.length);
//console.log(books[0].name + " " + books[1].name + " " + books[2].name);

let books2 = books.slice(2);

books.forEach(book => {
    console.log(book.name + " " + book.author + " " + book.number_pages);
})

//books.shift();

console.log(books.length);
console.log(books[0].name + " " + books[1].name + " " + books[2].name);

let sum = 0;
books.forEach(book => {
    sum = sum + book.number_pages
})
console.log(sum);

let max = 0;
books.forEach(book => {
    if(book.number_pages > max){
        max = book.number_pages
    }
})
console.log(max);

let min = 1000;
books.forEach(book => {
    if(book.number_pages < min){
        min = book.number_pages
    }
})
console.log(min);