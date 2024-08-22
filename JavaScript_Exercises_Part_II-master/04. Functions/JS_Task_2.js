// Write a JavaScript function that accepts a string as a parameter and converts 
// the first letter of each word of the string in upper case.
    // EXAMPLE STRING : 'the quick brown fox'
    // EXPECTED OUTPUT : 'The Quick Brown Fox

/* --------------------------------------------------------------------------------- */
function captializeFirstletter(str){
    return str.split(' ').map(word => word.charAt(0).toUpperCase()+word.slice(1)).join(' ');
}

console.log(captializeFirstletter("my name is dhaanush SB."));


/* --------------------------------------------------------------------------------- */

