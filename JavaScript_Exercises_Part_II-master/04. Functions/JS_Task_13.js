// Write a JavaScript function that accepts a string as a parameter and find the longest 
// word within the string.
    // EXAMPLE STRING : 'Web Development Tutorial'
    // EXPECTED OUTPUT : 'Development'

/* --------------------------------------------------------------------------------- */

function findLongestWord(str) {
    // Split the string into an array of words
    const words = str.split(' ');
    
    // Initialize the longest word variable
    let longestWord = '';
  
    // Iterate through the array of words
    for (const word of words) {
      // Update longestWord if the current word is longer
      if (word.length > longestWord.length) {
        longestWord = word;
      }
    }
  
    return longestWord;
  }
  
  // Example usage:
  console.log(findLongestWord('Web Development Tutorial')); // Output: 'Development'
  

/* --------------------------------------------------------------------------------- */