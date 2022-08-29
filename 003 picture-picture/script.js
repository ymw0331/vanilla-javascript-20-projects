const videoElement = document.getElementById("video");
const button = document.getElementById("button");

// https://developer.mozilla.org/en-US/docs/Web/API/Picture-in-Picture_API

// Prompt to select media stream, pass to video element, then play
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    // Catch Error Here
    console.log("whoops, eroor here:", error);
  }
}

button.addEventListener("click", async () => {
  // Disable Button
  button.disabled = true;
  // Start Picture in picture
  await videoElement.requestPictureInPicture();
  // Reset Picture
  button.disable = false;
});

// On Load
selectMediaStream();
