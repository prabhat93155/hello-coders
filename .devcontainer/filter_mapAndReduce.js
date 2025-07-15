const mynum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
mynum.filter((element, index) => {
    if (element % 2 === 0) {
        console.log(`Even number at index ${index} is: ${element}`);
    }
});



const newnums = [];
mynum.forEach((element, index) => {
    if (element % 2 === 0) {
        newnums.push(element);
    }
});
console.log(`Filtered even numbers: ${newnums}`);




const books = [
    {
        title: "The Great Gatsby", genre: "Fiction", author: "F. Scott Fitzgerald"
    },
    {
        title: "To Kill a Mockingbird", genre: "Fiction", author: "Harper Lee"
    },
    {
        title: "1984", genre: "Dystopian", author: "George Orwell"
    },
    {
        title: "The Catcher in the Rye", genre: "Fiction", author: "J.D. Salinger"
    },
    {
        title: "Brave New World", genre: "Dystopian", author: "Aldous Huxley"
    },
];
const fictionBooks = books.filter((book) => book.genre === "Fiction");
console.log("Fiction Books:");
fictionBooks.forEach((book) => {
    console.log(`Title: ${book.title}, Author: ${book.author}`);
});




const comics = [
    {
        title: "Spiderman", publicationYear: 1962, publisher: "Marvel"

    },
    {
        title: "Batman", publicationYear: 1939, publisher: "DC"
    },
    {
        title: "Superman", publicationYear: 1938, publisher: "DC"
    },

];
const marvelcomic = comics.filter((comic) => comic.publisher === "Marvel");
console.log("Marvel Comics:");
marvelcomic.forEach((comic) => {
    console.log(`Title: ${comic.title}, Publisher: ${comic.publisher}`);
});


// Map
const mynumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
mynumbers.map((element, index) => {
    console.log(`Element at index ${index} is: ${element}`);
});

//map add 10add all numbers
const mynewnumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const addTen = mynewnumber.map((element) => element + 10);
console.log(`Numbers after adding 10: ${addTen}`);


//chaining map
const mynum1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newnums2 = mynum1.map((element) => element * 2).filter((element) => element > 10);
console.log(`Numbers after doubling and filtering: ${newnums2}`);


//reduce
const mynums2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sum = mynums2.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(`Sum of all numbers: ${sum}`);



const shoppingCart = [
    { item: "Apple", price: 1.5, quantity: 3 },
    { item: "Banana", price: 0.5, quantity: 5 },
    { item: "Orange", price: 1.0, quantity: 2 },
];
const totalCost = shoppingCart.reduce((accumulator, currentItem) => {
    return accumulator + (currentItem.price * currentItem.quantity);
}, 0);
console.log(`Total cost of shopping cart: RS${totalCost}`);