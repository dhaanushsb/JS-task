// Write a JavaScript conditional statement to find the largest of five numbers. 
// Display an alert box to show the results.

/* --------------------------------------------------------------------------------- */

 // Function to find the largest of five numbers
function findLargestOfFive(a, b, c, d, e) {
    // Initialize largest with the first number
    let largest = a;

    // Compare with the remaining numbers
    if (b > largest) largest = b;
    if (c > largest) largest = c;
    if (d > largest) largest = d;
    if (e > largest) largest = e;

    // Display the result in an alert box
    alert(`The largest number is ${largest}`);
}

// Example usage with five numbers
const num1 = 23;
const num2 = 56;
const num3 = 89;
const num4 = 12;
const num5 = 67;

findLargestOfFive(num1, num2, num3, num4, num5);


/* --------------------------------------------------------------------------------- */