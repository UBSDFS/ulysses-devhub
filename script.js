// Prompt user for their name
let userName = prompt("What is your name?");

// Handle case where user cancels the prompt or enters an empty name
if (!userName || userName.trim() === "") {
    userName = "Guest";
}

// Select the element
let message = document.getElementById("welcome-message");

// Update the content dynamically
message.textContent = `Welcome, ${userName}! Explore my projects and feel free to connect!`;