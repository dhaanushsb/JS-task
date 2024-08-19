// Write a program that takes a character (i.e. string of length 1) 
// and returns true if it is a vowel, false otherwise.

/* --------------------------------------------------------------------------------- */

function isVowel(char) {
    // Convert the character to lowercase to handle both cases (uppercase/lowercase)
    char = char.toLowerCase();

    // Check if the character is a vowel
    return ['a', 'e', 'i', 'o', 'u'].includes(char);
}

// Example usage
console.log(isVowel('A')); // true
console.log(isVowel('b')); // false


/* --------------------------------------------------------------------------------- */