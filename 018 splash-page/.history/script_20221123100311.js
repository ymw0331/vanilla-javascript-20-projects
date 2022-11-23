const { body } = document;
let count = 0;
const ourMemeory = {
[count]: Array
}


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
      return previousBackground === "background-1"
        ? false
        : body.classList.add("background-1");
    case "2":
      return previousBackground === "background-2"
        ? false
        : body.classList.add("background-2");
    case "3":
      return previousBackground === "background-3"
        ? false
        : body.classList.add("background-3");
  }
}
