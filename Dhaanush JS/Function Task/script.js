//Function Task 1
function getNationBird() {
     return "peacock";
}
console.log(getNationBird());

//function task 2
function greet() {
    return "Hello! Have a nice day";
}
console.log(greet());

//function task 3
function sum(a,b){
    return a+b;
}
console.log(sum(200,300));

//function task 4
function avg() {
    var a= 3;
    var b=5;
    return (a+b)/2;
}
console.log(avg());

//function task 5

function greetwithname(name){
    return "Hi" + name;
}
console.log(greetwithname(" Dhaanush"));

//function task 6
function convertminutestoseconds (minutes) {
   return minutes * 60;
}
console.log(convertminutestoseconds(2));

//function task 7
function findLargest(){
    var num1 = 10;
    var num2 = 20;
    var num3 = 30;
    if (num1>num2 && num1>num2) {
        console.log("num1 is Largest");
    }
    else if(num2>num1 && num2>num3) {
        console.log("num2 is Largest");
    }
    else{
        console.log("num3 is Largest");
    }
}
findLargest();

//function task 8
function findTriangleType(side1,side2,side3){
    if (side1 === side2 && side2 === side3){
        console.log("Equilateral triangle");
    }
    else if(side1===side2 || side2===side3 || side1 === side3) {
        console.log("Isosceles triangle");
    }
    else {
        console.log("Scalable Triangle");
    }
}
findTriangleType(5,5,2);
findTriangleType(5,5,5);
findTriangleType(3,4,5);

//function task 9
function checkInRange(num , start, end){
    if (num>=start && num<=end){
        console.log("Between the Range");
    }
    else {
        console.log("Outof Range");
    }
}
checkInRange(5,7,10);
checkInRange(16,14,20);

//function task10 
function evalNumbers(num1 , num2, operation) {
 switch(operation) {
    case "add":
     console.log(num1 + num2);
     break;
    case "subtract":
    console.log(num1 - num2);
    break;
    case "Multiply":
        console.log(num1 * num2);
        break;
    case "Divide":
        console.log(num1 / num2);
     break;
    case "Modulus":
        console.log(num1 % num2);
        break;
 }
}
evalNumbers(10, 5, "add");
evalNumbers(10, 5, "subtract");
evalNumbers(10, 5, "multiply");
evalNumbers(10, 5, "divide");
evalNumbers(10, 5, "modulus");

//function task 11
function checkLeapYear(year){
    if ((year %4 === 0 && year % 100 !==0 || year % 400 === 0)) {
        console.log("Leap Year");
    }
    else {
        console.log("Not Leap Year");
    }
}
checkLeapYear(2020);
checkLeapYear(2021);

//function task 12
function findGrade(marks) {
    if (marks >= 90 && marks <= 100) {
      console.log("S grade");
    } else if (marks >= 80 && marks < 90) {
      console.log("A grade");
    } else if (marks >= 70 && marks < 80) {
      console.log("B grade");
    } else if (marks >= 60 && marks < 70) {
      console.log("C grade");
    } else if (marks >= 50 && marks < 60) {
      console.log("D grade");
    } else if (marks >= 40 && marks < 50) {
      console.log("E grade");
    } else if (marks >= 0 && marks < 40) {
      console.log("Student has failed");
    } else {
      console.log("Invalid marks");
    }
  }
  
  findGrade(95); // Output: S grade
  findGrade(85); // Output: A grade
  findGrade(75); // Output: B grade
  findGrade(65); // Output: C grade
  findGrade(55); // Output: D grade
  findGrade(45); // Output: E grade
  findGrade(35); // Output: Student has failed

  //function task 13
  function findDaysInMonth(month, year) {
    if (month < 1 || month > 12) {
      console.log("Invalid month");
    } else if (month === 2) {
      if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        console.log("The Month has 29 days.");
      } else {
        console.log("The Month has 28 days.");
      }
    } else if (month === 4 || month === 6 || month === 9 || month === 11) {
      console.log("The Month has 30 days.");
    } else {
      console.log("The Month has 31 days.");
    }
  }
  
  findDaysInMonth(2, 2012); // Output: The Month has 29 days.
  findDaysInMonth(4, 2021); // Output: The Month has 30 days.
  findDaysInMonth(1, 2023); // Output: The Month has 31 days.
  findDaysInMonth(13, 2023); // Output: Invalid month