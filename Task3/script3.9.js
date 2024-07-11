// Concatenating string properties

var book1;
var book2;
var book3;


book1 = {
	title: "The Hobbit",
	author: "J. R. R. Tolkien",
	year : 1980
};

book2 = {
	title: "Northern Lights",
	author: "Philip Pullman",
	year : 1990
};

book3 = {
	title: "War and peace",
	author: "Tolstoy",
	year : 2000
};

console.log(book1.title + " by " + book1.author + " on " + book1.year);
console.log(book2.title + " by " + book2.author + " on " + book2.year);
console.log(book3.title + " by " + book3.author + " on " + book3.year);


/* Further Adventures
 *
 * 1) Add a third book.
 *
 * 2) Log its details to the console.
 *
 * 3) Add a third property.
 *
 * 4) Update the messages logged to include the
 *    new property.
 *
 */