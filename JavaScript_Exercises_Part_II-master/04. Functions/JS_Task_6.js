// Write a JavaScript function to extract unique characters from a string.

// Example string : "thequickbrownfoxjumpsoverthelazydog"
// Expected Output : "thequickbrownfxjmpsvlazydg"

/* --------------------------------------------------------------------------------- */

function extractUniqueCharacters(str) {
    const uniqueChars = new Set(str);
    return [...uniqueChars].join('');
  }
  
  // Example usage:
  console.log(extractUniqueCharacters("thequickbrownfoxjumpsoverthelazydog"));
  // Output: "thequickbrownfxjmpsvlazydg"
  

/* --------------------------------------------------------------------------------- */