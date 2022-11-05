const form = document.getElementById("form");
const password1El = document.getElementById("password1");
const password2El = document.getElementById("password2");
const messageContainer = document.querySelector(".message-container");
const message = document.getElementById("message");

let isValid = false;
let passwordMatch = false;

function validateForm() {
  // Using Constraint API
  isValid = form.checkValidity();
  //   Style main message for an error

  if(isValid){
    message.textContent = "Please fill out all fields.";
    message.style.color = "red";
    messageContainer.style.borderColor = "red";
    // console.log(isValid);
  }

//   Check to see if password match
if(password1El.value === password2El.value){
    passwordMatch = true;
    password1El.style.borderColor = 'green';
    password2El.style.borderColor = 'green';
}else{
    passwordMatch = false;
    message.textContent = "Make sure password match."
    message.style.color = 'red'
}


function processFormDate(e) {
  e.preventDefault();
  //   console.log(e);

  //   Validate Form
  validateForm();
}

// Event Listener
form.addEventListener("submit", processFormDate);
