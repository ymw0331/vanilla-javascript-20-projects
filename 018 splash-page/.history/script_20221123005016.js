const { body } = document;

function changeBackground(number) {
    // Check if background is aldready showing
    let previousBackground;
    

    // Reset css class on body
  body.className = "";
  switch (number) {
    case "1":
      body.classList.add("background-1");
      break;
    case "2":
      body.classList.add("background-2");
      break;
    case "3":
      body.classList.add("background-3");
      break;
  }
}
