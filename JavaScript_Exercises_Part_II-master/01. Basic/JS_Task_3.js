// Write a JavaScript program to compute the sum of the two given integers. 
// If the two values are the same, then return triple their sum.  

/* --------------------------------------------------------------------------------- */
    let a = parseInt(prompt("Enter the number1:"));
    let b = parseInt(prompt("Enter the number2:"));
    let c = a + b;

    if (a===b){
        let sum = c*3;
        console.log(`sum is tripled ${sum}`);
    }
    else{
        console.log(`sum of two number is ${c}`);
    }
/* --------------------------------------------------------------------------------- */