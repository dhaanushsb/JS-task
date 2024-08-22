// Write a function that computes factorial of a number.

/* --------------------------------------------------------------------------------- */

function factorial(n) {
    if (n < 0) return 'Factorial is not defined for negative numbers'; // Handle negative input
    if (n === 0 || n === 1) return 1; // Base case: factorial of 0 or 1 is 1
  
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    
    return result;
  }
  
  // Example usage:
  console.log(factorial(5)); // Output: 120
  console.log(factorial(0)); // Output: 1
  

/* --------------------------------------------------------------------------------- */