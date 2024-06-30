// //event task1
// var message = "Hello JavaScript";
// alert(message);


// //event task1 > 1
// var message1 = prompt("enter something:");
// alert(message1);


// //event task 1.1
// var input = prompt("Enter between 1 and 3");
// switch(input){
//     case '1':
//         alert("you entered 1");
//         break;
//     case '2':
//         alert("You Entered 2");
//         break;
//     case '3':
//         alert("You entered 3");
//         break;
//     default :
//         alert("You entered invalid option");
//         break;
// }


// //event task 2
// function display() {
//     var input = document.getElementById("usrinput").value;
//     alert("You entered: " + input);
// }


//event task 3
// function Checkdata(){
//     let input1 = document.getElementById("usrinput1").value;
//     let input2 = document.getElementById("usrinput2").value;
//     if (input1==input2){
//         alert("Both data are same");
//     }
// }


//event task4
// function validate() {
// var input1 = document.getElementById("usrinput1").value;
// var input2 = document.getElementById("usrinput2").value;
// if (input1 === "") {
//     alert("input1 has no data, please enter details to validate");
// } else if (input2 === "") {
//     alert("input2 has no data, please enter data to validate");
// } else {
//     alert("Success");
// }
// }


// //event task 5
//     function performCalc(){
//         let number1 = parseInt(document.getElementById('input1').value);
//         let number2 = parseInt(document.getElementById('input2').value);
//         if (isNaN(number1) || isNaN(number2)){
//             document.write("Enter an valid number");    
//         }
//         var add = number1 + number2;
//         var sub = number1 - number2;
//         var mul = number1 * number2;
//         var div = number1 / number2;
//     document.getElementById('Add').innerHTML="Addition: "+ add;
//     document.getElementById('Sub').innerHTML="Subtraction: "+ sub;
//     document.getElementById('Mul').innerHTML="Multiplication: "+ mul;
//     document.getElementById('Div').innerHTML="Division: "+ div;}

//event task 6

        // // Function to add integer to select dropdown
        // function addInteger() {
        //     var input = document.getElementById("integerInput").value.trim();
        //     // Validate input to ensure it's a valid integer
        //     if (!input.match(/^\d+$/)) {
        //         alert("Please enter a valid integer.");
        //         return;
        //     }
        //     // Convert input to integer
        //     var integer = parseInt(input);
        //     // Get select dropdown element
        //     var selectBox = document.getElementById("integerList");
        //     // Create an option element
        //     var option = document.createElement("option");
        //     option.text = integer;
        //     option.value = integer;
        //     // Add option to select box
        //     selectBox.add(option);
        //     // Clear input field after adding
        //     document.getElementById("integerInput").value = "";
        // }

// event task 10
        // function createPassword() {
        //     var name = document.getElementById("nameInput").value.trim();
        //     var dob = document.getElementById("dobInput").value;    
        //     if (name === "" || dob === "") {
        //         alert("Please enter your name and date of birth.");
        //         return;
        //     }
        //     var firstFourLetters = name.slice(0, 4).toLowerCase(); 
        //     var formattedDOB = dob.replaceAll("-", "");
        //     var generatedPassword = firstFourLetters + formattedDOB;
        //     document.getElementById("password").value = generatedPassword;
        // }

// event task 11
        // function calculateDates() {
        //     var inputDate = new Date(document.getElementById("userDate").value);
        //     if (isNaN(inputDate)) {
        //         alert("Please enter a valid date.");
        //         return;
        //     }
        //     var dateBefore = new Date(inputDate);
        //     dateBefore.setDate(inputDate.getDate() - 5);
        //     var dateAfter = new Date(inputDate);
        //     dateAfter.setDate(inputDate.getDate() + 5);
        //     var formattedDateBefore = dateBefore.toISOString().split('T')[0];
        //     var formattedDateAfter = dateAfter.toISOString().split('T')[0];
        //     document.getElementById("dateBefore").value = formattedDateBefore;
        //     document.getElementById("dateAfter").value = formattedDateAfter;
        // }