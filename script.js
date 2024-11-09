const wrapper = document.querySelector(".wrapper");

function activeSignIn() {
  wrapper.classList.add("activeSignIn");
  wrapper.classList.remove("activeSignUp");
}

function activeSignUp() {
  wrapper.classList.add("activeSignUp");
  wrapper.classList.remove("activeSignIn");
}

function changecolor(color) {
  const bgAnimate = document.getElementById("bg-animate");

  bgAnimate.style.background = color;
  bgAnimate.classList.add("active");

  setTimeout(function () {
    bgAnimate.classList.remove("active");
  }, 1200);
}

// Function to validate sign-in form
function validateSignInForm() {
    var username = document.forms["signInForm"]["username"].value;
    var password = document.forms["signInForm"]["password"].value;

    if (username == "" || password == "") {
        alert("Please fill in all fields");
        return false;
    }
    // Additional validation logic can be added here if needed
    return true;
}

// Function to validate sign-up form
function validateSignUpForm() {
    var username = document.forms["signUpForm"]["username"].value;
    var email = document.forms["signUpForm"]["email"].value;
    var password = document.forms["signUpForm"]["password"].value;

    // Regular expression to validate email format
    var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    // Regular expression to validate password strength (at least 8 characters including at least one uppercase letter, one lowercase letter, and one digit)
    var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    if (username == "" || email == "" || password == "") {
        alert("Please fill in all fields");
        return false;
    }

    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address");
        return false;
    }

    if (!passwordRegex.test(password)) {
        alert("Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, and one digit");
        return false;
    }

    // Checking for invalid characters in username
    var invalidChars = /[!@#$%^&*(),.?":{}|<>]/;
    if (invalidChars.test(username)) {
        alert("Username cannot contain special characters");
        return false;
    }

    return true;
}