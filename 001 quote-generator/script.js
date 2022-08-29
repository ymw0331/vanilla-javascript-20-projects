const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");
const loader = document.getElementById("loader");

let apiQuotes = [];

function showLoadingSpinner() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}

function removeLoadingSpinner() {
  loader.hidden = true;
  quoteContainer.hidden = false;
}

function newQuote() {
  showLoadingSpinner();
  // Math.random() returns number from 0 to less than 1, we use this to multiply with
  // the length of apiQuote Array
  // Use Math.floor() in this case to return largest integer less than or equal
  // to a given number

  // Populate author and quote
  // Pick a random quote from apiQuotes array

  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  //Check if author field is blank and replace it with 'Unknown'
  if (!quote.author) {
    authorText.innerText = "Unknown";
  } else {
    authorText.innerText = quote.author;
  }

  //Check the quote length to determine styling, dynamically reduce font size
  if (quote.text.length > 50) {
    quoteText.classList.add("long-quote");
  } else {
    quoteText.classList.remove("long-quote");
  }
  quoteText.innerText = quote.text;
  removeLoadingSpinner();
}

// Get Quotes from API, asynchronous fetch request
async function getQuote() {
  showLoadingSpinner();
  const apiUrl = "https://type.fit/api/quotes";
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuote();
  } catch (error) {
    console.log("whoops, no quote", error);
    //run getQuote again (recursive)
    getQuote();
  }
}

// Tweet Quote
function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
  window.open(twitterUrl, "_blank"); //open new tab
}

// Add Event Listener
newQuoteBtn.addEventListener("click", newQuote);
twitterBtn.addEventListener("click", tweetQuote);

// On Load
getQuote();
