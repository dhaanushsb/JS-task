function generatePassword() {
    // Get the name and email from the form
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;

    // Check if the name is at least 4 characters long
    if (name.length < 4) {
        alert('Name must be at least 4 characters long.');
        return;
    }

    // Extract the first 4 letters of the name
    var namePart = name.substring(0, 4);

    // Extract the last 4 letters of the email
    var emailPart = email.substring(email.length - 4);

    // Combine the two parts to form the password
    var password = namePart + emailPart;

    // Display the result
    document.getElementById('result').innerText = 'Generated Password: ' + password;

    //clear the result
    document.getElementById('name').value ="";
    document.getElementById('email').value ="";
}
