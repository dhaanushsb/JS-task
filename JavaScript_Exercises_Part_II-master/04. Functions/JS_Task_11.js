// Write a function that adds two numbers (input by user) and returns the sum of two numbers.

/* --------------------------------------------------------------------------------- */

function addTwoNumbers() {
    // Prompt the user to input the first number
    const num1 = parseFloat(prompt("Enter the first number:"));
    
    // Prompt the user to input the second number
    const num2 = parseFloat(prompt("Enter the second number:"));
    
    // Calculate the sum of the two numbers
    const sum = num1 + num2;
    
    // Return the sum
    return sum;
  }
  
  // Example usage:
  console.log(addTwoNumbers()); // Output will depend on user input
  

/* --------------------------------------------------------------------------------- */