let emailField = document.getElementById("email-field")
const buttonSubmit = document.getElementById("button");

buttonSubmit.addEventListener("click", function validateEmail() {

    if(!emailField.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailField.style.borderColor = "red";
        return false
    }
    emailField.style.borderColor = "green";
    return true
});