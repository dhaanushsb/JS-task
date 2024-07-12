// Using a function to display object properties

var showMovieInfo;
var movie;

movie ={
  title : "Kalki 2898 AD 2024",
  actors : "Prabhas, Amitabh Bachchan, Kamal Haasan",
  directors : "Nag Ashwin"
};

showMovieInfo = function () {
  console.log("Movie information for " + movie.title);
  console.log("------------------------------");
  console.log("Actors: " + movie.actors);
  console.log("Directors: " + movie.directors);
  console.log("------------------------------");
};
showMovieInfo();



/* Further Adventures
 *
 * 1) Add a call to showMovieInfo and run the program.
 *    What happens?
 *   
 * ReferenceError: movie is not defined
 *  
 * 2) Declare a movie variable
 *    but don't assign it a value.
 *    Run the program. What happens now?
 *    console.log("Movie information for " + movie.title);
 *   
 * TypeError: Cannot read properties of undefined (reading 'title')
 *
 * 3) Create an empty object and
 *    assign it to the movie variable.
 *    Run the program again.
 *    Does the output change?
 *  yes
Movie information for Kalki 2898 AD 2024
------------------------------
Actors: undefined
Directors: undefined
------------------------------

 * 4) Add title, actors and directors properties
 *    to the movie object. Run one more time.
 *    Is the output as expected?
 * Yes
Movie information for Kalki 2898 AD 2024
------------------------------
Actors: Prabhas, Amitabh Bachchan, Kamal Haasan
Directors: Nag Ashwin
------------------------------
 */