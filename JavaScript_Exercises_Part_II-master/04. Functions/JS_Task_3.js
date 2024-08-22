// Create 2 functions that calculate properties of a circle, using the definitions here.
// Create a function called calcCircumference:
    // • Pass the radius to the function.
    // • Calculate the circumference based on the radius, and output
        // "The circumference is NN".
// Create a function called calcArea:
    // • Pass the radius to the function.
    // • Calculate the area based on the radius, and output 
        // "The area is NN".
// Circumference of circle = 2πr
// Area of circle = πr2

/* --------------------------------------------------------------------------------- */

 function calcCircumference(radius){
    const circumference = 2 * Math.PI * radius;
    return circumference.toFixed(2);
 }

 function calcArea(radius){
    const area = Math.PI * Math.pow(radius, 2);
    return area.toFixed(2);
 }


console.log(`The Circumference is: ${calcCircumference(10)}`);
console.log(`The Area is: ${calcArea(5)}`);


/* --------------------------------------------------------------------------------- */