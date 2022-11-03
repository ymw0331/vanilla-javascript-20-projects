const modal = document.getElementById("modal");
const modalShow = document.getElementById("show-modal");
const modalClose = document.getElementById("close-modal");
const bookmarkForm = document.getElementById("bookmark-form");
const websiteNameEl = document.getElementById("website-name");
const websiteUrlEl = document.getElementById("website-url");
const bookmarksContainer = document.getElementById("bookmarks-container");

//Show Modal, Focus on first input
function showModal() {
  modal.classList.add("show-modal");
  websiteNameEl.focus(); //cursor goes to first line
}

// Modal Event Listener
modalShow.addEventListener("click", showModal);
modalClose.addEventListener("click", () => {
  modal.classList.remove("show-modal");
});

// Add event listener to window
window.addEventListener("click", (e) =>
  e.target === modal ? modal.classList.remove("show-modal") : false
);

//Validate form
function validate(nameValue, urlValue) {
  const expression =
    /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/g;
  const regex = new RegExp(expression);

  if (t.match(regex)) {
    alert("Successful match");
  }
    if(!urlValue.match(regex)){
        
    }
  } else {
    alert("No match");
  }

//Handle Data From Form
function storeBookmark(e) {
  //prevent it from submit form to web server via network
  e.preventDefault();
  //   console.log(e);

  const nameValue = websiteNameEl.value;
  let urlValue = websiteUrlEl.value; // make it a let to add https dynamically

  if (!urlValue.includes("http://", "https://")) {
    urlValue = `https://${urlValue}`;
  }

  console.log(nameValue, urlValue);
}

// Event listener for form
bookmarkForm.addEventListener("submit", storeBookmark);
