// Using a variable as a property value

var book;
var bookName;

bookName = "The Adventures of Tom Sawyer";

book = {
    title : bookName
};
//browser console output <- {title: 'The Adventures of Tom Sawyer'}

var book2;
var book2name;
 
book2name = "The Hamlet";

book2 = {
    title : book2name
};

//browser console output <- {title: 'The Hamlet'}



/* Further Adventures
 *
 * 1) Run the program.
 *
 * 2) At the console prompt, type 'book'
 *    and press enter.
 *
 * The book object should be displayed on the console.
 * Its title property should have the same
 * value as the bookName variable.
 *
 * 3) Change the value of the bookName variable
 *    and try steps 1 and 2 again.
 *
 */