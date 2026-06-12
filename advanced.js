const moonIcon = document.getElementById("moon-icon");
const sunIcon = document.getElementById("sun-icon");
const body = document.getElementById("body");
const fullstackContainer = document.getElementById("fullstack-container");
const jobnamesContainer = document.getElementById("jobnames-container");
const frontendTitle = document.getElementById("frontend-title");
const backendTitle = document.getElementById("backend-title");
const frontendContainer = document.getElementById("frontend-container");
const backendContainer = document.getElementById("backend-container");
const gratitudeContainer = document.getElementById("gratitude-container");
const detailsContainerLinks = document.querySelectorAll(".details-container a");

function darkMode() {
    moonIcon.classList.add("none");
    sunIcon.classList.remove("none");
    body.style.backgroundColor = "var(--primary-color)";
    body.style.color = "var(--secondary-color)";
    fullstackContainer.style.backgroundColor = "var(--fullstack-dark-bgcolor)";
    jobnamesContainer.style.borderColor = "var(--primary-color)";
    frontendTitle.style.color = "var(--secondary-color)";
    backendTitle.style.color = "var(--secondary-color)";
    frontendTitle.addEventListener("mouseover", function() {
        frontendTitle.style.color = "var(--light-hover-color)";
    });
    frontendTitle.addEventListener("mouseout", function() {
        frontendTitle.style.color = "var(--secondary-color)";
    });
    backendTitle.addEventListener("mouseover", function() {
        backendTitle.style.color = "var(--light-hover-color)";
    });
    backendTitle.addEventListener("mouseout", function() {
        backendTitle.style.color = "var(--secondary-color)";
    });
    frontendContainer.style.backgroundColor = "var(--fullstack-dark-bgcolor)";
    backendContainer.style.backgroundColor = "var(--fullstack-dark-bgcolor)";
    gratitudeContainer.style.backgroundColor = "var(--fullstack-dark-bgcolor)";
    detailsContainerLinks.forEach(link => {
        link.style.color = "var(--secondary-color)";
        link.addEventListener("mouseover", function() {
            link.style.color = "var(--light-hover-color)";
            link.style.textDecoration = "none";
        });
        link.addEventListener("mouseout", function() {
            link.style.color = "var(--secondary-color)";
            link.style.textDecoration = "underline";
        });
    });
}

function lightMode() {
    sunIcon.classList.add("none");
    moonIcon.classList.remove("none");
    body.style.backgroundColor = "var(--secondary-color)";
    body.style.color = "var(--primary-color)";
    fullstackContainer.style.backgroundColor = "var(--fullstack-light-bgcolor)";
    jobnamesContainer.style.borderColor = "var(--secondary-color)";
    frontendTitle.style.color = "var(--primary-color)";
    backendTitle.style.color = "var(--primary-color)";
    frontendTitle.addEventListener("mouseover", function() {
        frontendTitle.style.color = "var(--dark-hover-color)";
    });
    frontendTitle.addEventListener("mouseout", function() {
        frontendTitle.style.color = "var(--primary-color)";
    });
    backendTitle.addEventListener("mouseover", function() {
        backendTitle.style.color = "var(--dark-hover-color)";
    });
    backendTitle.addEventListener("mouseout", function() {
        backendTitle.style.color = "var(--primary-color)";
    });
    frontendContainer.style.backgroundColor = "var(--fullstack-light-bgcolor)";
    backendContainer.style.backgroundColor = "var(--fullstack-light-bgcolor)";
    gratitudeContainer.style.backgroundColor = "var(--fullstack-light-bgcolor)";
    detailsContainerLinks.forEach(link => {
        link.style.color = "var(--primary-color)";
        link.addEventListener("mouseover", function() {
            link.style.color = "var(--light-hover-color)";
            link.style.textDecoration = "none";
        });
        link.addEventListener("mouseout", function() {
            link.style.color = "var(--primary-color)";
            link.style.textDecoration = "underline";
        });
    });
}