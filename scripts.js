document.addEventListener('DOMContentLoaded', function () {
    updateBackground();
});

function updateBackground() {
    const hour = new Date().getHours();
    const body = document.body;
    
    if (hour >= 6 && hour < 12) {
        body.style.background = "linear-gradient(to right, #FFDD89, #F6AE2D)"; // Morning
    } else if (hour >= 12 && hour < 18) {
        body.style.background = "linear-gradient(to right, #83a4d4, #b6fbff)"; // Afternoon
    } else if (hour >= 18 && hour < 20) {
        body.style.background = "linear-gradient(to right, #FEA47F, #F8C537)"; // Evening
    } else {
        body.style.background = "linear-gradient(to right, #2C3E50, #4CA1AF)"; // Night
    }
}

function validateForm() {
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();

    if (username === "" || email === "" || password === "" || confirmPassword === "") {
        alert("All fields are required!");
        return false;
    }
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return false;
    }
    return true;
}

