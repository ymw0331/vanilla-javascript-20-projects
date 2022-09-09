const inputContainer = document.getElementById("input-container");
const countdownForm = document.getElementById("form");
const dateEl = document.getElementById("date-picker");

const countdownEl = document.getElementById("countdown");
const countdownElTitle = document.getElementById("countdown-title");
const countdownBtn = document.getElementById("countdown-button");
const titleElements = document.querySelectorAll("span");

const completeEl = document.getElementById("complete");
const completeElInfo = document.getElementById("complete-info");
const completeBtn = document.getElementById("complete-button");

let countdownTitle = "";
let countdownDate = "";
let countdownValue = Date;
let countdownActive;
let savedCountdown;

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

// Set Date Input Min with Today's Date
const today = new Date().toISOString().split("T")[0];
dateEl.setAttribute("min", today);

// Populate Countdown / Complete UI
function updateDOM() {
  countdownActive = setInterval(() => {
    const now = new Date().getTime();
    const distance = countdownValue - now;
    // console.log("distance", distance);

    const days = Math.floor(distance / day);
    const hours = Math.floor((distance % day) / hour);
    const minutes = Math.floor((distance % hour) / minute);
    const seconds = Math.floor((distance % minute) / second);
    // console.log(days, hours, minutes, seconds);

    // Hide Input
    inputContainer.hidden = true;

    // If the countdown has ended, show complete
    if (distance < 0) {
      countdownEl.hidden = true;
      clearInterval(countdownActive);
      completeElInfo.textContent = `${countdownTitle} finished on ${countdownDate}`;
      completeEl.hidden = false;
    } else {
      // Else, show countdown in progress
      countdownElTitle.textContent = `${countdownTitle}`;
      titleElements[0].textContent = `${days}`;
      titleElements[1].textContent = `${hours}`;
      titleElements[2].textContent = `${minutes}`;
      titleElements[3].textContent = `${seconds}`;
      completeEl.hidden = true;
      countdownEl.hidden = false;
    }
  }, second);
}

// Take Values from Form Input
function updateCountdown(event) {
  // Use preventDefault method to stop submit event from refreshing the page, to get data from form instead of the page
  event.preventDefault();
  countdownTitle = event.srcElement[0].value;
  countdownDate = event.srcElement[1].value;
  savedCountdown = {
    title: countdownTitle,
    date: countdownDate,
  };
  console.log(savedCountdown);
  localStorage.setItem("countdown", JSON.stringify(savedCountdown));

  //   console.log(countdownTitle, countdownDate);

  // Check for valud date
  if (countdownDate === "") {
    alert("Please select a date for countdown");
  } else {
    //   Get number version of current date
    countdownValue = new Date(countdownDate).getTime();
    // console.log("countdown value", countdownValue);
    updateDOM();
  }
}

// Reset all values
function reset() {
  // Hide countdownd, show input
  countdownEl.hidden = true;
  inputContainer.hidden = false;

  // Stop the countdown
  clearInterval(countdownActive);

  // Reset values
  countdownTitle = "";
  countdownDate = "";

}

function restorePreviousCountdown(){
    // Get countdown from localStroage if available
    
}

// Event Listerners
countdownForm.addEventListener("submit", updateCountdown);
countdownBtn.addEventListener("click", reset);
