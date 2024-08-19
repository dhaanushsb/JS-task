// Displaying information from similar objects

var movie1;
var movie2;
var movie3;

movie1 = {
  title: "Inside Out",
  actors: "Amy Poehler, Bill Hader",
  directors: "Pete Doctor, Ronaldo Del Carmen"
};

movie2 = {
  title: "Spectre",
  actors: "Daniel Craig, Christoph Waltz",
  directors: "Sam Mendes"
};

movie3 = {
  title: "Star Wars: Episode VII - The Force Awakens",
  actors: "Harrison Ford, Mark Hamill, Carrie Fisher",
  directors: "J.J.Abrams"
};

movie4 = {
  title: "Indian2",
  actors: "Kamal",
  directors: "Shankar"
};

console.log("Movie information for " + movie1.title);
console.log("------------------------------");
console.log("Actors: " + movie1.actors);
console.log("Directors: " + movie1.directors);
console.log("------------------------------");

console.log("Movie information for " + movie2.title);
console.log("------------------------------");
console.log("Actors: " + movie2.actors);
console.log("Directors: " + movie2.directors);
console.log("------------------------------");

console.log("Movie information for " + movie3.title);
console.log("------------------------------");
console.log("Actors: " + movie3.actors);
console.log("Directors: " + movie3.directors);
console.log("------------------------------");

console.log("Movie information for " + movie4.title);
console.log("------------------------------");
console.log("Actors: " + movie4.actors);
console.log("Directors: " + movie4.directors);
console.log("------------------------------");


//calender event
var event1 , event2 , event3;

event1 ={
  title : "Project Meeting",
  Date : "13-7-2024",
  location : "Conference hall"
}; 

event2 = {
  title : "Friends meetup", 
  Date : "14-7-2024" , 
  location : "Hot and Cold"
};

event3 = {
  title : "Final Assesment",
  Date : "15-7-2024",
  location : "IIM auditorium"
};

function displayInfo(event){
  console.log("Titile " + event.title);
  console.log("--------------");
  console.log("Date " + event.Date);
  console.log("----------------");
  console.log("Location " + event.location);
}
displayInfo(event1); 
displayInfo(event2);
displayInfo(event3);

/* Further Adventures
 *
 * 1) Add a fourth movie and display its info
 *
 * 2) All the movie info is in one big block on the console.
 *    Change the code to space out the different movies.
 *
 * 3) Create objects to represent three calendar events
 *
 * 4) Display info from the three events on the console.
 *
 */