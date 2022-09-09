const inputContainer = document.getElementById("input-container");
const countDownForm = document.getElementById("countdownForm");
const dateEl = document.getElementById("date-picker");

// Set Date Input Min with Today's Date
const today = new Date().toISOString().split("T")[0];
dateEl.setAttribute("min", today);

// Take Values from Form Input
function updateCountdown(event) {
  // Use preventDefault method to stop submit event from refreshing the page, to get data from form instead of the page
  event.preventDefault();
  console.log(event);
}

// Event Listerners
countDownForm.addEventListener("submit", updateCountdown);
