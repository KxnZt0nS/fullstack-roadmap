const containers = document.querySelectorAll(".languages-container");
const backLeftBtn = document.getElementById("back-left-btn");
const nextRightBtn = document.getElementById("next-right-btn");
const backUpBtn = document.getElementById("back-up-btn");
const nextDownBtn = document.getElementById("next-down-btn");
const btns = document.querySelectorAll(".btns");
const moonIcon = document.getElementById("moon-icon");
const sunIcon = document.getElementById("sun-icon");
const body = document.getElementById("body");
const advancedLink = document.getElementById("advanced-link");

let currentIndex = 0;
backLeftBtn.style.display = "none";
backUpBtn.style.display = "none";

function showContainer(index) {
    containers.forEach((container, i) => {
        if (i === index) {
            container.classList.remove('none');
        } else {
            container.classList.add('none');
        }
    });
}

//! Fix the functionality of the buttons to work properly

function goBackLeft() {
    if (currentIndex > 0) {
        currentIndex--;
        showContainer(currentIndex);
        nextRightBtn.style.display = "block";
        if (currentIndex === 0) {
            backLeftBtn.style.display = "none";
        }
        else {
            backLeftBtn.style.display = "block";
        }
    }
}

function goNextRight() {
    if (currentIndex < containers.length - 1) {
        currentIndex++;
        showContainer(currentIndex);
        backLeftBtn.style.display = "block";
        if (currentIndex === containers.length - 1) {
            nextRightBtn.style.display = "none";
        }
        else {
            nextRightBtn.style.display = "block";
        }
    }
}

function goBackUp() {
    if (currentIndex > 0) {
        currentIndex--;
        showContainer(currentIndex);
        nextDownBtn.style.display = "block";
        if (currentIndex === 0) {
            backUpBtn.style.display = "none";
        }
        else {
            backUpBtn.style.display = "block";
        }
    }
}

function goNextDown() {
    if (currentIndex < containers.length - 1) {
        currentIndex++;
        showContainer(currentIndex);
        backUpBtn.style.display = "block";
        if (currentIndex === containers.length - 1) {
            nextDownBtn.style.display = "none";
        }
        else {
            nextDownBtn.style.display = "block";
        }
    }
}

function darkMode() {
    body.style.backgroundColor = "var(--primary-color)";
    body.style.color = "var(--secondary-color)";
    advancedLink.style.color = "var(--secondary-color)";
    advancedLink.addEventListener("mouseover", function() {
        advancedLink.style.color = "var(--hover-color)";
    });
    advancedLink.addEventListener("mouseout", function() {
        advancedLink.style.color = "var(--secondary-color)";
    });
    btns.forEach(btn => {
        btn.style.color = "var(--secondary-color)";
    });
    btns.forEach(btn => {
        btn.addEventListener("mouseover", function() {
            btn.style.color = "var(--hover-color)";
        });
        btn.addEventListener("mouseout", function() {
            btn.style.color = "var(--secondary-color)";
        });
    });
    moonIcon.classList.add("none");
    sunIcon.classList.remove("none");
    containers.forEach(container => {
        container.style.backgroundColor = "var(--fullstack-dark-bgcolor)";
    });
}

function lightMode() {
    body.style.backgroundColor = "var(--secondary-color)";
    body.style.color = "var(--primary-color)";
    advancedLink.style.color = "var(--primary-color)";
    advancedLink.addEventListener("mouseover", function() {
        advancedLink.style.color = "var(--hover-color)";
    });
    advancedLink.addEventListener("mouseout", function() {
        advancedLink.style.color = "var(--primary-color)";
    });
    btns.forEach(btn => {
        btn.style.color = "var(--primary-color)";
    });
    btns.forEach(btn => {
        btn.addEventListener("mouseover", function() {
            btn.style.color = "var(--hover-color)";
        });
        btn.addEventListener("mouseout", function() {
            btn.style.color = "var(--primary-color)";
        });
    });
    sunIcon.classList.add("none");
    moonIcon.classList.remove("none");
    moonIcon.style.color = "var(--primary-color)";
    moonIcon.addEventListener("mouseover", function() {
        moonIcon.style.color = "var(--hover-color)";
    });
    moonIcon.addEventListener("mouseout", function() {
        moonIcon.style.color = "var(--primary-color)";
    });
    containers.forEach(container => {
        container.style.backgroundColor = "var(--fullstack-light-bgcolor)";
    });
}