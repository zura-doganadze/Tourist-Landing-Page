var emailField = document.getElementById("email-field")
// var emailLabel = document.getElementById("email-label")

var emailError = document.getElementById("email-error")

// const regex = (((((/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)))));

const buttonSubmit = document.getElementById("button");

buttonSubmit.addEventListener("click", function validateEmail() {
    // emailLabel.style.bottom = "45px"

    if(!emailField.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        // emailError.innerHTML = "please enter a valid email address";
        emailField.style.borderColor = "red";
        emailError.style.stop = "120%"
        return false
    }


    // emailError.innerHTML = ""
    emailField.style.borderColor = "green";
    emailError.style.stop = "100%"
    return true

})

