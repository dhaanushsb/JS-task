// Using the square function

var square;

square = function (numberToSquare) {
  var result;
  result = numberToSquare * numberToSquare;
  console.log(numberToSquare + " * " + numberToSquare + " = " + result);
};

square(10);
square(-2);
square(1111);
square(0.5);

var cube;
cube = function(numberToCube){
    var cube = Math.pow(numberToCube, 3);
    console.log("The cube of " +numberToCube + " is: " + cube);
}
cube(4);
cube(5);
cube(99);
cube(10);

var squareRoot;
squareRoot = function(numberToSqrt){
    var squareRoot = Math.sqrt(numberToSqrt);
    console.log("The Square Root of " + numberToSqrt + " is: " + squareRoot);
}
squareRoot(4);
squareRoot(81);
squareRoot(25);
squareRoot(1000);




/* Further Adventures
 *
 * 1) Define a cube function that cubes
 *    any number passed in as an argument.
 *
 * 2) Call your cube function four times
 *    with different arguments to test it.
 *
 * Math.sqrt is a built-in function to find
 * the square root of a number.
 * e.g. Math.sqrt(9) finds the square root of 9.
 *
 * 3) Define and test a squareRoot function
 *    to find square roots and display
 *    them on the console.
 *    e.g. The square root of 9 is 3.
 *
 */