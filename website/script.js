function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple validation for email format and password requirement
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const specialCharPattern = /[@#$%^&*!]/; // Checks for special characters

    // If username or password is empty, redirect to 'anotherpage.html'
    if (username.trim() === '' || password.trim() === '') {
        window.location.href = 'anotherpage.html';  // Redirect to another page if incomplete
    } 
    // If email is invalid
    else if (!emailPattern.test(username)) {
        alert('Please enter a valid email address');
    } 
    // If password does not meet the special character requirement
    else if (!specialCharPattern.test(password)) {
        alert('Password must include at least one special character (e.g., @, #, $, etc.)');
    } 
    else {
        // If "Remember Me" is checked, store the credentials
        if (document.getElementById('remember-me').checked) {
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
        }
        // If all validations pass, proceed to login
        window.location.href = 'web1.html';
    }
}

// Forgot Password logic
function forgotPassword() {
    const email = prompt('Please enter your email address to reset your password:');
    if (email && validateEmail(email)) {
        alert('A password reset link has been sent to ' + email);
    } else {
        alert('Please enter a valid email address.');
    }
}

// Create Account logic
function createAccount() {
    const newUsername = document.getElementById('new-username').value;
    const newPassword = document.getElementById('new-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Basic password match check
    if (newPassword !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    // Add any additional validation for username or password (e.g., regex for email)

    // Simulate account creation success
    alert('Account created successfully!');
    document.getElementById('create-account-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
}

// Show the Create Account form
function showCreateAccount() {
    document.getElementById('create-account-form').style.display = 'block';
    document.getElementById('login-form').style.display = 'none';
}

// Email validation helper function
function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
}