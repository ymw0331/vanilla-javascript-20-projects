const { body } = document;

function changeBackground(number) {
  console.log(number);

  switch (number) {
    case "1":
      body.classList.add("background-1");
      break;
  }
}
