// Get elements
const signUpForm = document.getElementById('signupForm');
const loginForm = document.getElementById('loginForm');
const showSignUp = document.getElementById('showSignUp');
const showLogin = document.getElementById('showLogin');

// Toggle to show the sign-up form
showSignUp.addEventListener('click', (event) => {
    event.preventDefault();
    signUpForm.classList.remove('hidden');
    loginForm.classList.add('hidden');
});

// Toggle to show the login form
showLogin.addEventListener('click', (event) => {
    event.preventDefault();
    loginForm.classList.remove('hidden');
    signUpForm.classList.add('hidden');
});
