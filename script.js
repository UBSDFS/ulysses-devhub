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

document.addEventListener("DOMContentLoaded", function () {

    // SKILLS LIST (LOOP)
 
    const skills = ["HTML", "CSS", "JavaScript", "Git", "GitHub"];
    const skillsList = document.getElementById("skillsList");

    skills.forEach(function (skill) {
        const li = document.createElement("li");
        li.textContent = skill;
        skillsList.appendChild(li);
    });


  
    // CONDITIONAL FEATURED CONTENT
    
    const projects = document.querySelectorAll(".project-card");

    const universityDiv = document.getElementById("universityResources");
    const personalDiv = document.getElementById("personalProjects");

    if (projects.length < 3) {
        universityDiv.style.display = "block";
        personalDiv.style.display = "block";
    } else {
        universityDiv.style.display = "none";
        personalDiv.style.display = "block";
    }


   
    // DARK MODE TOGGLE
    
    const toggle = document.getElementById("darkModeToggle");

    toggle.addEventListener("change", function () {
        document.body.classList.toggle("dark-mode");
    });



    // FORM SUBMIT INTERACTION
    // Timed confirmation for contact form
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    let formMessage = document.getElementById("formMessage");

    if (!formMessage) {
        formMessage = document.createElement("p");
        formMessage.id = "formMessage";
        contactForm.appendChild(formMessage);
    }

    formMessage.textContent = "Sending message...";

    setTimeout(function() {
        formMessage.textContent = "Message sent successfully!";
    }, 2500);
});
    
  /*  const form = document.getElementById("contactForm");
    const submitBtn = document.getElementById("submitBtn");

    submitBtn.addEventListener("click", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();

        if (name === "") {
            alert("Please enter your name.");
            return;
        }

        alert(`Thank you, ${name}, your message has been sent!`);

        form.reset();
    });

*/

// Dynamically add a new project message to the Projects section
const projectsSection = document.getElementById("projects");

const projectMessage = document.createElement("p");
projectMessage.textContent = "Recent Project: I am currently building a JavaScript-powered portfolio with dynamic page features.";
projectMessage.classList.add("project-message");

projectsSection.appendChild(projectMessage);


// Select and modify existing elements
const mainHeading = document.querySelector("h1");
mainHeading.textContent = "Ulysses Burden | Software Developer Portfolio";

const aboutSection = document.getElementById("about");
aboutSection.style.border = "2px solid #444";
aboutSection.style.padding = "50px";
aboutSection.style.margin = "20px 0";
});
