// Adding an event listener to the form to handle the submit action
document.getElementById("loginForm").addEventListener("submit", function(event) {
    // Prevent the default form submission to avoid page refresh
    event.preventDefault();

    // Get the values entered by the user in the username and password fields
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Check if both username and password are filled
    if (username && password) {
        // If valid, show a welcome message and reset the form
        alert("Welcome back, " + username + "!");
        document.getElementById("loginForm").reset(); // Reset the form after successful login
    } else {
        // If either field is empty, show an alert
        alert("Please enter both username and password.");
    }
});
