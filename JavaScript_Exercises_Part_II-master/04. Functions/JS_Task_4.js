// Write a JavaScript function that accepts a list of country names as input and 
// returns the longest country name as output.

// Sample function : Longest_Country_Name(["Australia", "Germany", "United States of America"])
// Expected output : "United States of America"

/* --------------------------------------------------------------------------------- */

function longestCountryName(countries) {
    if (countries.length === 0) {
      return "No countries provided";
    }
  
    let longestName = countries[0];
  
    for (let i = 1; i < countries.length; i++) {
      if (countries[i].length > longestName.length) {
        longestName = countries[i];
      }
    }
  
    return longestName;
  }
  
  // Example usage:
  console.log(longestCountryName(["Australia", "Germany", "United States of America"]));
  // Output: "United States of America"
  

/* --------------------------------------------------------------------------------- */