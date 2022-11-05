const form = document.getElementById("form");
const password1 = document.getElementById("password1");
const password2 = document.getElementById("password2");
const messageContainer = document.querySelector(".message-container");
const message = document.getElementById("message");

let isValid = false;

function validateForm() {
  // Using Constraint API
  isValid = form.checkValidity();
  //   Style main message for an error
  message.textContent = "Please fill out all fields."
  message.style.color = 'red';
  messageContainer.style.
  console.log(isValid);
}

function processFormDate(e) {
  e.preventDefault();
  //   console.log(e);

  //   Validate Form
  validateForm();
}

// Event Listener
form.addEventListener("submit", processFormDate);
