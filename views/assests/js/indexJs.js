// Function to update the location in the dropdown button
function updateLocation(city) {
    document.getElementById('locationBtn').innerHTML = `${city} <span class="arrow">&#9660;</span>`;
}

// Handle Signup Form Display
function showSignupDialog() {
    document.getElementById("signupDialog").style.display = "block";
    document.getElementById("loginDialog").style.display = "none";
}

function hideSignupDialog() {
    document.getElementById("signupDialog").style.display = "none";
}

// Handle Login Form Display
function showLoginDialog() {
    document.getElementById("loginDialog").style.display = "block";
    document.getElementById("signupDialog").style.display = "none";
}

function hideLoginDialog() {
    document.getElementById("loginDialog").style.display = "none";
}

// Sign Up functionality (Save user data in localStorage)



// Login functionality (Check credentials and log the user in)
document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent page reload on form submit
    const emailOrPhone = document.getElementById("loginPhoneOrEmail").value;
    const password = document.getElementById("loginPassword").value;

    const storedUser = JSON.parse(localStorage.getItem(emailOrPhone)); // Retrieve user data from localStorage

    if (!storedUser || storedUser.password !== password) {
        showFailureDialog("Invalid credentials. Please try again.");
        return;
    }

    showSuccessDialog("Login Successful!");
    showUser(emailOrPhone); // Show user's email or phone number
    hideLoginDialog(); // Close login dialog
});

// Show Success Dialog
function showSuccessDialog(message) {
    const successDialog = document.getElementById('successDialog');
    successDialog.querySelector('.message').textContent = message;
    successDialog.style.display = 'block';
}

// Close the Success Dialog
function closeSuccessDialog() {
    document.getElementById('successDialog').style.display = 'none';
}

// Show Failure Dialog
function showFailureDialog(message) {
    const failureDialog = document.getElementById('failureDialog');
    failureDialog.querySelector('.message').textContent = message;
    failureDialog.style.display = 'block';
}

// Close the Failure Dialog
function closeFailureDialog() {
    document.getElementById('failureDialog').style.display = 'none';
}

// Function to show the user's email or phone and a logout button
function showUser(emailOrPhone) {
    // Hide login and signup buttons
    const authButtons = document.querySelector('.auth-buttons');
    authButtons.style.display = 'none';

    // Display the user's email or phone number
    const nav = document.querySelector('nav');
    const userContainer = document.createElement('div');
    userContainer.className = 'user-container';

    const userDisplay = document.createElement('span');
    userDisplay.className = 'user-display';
    userDisplay.textContent = `Welcome, ${emailOrPhone}`;

    const logoutButton = document.createElement('button');
    logoutButton.className = 'logout-button';
    logoutButton.textContent = 'Logout';
    logoutButton.addEventListener('click', logoutUser);

    userContainer.appendChild(userDisplay);
    userContainer.appendChild(logoutButton);
    nav.appendChild(userContainer);
}

// Function to handle logout
function logoutUser() {
    // Remove user display and show login/signup buttons
    const userContainer = document.querySelector('.user-container');
    if (userContainer) userContainer.remove();

    const authButtons = document.querySelector('.auth-buttons');
    authButtons.style.display = 'block';
}

// Validation for date-time fields
function validateDateTime() {
    const fromDateTime = new Date(document.getElementById("from-date-time").value);
    const tillDateTime = new Date(document.getElementById("till-date-time").value);

    if (fromDateTime >= tillDateTime) {
        alert("The 'Till' date must be later than the 'From' date.");
        return false;
    }
    return true;
}

document.getElementById('rentNowBtn').addEventListener('click', function () {
    window.location.href = 'E:\\TranspoRent\\views\\selectionHtml.html';
});

// Toggle the chatbot popup
function toggleChatbot() {
    const chatbotPopup = document.getElementById('chatbotPopup');
    chatbotPopup.style.display = chatbotPopup.style.display === 'none' || chatbotPopup.style.display === '' 
        ? 'block' 
        : 'none';
}

// Send a message in the chatbot
function sendMessage() {
    const userInput = document.getElementById('userInput');
    const chatbotBody = document.getElementById('chatbotBody');

    if (userInput.value.trim() === '') return;

    // Add user message
    const userMessage = document.createElement('p');
    userMessage.className = 'user-message';
    userMessage.textContent = userInput.value;
    chatbotBody.appendChild(userMessage);

    // Clear the input
    const message = userInput.value.trim();
    userInput.value = '';

    // Auto-scroll to the bottom
    chatbotBody.scrollTop = chatbotBody.scrollHeight;

    // Add bot response
    setTimeout(() => {
        const botMessage = document.createElement('p');
        botMessage.className = 'bot-message';
        botMessage.textContent = "I'm here to help!";
        chatbotBody.appendChild(botMessage);
        chatbotBody.scrollTop = chatbotBody.scrollHeight;
    }, 1000);
}

// Hide chatbot popup initially
window.onload = () => {
    document.getElementById('chatbotPopup').style.display = 'none';
};

function toggleFAQ() {
    const faqSection = document.getElementById('faqSection');
    faqSection.classList.toggle('hidden');
}

// Show Signup Dialog
function showSignupDialog() {
    document.getElementById("signupDialog").style.display = "block";
    document.getElementById("loginDialog").style.display = "none";
}

// Hide Signup Dialog
function hideSignupDialog() {
    document.getElementById("signupDialog").style.display = "none";
}

// Show Login Dialog
function showLoginDialog() {
    document.getElementById("loginDialog").style.display = "block";
    document.getElementById("signupDialog").style.display = "none";
}

// Hide Login Dialog
function hideLoginDialog() {
    document.getElementById("loginDialog").style.display = "none";
}

// Handle Sign Up Form Submit
document.getElementById("signupForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form reload

    const emailOrPhone = document.getElementById("signupPhoneOrEmail").value;
    const password = document.getElementById("signupPassword").value;
    const confirmPassword = document.getElementById("signupConfirmPassword").value;

    if (password !== confirmPassword) {
        showFailureDialog("Passwords do not match!");
        return;
    }

    // Check if user already exists
    const existingUser = localStorage.getItem(emailOrPhone);
    if (existingUser) {
        showFailureDialog("User already exists with this phone/email.");
        return;
    }

    const user = { emailOrPhone, password };
    localStorage.setItem(emailOrPhone, JSON.stringify(user)); // Save user data in localStorage
    showSuccessDialog("Sign Up Successful!");
    hideSignupDialog();
});

// Handle Login Form Submit
document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form reload

    const emailOrPhone = document.getElementById("loginPhoneOrEmail").value;
    const password = document.getElementById("loginPassword").value;

    const storedUser = JSON.parse(localStorage.getItem(emailOrPhone)); // Retrieve user data from localStorage

    if (!storedUser || storedUser.password !== password) {
        showFailureDialog("Invalid credentials. Please try again.");
        return;
    }

    showSuccessDialog("Login Successful!");
    hideLoginDialog();
});

// Show Success Dialog
function showSuccessDialog(message) {
    const successDialog = document.getElementById('successDialog');
    successDialog.querySelector('.message').textContent = message;
    successDialog.style.display = 'block';
}

// Close the Success Dialog
function closeSuccessDialog() {
    document.getElementById('successDialog').style.display = 'none';
}

// Show Failure Dialog
function showFailureDialog(message) {
    const failureDialog = document.getElementById('failureDialog');
    failureDialog.querySelector('.message').textContent = message;
    failureDialog.style.display = 'block';
}

// Close the Failure Dialog
function closeFailureDialog() {
    document.getElementById('failureDialog').style.display = 'none';
}

function togglePasswordVisibility() {
    var passwordField = document.getElementById("signupPassword");
    var confirmPasswordField = document.getElementById("signupConfirmPassword");
    var passwordCheckbox = document.getElementById("showPassword");

    if (passwordCheckbox.checked) {
        passwordField.type = "text";
        confirmPasswordField.type = "text";
    } else {
        passwordField.type = "password";
        confirmPasswordField.type = "password";
    }
}

// Toggle password visibility for signup form
document.getElementById('signupShowPassword').addEventListener('change', function() {
    const passwordField = document.getElementById('signupPassword');
    const confirmPasswordField = document.getElementById('signupConfirmPassword');
    if (this.checked) {
        passwordField.type = 'text';
        confirmPasswordField.type = 'text';
    } else {
        passwordField.type = 'password';
        confirmPasswordField.type = 'password';
    }
});

// Toggle password visibility for login form
document.getElementById('loginShowPassword').addEventListener('change', function() {
    const passwordField = document.getElementById('loginPassword');
    if (this.checked) {
        passwordField.type = 'text';
    } else {
        passwordField.type = 'password';
    }
});
