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
modalClose.addEventListener('click', close)

function clossModal(){

}