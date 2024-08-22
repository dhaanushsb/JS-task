// Write a JavaScript function that reverses a number.
// Example x = 32243;
// Expected Output : 34223

/* --------------------------------------------------------------------------------- */

function reversenum(num){
    const reverse = parseInt(num.toString().split('').reverse().join(''),10);
    return reverse;
}   

console.log(reversenum(123456));
/* --------------------------------------------------------------------------------- */