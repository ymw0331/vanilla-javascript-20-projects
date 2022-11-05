const form = document.getElementById("form");
const password1 = document.getElementById("password1");
const password2 = document.getElementById("password2");
const messageContainer = document.querySelector(".message-container");
const message = document.getElementById("message");

function processFormDate(e) {
  e.preventDefault();
  //   console.log(e);
  
}

// Event Listener
form.addEventListener("submit", processFormDate);
