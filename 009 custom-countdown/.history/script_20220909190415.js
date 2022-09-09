const inputContainer = document.getElementById("input-container");
const countdownForm = document.getElementById("form");
const dateEl = document.getElementById("date-picker");

const countdownEl = document.getElementById("countdown");
const countdownElTitle = document.getElementById("countdown-title");
const countdownBtn = document.getElementById("countdown-button");
const titleElements = document.querySelectorAll("span");

let countdownTitle = "";
let countdownDate = "";
let countdownValue = Date;

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

// Set Date Input Min with Today's Date
const today = new Date().toISOString().split("T")[0];
dateEl.setAttribute("min", today);

// Populate Countdown / Complete UI
function updateDOM() {
  const now = new Date().getTime();
  const distance = countdownValue - now;
  console.log("distance", distance);

  const days = Math.floor(distance / day);
  const hours = Math.floor(distance % day);
}

// Take Values from Form Input
function updateCountdown(event) {
  // Use preventDefault method to stop submit event from refreshing the page, to get data from form instead of the page
  event.preventDefault();
  countdownTitle = event.srcElement[0].value;
  countdownDate = event.srcElement[1].value;
  console.log(countdownTitle, countdownDate);

  //   Get number version of current date
  countdownValue = new Date(countdownDate).getTime();
  console.log("countdown value", countdownValue);
  updateDOM();
}

// Event Listerners
countdownForm.addEventListener("submit", updateCountdown);
