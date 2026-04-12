// Prompt user for their name
let userName = prompt("What is your name?");

// Set default name if user cancels or enters an empty string
if (!userName || userName.trim() === "") {
    userName = "Guest";
}

// Select the element
let message = document.getElementById("welcome-message");

// message to display personalized welcome message with user's name
message.textContent = `Welcome, ${userName}! Explore my projects and feel free to connect!`;