// Initial charge level
let charge = 100;

// DOM elements
const chargeDisplay = document.getElementById("chargeLevel");
const chargeBar = document.getElementById("chargeBar");

// Update battery visuals
function updateBattery() {
  chargeDisplay.textContent = `${charge}%`;
  chargeBar.style.width = `${charge}%`;

  // Optional: change color based on charge
  if (charge > 60) {
    chargeBar.style.backgroundColor = "#4CAF50"; // green
  } else if (charge > 30) {
    chargeBar.style.backgroundColor = "#FFC107"; // amber
  } else {
    chargeBar.style.backgroundColor = "#F44336"; // red
  }
}

// Simulate drain
function drainBattery() {
  if (charge > 0) {
    charge -= 1;
    updateBattery();
  }
}

// Start draining every second
setInterval(drainBattery, 1000);

// Initialize visuals on page load
updateBattery();