const modal = document.getElementById("modal");
const modalShow = document.getElementById("show-modal");
const modalClose = document.getElementById("close-modal");
const bookmarkForm = document.getElementById("bookmark-form");
const websiteNameEl = document.getElementById("website-name");
const websiteUrlEl = document.getElementById("website-url");
const bookmarksContainer = document.getElementById("bookmarks-container");

// array of bookmarks
let bookmarks = [];

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

// Validate Form
function validate(nameValue, urlValue) {
  const expression =
    /(https)?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/g;
  const regex = new RegExp(expression);
  if (!nameValue || !urlValue) {
    alert("Please submit values for both fields.");
    return false;
  }
  if (!urlValue.match(regex)) {
    alert("Please provide a valid web address.");
    return false;
  }
  // Valid
  return true;
}

function buildBookmarksDOM() {
  //Build items
  bookmarks.forEach((bookmark) => {
    const { name, url } = bookmark;
    // console.log(name, url);

    //Create element one at a time
    const item = document.createElement('div');
    item.classList.add('item');

    //Close Icon
    const closeIcon = document.createElement('i');
    closeIcon.classList.add('fas', 'fa-times');
    closeIcon.setAttribute('title', 'Delete Bookmark');
    closeIcon.setAttribute('onclick')

  });
}

//Fetch Bookmark
function fetchBookmarks() {
  //json parse to take string convert to object
  //get bookmark from local storage if available
  if (localStorage.getItem("bookmarks")) {
    bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
  } else {
    //create bookmarks array in local storate, create a sample
    bookmarks = [
      { name: "Wayne Yong", url: "https://www.linkedin.com/in/ymw0331/" },
    ];
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  }
  //   console.log(bookmarks);
  buildBookmarksDOM();
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
  if (!validate(nameValue, urlValue)) {
    return false;
  }

  const bookmark = {
    name: nameValue,
    url: urlValue,
  };
  bookmarks.push(bookmark);
  //   console.log(bookmarks);
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks)); // it needed to be stringify before send to server
  fetchBookmarks();
  bookmarkForm.reset();
  websiteNameEl.focus();
}

// Event listener for form\
bookmarkForm.addEventListener("submit", storeBookmark);

//On load, fetch bookmarks
fetchBookmarks();
