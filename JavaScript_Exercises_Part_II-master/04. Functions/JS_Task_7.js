// Write a JavaScript function that checks whether a number is perfect.

// Example : The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, 
// and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive 
// divisors: ( 1 + 2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. 
// This is followed by the perfect numbers 496 and 8128.

/* --------------------------------------------------------------------------------- */

function isPerfectNumber(num) {
    if (num <= 1) return false;
  
    let sumOfDivisors = 0;
  
    // Find all proper divisors of the number
    for (let i = 1; i <= num / 2; i++) {
      if (num % i === 0) {
        sumOfDivisors += i;
      }
    }
  
    // Check if the sum of divisors is equal to the number
    return sumOfDivisors === num;
  }
  
  // Example usage:
  console.log(isPerfectNumber(6));   // Output: true
  console.log(isPerfectNumber(28));  // Output: true
  console.log(isPerfectNumber(12));  // Output: false
  

/* --------------------------------------------------------------------------------- */