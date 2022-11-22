const { body } = document;

function changeBackground(number) {
  // Check if background is aldready showing
  let previousBackground;
  if (body.className) {
    previousBackground = body.className;
  }
  // Reset css class on body
  body.className = "";
  switch (number) {
    case "1":
      return previousBackground === "background-1" ? false;
    case "2":
    case "3":
  }
}
