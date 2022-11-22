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
    
    break;
    case "2":
      break;
    case "3":
      break;
  }
}
