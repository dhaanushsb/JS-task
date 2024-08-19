// Write a JavaScript program that accept two integers and display the larger. 
// Also show if the two integers are equal.

/* --------------------------------------------------------------------------------- */

// Function to find and display the larger of two integers
function compareIntegers(a, b) {
    if (a > b) {
        console.log(`${a} is larger than ${b}`);
    } else if (b > a) {
        console.log(`${b} is larger than ${a}`);
    } else {
        console.log(`${a} and ${b} are equal`);
    }
}

// Example usage
const num1 = 5; // You can change these values to test with different integers
const num2 = 10;

compareIntegers(num1, num2);


/* --------------------------------------------------------------------------------- */