const calculatorDisplay = document.querySelector("h1");
const inputBtns = document.querySelectorAll("button");
const clearBtn = document.getElementById("clear-btn");

function sendNumberValue(number) {
  console.log(number);
}

// Add event listeners for numbers, operators, decimal buttons
inputBtns.forEach((inputBtn) => {
  if (inputBtn.classList.length === 0) {
    inputBtn.addEventListener("click", sendNumberValue(0));
  } else if (inputBtn.classList.contains("operator")) {
    inputBtn.addEventListener("click", sendNumberValue(0));
  } else if(){
    
  }
});
