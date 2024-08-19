// Write a JavaScript program to check a pair of numbers and return true if one of the 
// numbers is 50 or if their sum is 50.  

/* --------------------------------------------------------------------------------- */

let a = parseInt(prompt("number1:"));
let b = parseInt(prompt("number2:"));
let c = a+b;
if(a==50 || b == 50){
    return true;
}
else if(c == 50){
    return true;
}
else{
    return false;
}


/* --------------------------------------------------------------------------------- */