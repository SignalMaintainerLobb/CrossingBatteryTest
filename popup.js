// Grab UI elements
const openBtn = document.getElementById("openPopupBtn");
const closeBtn = document.getElementById("closePopupBtn");
const popup = document.getElementById("popup");

// Show the popup
openBtn.addEventListener("click", () => {
  popup.classList.remove("hidden");
});

// Hide the popup
closeBtn.addEventListener("click", () => {
  popup.classList.add("hidden");
});