// Write a program that
    // a. Store correct password in a JS variable.
    // b. Asks user to enter his/her password
    // c. Validate the two passwords:
        // i. Check if user has entered password. If not, then give message “ Please enter your password”
        // ii. Check if both passwords are same. If they are same, show message “Correct! The password you entered matches the original password”. Show "Incorrect password" otherwise.

/* --------------------------------------------------------------------------------- */
let CorrectPassword = "Dhaanush#321";
let EnterPassword = prompt("Enter your Password:");

if (EnterPassword === "") {
    console.log("Please enter your password");
} else if (CorrectPassword === EnterPassword) {
    console.log("Correct! The password you entered matches the original password");
} else {
    console.log("Incorrect password");
}

/* --------------------------------------------------------------------------------- */