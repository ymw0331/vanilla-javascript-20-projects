const audioElement = document.getElementById("audio");
const button = document.getElementById("button");

// Disable/Enable Button
function toggleButton() {
  button.disabled = !button.disabled;
}

// Passing Joke to VoiceRSS API
function tellMe(joke) {
  console.log("Tell me a joke:", joke);
  //  Invoke VoiceRSS from voice.js
  VoiceRSS.speech({
    key: "dc63af1897554e55ad112e3111b412dd",
    src: joke,
    hl: "en-us",
    v: "Linda",
    r: 2,
    c: "mp3",
    f: "44khz_16bit_stereo",
    ssml: false,
  });
}

// Get joke from Joke API
async function getJokes() {
  let joke = "";

  const apiUrl = `https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    if (data.setup) {
      joke = `${data.setup} ... ${data.delivery}`;
    } else {
      joke = data.joke;
    }
    // Text-to-speech
    tellMe(joke);
    // Disable button
    toggleButton();
  } catch (error) {
    console.log("Error:", error);
  }
}

// Event Listeners
button.addEventListener("click", getJokes);
audioElement.addEventListener("ended", toggleButton);
