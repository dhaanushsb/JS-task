// Write a program that takes a character (number or string) in a variable & 
// checks whether the given input is a number, uppercase letter or lower case letter. 
// (Hint: ASCII codes:- A=65, Z=90, a=97, z=122)

/* --------------------------------------------------------------------------------- */

let input = prompt("Enter a Character");

let ascii = input.charCodeAt(0);

if(ascii>=48 && ascii<=57){
    alert("The input is an number");
}
else if(ascii>=65 && ascii<=90){
    alert("The input is lowercase letters");
}
else if(ascii>=97 && ascii<=122){
    alert("The input number is uppercase letters");
}
else{
    alert("input is not an number or letter")
}

/* --------------------------------------------------------------------------------- */


