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
    message.textContent = "Make sure password match.";
    message.style.color = 'red';
    messageContainer.style.borderColor = 'red';
    password1El.style.borderColor = 'red';
    password2El.style.borderColor = 'red';
}

// if form is valid and password match
if(isValid && passwordMatch){
    message.textContent = "Successfully Registered!";
    message.style.color = 'green';
    messageContainer.style.borderColor = 'green';
}

function storeFormData(){
    const user ={
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        website: form.website.value,
        password: form.password.value
    }
    console.log(user)
}

function processFormData(e) {
  e.preventDefault();
  //   console.log(e);

  //   Validate Form
  validateForm();
//   submit date if valid
if(isValid && passwordMatch){
    
}
}



// Event Listener
form.addEventListener("submit", processFormData);
